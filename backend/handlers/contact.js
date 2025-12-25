import nodemailer from 'nodemailer';
import { validateEmail, createEmailTemplates } from '../utils/emailUtils.js';
import { getEmailConfig, debugEmailConfig } from '../config/email.js';

export async function handleContactForm(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Ensure body exists
  if (!req.body) {
    return res.status(400).json({ message: 'Request body is missing' });
  }

  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      message: 'Missing required fields',
      details: {
        name: !name ? 'Name is required' : undefined,
        email: !email ? 'Email is required' : undefined,
        message: !message ? 'Message is required' : undefined
      }
    });
  }

  // Trim and validate field lengths
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();
  const trimmedSubject = subject ? subject.trim() : '';

  if (trimmedName.length < 2) {
    return res.status(400).json({ message: 'Name must be at least 2 characters long' });
  }

  if (trimmedMessage.length < 10) {
    return res.status(400).json({ message: 'Message must be at least 10 characters long' });
  }

  // Validate email format
  if (!validateEmail(trimmedEmail)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email configuration');
      console.error('EMAIL_USER:', process.env.EMAIL_USER ? 'SET' : 'NOT SET');
      console.error('EMAIL_PASS:', process.env.EMAIL_PASS ? 'SET' : 'NOT SET');
      return res.status(500).json({ message: 'Email service not configured' });
    }

    console.log('Creating transporter for email service');
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0);
    
    // Debug email config
    debugEmailConfig();
    
    // Get email config (reads env vars at call time, not module load time)
    const emailConfig = getEmailConfig();
    const transporter = nodemailer.createTransport(emailConfig);

    // Test the connection with timeout
    const verifyPromise = transporter.verify();
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Connection timeout')), 8000)
    );
    
    await Promise.race([verifyPromise, timeoutPromise]);
    console.log('Email transporter verified successfully');

    // Create email templates with trimmed values
    const { adminMailOptions, userMailOptions } = createEmailTemplates({
      name: trimmedName,
      email: trimmedEmail,
      subject: trimmedSubject,
      message: trimmedMessage
    });

    console.log('Sending admin email...');
    await transporter.sendMail(adminMailOptions);
    console.log('Admin email sent successfully');

    console.log('Sending user confirmation email...');
    await transporter.sendMail(userMailOptions);
    console.log('User confirmation email sent successfully');

    return res.status(200).json({ 
      message: 'Emails sent successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Email error details:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      stack: error.stack
    });
    
    // Check if response has already been sent (compatible with both Express and Vercel)
    const headersSent = res.headersSent || (typeof res.headersSent === 'boolean' && res.headersSent);
    
    if (!headersSent) {
      return res.status(500).json({ 
        message: 'Failed to send email', 
        error: error.message,
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      });
    }
  }
}
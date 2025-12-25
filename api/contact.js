import { handleContactForm } from '../backend/handlers/contact.js';

// Vercel serverless function configuration
export const config = {
  maxDuration: 10,
};

// Vercel serverless function handler
// This works as a Vercel serverless function and uses the shared handler
export default async function handler(req, res) {
  // Ensure we have proper request/response objects
  // Vercel provides req and res objects that are compatible with our handler
  
  // Handle CORS preflight (Vercel handles this via vercel.json, but we'll handle it here too)
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Vercel automatically parses JSON bodies when Content-Type is application/json
  // But we'll ensure it's properly formatted
  if (req.method === 'POST') {
    // If body is a string, try to parse it (fallback for edge cases)
    if (typeof req.body === 'string') {
      try {
        req.body = JSON.parse(req.body);
      } catch (e) {
        return res.status(400).json({ message: 'Invalid JSON in request body' });
      }
    }
    // Ensure body is an object
    if (!req.body || typeof req.body !== 'object') {
      return res.status(400).json({ message: 'Request body must be a JSON object' });
    }
  }

  // Call the shared handler - it's compatible with Vercel's req/res format
  try {
    await handleContactForm(req, res);
  } catch (error) {
    console.error('Vercel function error:', error);
    // Only send response if headers haven't been sent yet
    if (!res.headersSent) {
      return res.status(500).json({ 
        message: 'Internal server error', 
        error: error.message,
        // Only include stack in development
        ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
      });
    }
  }
}
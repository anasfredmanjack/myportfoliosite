import { getEmailSettings } from '../config/email.js';

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function createEmailTemplates({ name, email, subject, message }) {
  // Get email settings (reads env vars when called, not at module load)
  const { from, admin, production } = getEmailSettings();

  const adminMailOptions = {
    from: `${from.name} <${from.email}>`,
    to: admin.email,
    replyTo: email,
    subject: subject ? `${subject} - from ${name}` : `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'No subject'}\nMessage: ${message}`,
    html: createAdminEmailTemplate({ name, email, subject, message }),
  };

  const userMailOptions = {
    from: `${from.name} <${from.email}>`,
    to: email,
    subject: '⚡ Signal Received - We\'ll be in touch!',
    text: `Hi ${name},\n\nThank you for reaching out through my portfolio contact system. I've received your message and will get back to you shortly.\n\nBest regards,\nAnas Fred`,
    html: createUserEmailTemplate({ name, subject, production }),
  };

  return { adminMailOptions, userMailOptions };
}

function createAdminEmailTemplate({ name, email, subject, message }) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Message</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%); color: #ffffff;">
      <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 24px; overflow: hidden; box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);">
        
        <!-- Header -->
        <div style="background: linear-gradient(90deg, #00f3ff 0%, #bc13fe 50%, #ff0055 100%); padding: 2px;">
          <div style="background: #0a0a0a; padding: 32px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold; background: linear-gradient(90deg, #00f3ff 0%, #bc13fe 50%, #ff0055 100%); -webkit-background-clip: text; background-clip: text; color: transparent;">
              ⚡ New Contact Signal Received
            </h1>
            <p style="margin: 8px 0 0 0; color: #888; font-size: 14px;">Portfolio Contact System</p>
          </div>
        </div>

        <!-- Content -->
        <div style="padding: 32px;">
          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 24px; margin-bottom: 24px;">
            <h2 style="margin: 0 0 20px 0; color: #00f3ff; font-size: 20px; font-weight: 600;">Contact Details</h2>
            
            <div style="margin-bottom: 16px;">
              <span style="color: #888; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Name</span>
              <p style="margin: 4px 0 0 0; color: #ffffff; font-size: 16px; font-weight: 500;">${name}</p>
            </div>

            <div style="margin-bottom: 16px;">
              <span style="color: #888; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Email</span>
              <p style="margin: 4px 0 0 0; color: #00f3ff; font-size: 16px; font-weight: 500;">${email}</p>
            </div>

            ${subject ? `
            <div style="margin-bottom: 16px;">
              <span style="color: #888; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Subject</span>
              <p style="margin: 4px 0 0 0; color: #bc13fe; font-size: 16px; font-weight: 500;">${subject}</p>
            </div>
            ` : ''}
          </div>

          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 24px;">
            <h3 style="margin: 0 0 16px 0; color: #ff0055; font-size: 18px; font-weight: 600;">Message</h3>
            <div style="background: rgba(0, 0, 0, 0.3); border-radius: 12px; padding: 20px; border-left: 4px solid #00f3ff;">
              <p style="margin: 0; color: #ffffff; line-height: 1.6; font-size: 15px; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <!-- Action Button -->
          <div style="text-align: center; margin-top: 32px;">
            <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(90deg, #00f3ff 0%, #bc13fe 100%); color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 12px; font-weight: 600; font-size: 16px; transition: all 0.3s ease;">
              Reply to ${name} →
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: rgba(255, 255, 255, 0.02); padding: 20px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1);">
          <p style="margin: 0; color: #666; font-size: 12px;">
            🚀 Transmitted via Portfolio Contact System • ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function createUserEmailTemplate({ name, subject, production }) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Message Received</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%); color: #ffffff;">
      <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 24px; overflow: hidden; box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);">
        
        <!-- Header -->
        <div style="background: linear-gradient(90deg, #00f3ff 0%, #bc13fe 50%, #ff0055 100%); padding: 2px;">
          <div style="background: #0a0a0a; padding: 32px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold; background: linear-gradient(90deg, #00f3ff 0%, #bc13fe 50%, #ff0055 100%); -webkit-background-clip: text; background-clip: text; color: transparent;">
              ✨ Transmission Confirmed
            </h1>
            <p style="margin: 8px 0 0 0; color: #888; font-size: 14px;">Portfolio Contact System</p>
          </div>
        </div>

        <!-- Content -->
        <div style="padding: 32px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <div style="width: 80px; height: 80px; margin: 0 auto 20px; background: linear-gradient(135deg, #00f3ff 0%, #bc13fe 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px;">
              🚀
            </div>
            <h2 style="margin: 0 0 16px 0; color: #ffffff; font-size: 24px; font-weight: 600;">Hi ${name}!</h2>
            <p style="margin: 0; color: #888; font-size: 16px; line-height: 1.6;">
              Your message has been successfully transmitted through my portfolio contact system.
            </p>
          </div>

          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 24px; margin-bottom: 24px;">
            <h3 style="margin: 0 0 16px 0; color: #00f3ff; font-size: 18px; font-weight: 600;">What happens next?</h3>
            <div style="space-y: 12px;">
              <div style="display: flex; align-items: center; margin-bottom: 12px;">
                <span style="color: #bc13fe; margin-right: 12px; font-size: 18px;">⚡</span>
                <span style="color: #ffffff; font-size: 15px;">I'll review your message within 24 hours</span>
              </div>
              <div style="display: flex; align-items: center; margin-bottom: 12px;">
                <span style="color: #ff0055; margin-right: 12px; font-size: 18px;">🎯</span>
                <span style="color: #ffffff; font-size: 15px;">You'll receive a personalized response</span>
              </div>
              <div style="display: flex; align-items: center;">
                <span style="color: #00f3ff; margin-right: 12px; font-size: 18px;">🚀</span>
                <span style="color: #ffffff; font-size: 15px;">Let's discuss your project or opportunity</span>
              </div>
            </div>
          </div>

          ${subject ? `
          <div style="background: rgba(0, 243, 255, 0.1); border: 1px solid rgba(0, 243, 255, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 24px;">
            <p style="margin: 0; color: #00f3ff; font-size: 14px; font-weight: 500;">
              📋 Subject: ${subject}
            </p>
          </div>
          ` : ''}

          <div style="text-align: center; margin-top: 32px;">
            <p style="margin: 0 0 20px 0; color: #888; font-size: 14px;">
              In the meantime, feel free to explore my work
            </p>
            <a href="${production.url}" style="display: inline-block; background: linear-gradient(90deg, #00f3ff 0%, #bc13fe 100%); color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 12px; font-weight: 600; font-size: 14px;">
              View Portfolio →
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: rgba(255, 255, 255, 0.02); padding: 20px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1);">
          <p style="margin: 0 0 8px 0; color: #ffffff; font-size: 16px; font-weight: 600;">
            Best regards,<br>
            <span style="background: linear-gradient(90deg, #00f3ff 0%, #bc13fe 100%); -webkit-background-clip: text; background-clip: text; color: transparent;">Anas Fred</span>
          </p>
          <p style="margin: 0; color: #666; font-size: 12px;">
            🌟 Portfolio Contact System • ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}
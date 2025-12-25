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
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0a0a0a; color: #ffffff;">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #0a0a0a; padding: 20px 0;">
        <tr>
          <td align="center">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #1a1a2e; border-radius: 24px; overflow: hidden;">
              
              <!-- Header -->
              <tr>
                <td style="background-color: #00f3ff; padding: 2px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="background-color: #0a0a0a; padding: 32px; text-align: center;">
                        <h1 style="margin: 0; font-size: 28px; font-weight: bold; color: #00f3ff;">
                          ⚡ New Contact Signal Received
                        </h1>
                        <p style="margin: 8px 0 0 0; color: #aaaaaa; font-size: 14px;">Portfolio Contact System</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding: 32px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="background-color: #1a1a2e; border: 1px solid #333333; border-radius: 16px; padding: 24px; margin-bottom: 24px;">
                        <h2 style="margin: 0 0 20px 0; color: #00f3ff; font-size: 20px; font-weight: 600;">Contact Details</h2>
                        
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 16px;">
                          <tr>
                            <td>
                              <span style="color: #aaaaaa; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Name</span>
                              <p style="margin: 4px 0 0 0; color: #ffffff; font-size: 16px; font-weight: 500;">${name}</p>
                            </td>
                          </tr>
                        </table>

                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 16px;">
                          <tr>
                            <td>
                              <span style="color: #aaaaaa; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Email</span>
                              <p style="margin: 4px 0 0 0; color: #00f3ff; font-size: 16px; font-weight: 500;">${email}</p>
                            </td>
                          </tr>
                        </table>

                        ${subject ? `
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 16px;">
                          <tr>
                            <td>
                              <span style="color: #aaaaaa; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Subject</span>
                              <p style="margin: 4px 0 0 0; color: #bc13fe; font-size: 16px; font-weight: 500;">${subject}</p>
                            </td>
                          </tr>
                        </table>
                        ` : ''}
                      </td>
                    </tr>
                  </table>

                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="background-color: #1a1a2e; border: 1px solid #333333; border-radius: 16px; padding: 24px;">
                        <h3 style="margin: 0 0 16px 0; color: #ff0055; font-size: 18px; font-weight: 600;">Message</h3>
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                          <tr>
                            <td style="background-color: #0a0a0a; border-radius: 12px; padding: 20px; border-left: 4px solid #00f3ff;">
                              <p style="margin: 0; color: #ffffff; line-height: 1.6; font-size: 15px; white-space: pre-wrap;">${message}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- Action Button -->
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td align="center" style="padding-top: 32px;">
                        <a href="mailto:${email}" style="display: inline-block; background-color: #00f3ff; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 12px; font-weight: 600; font-size: 16px;">
                          Reply to ${name} →
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #0a0a0a; padding: 20px; text-align: center; border-top: 1px solid #333333;">
                  <p style="margin: 0; color: #aaaaaa; font-size: 12px;">
                    🚀 Transmitted via Portfolio Contact System • ${new Date().toLocaleString()}
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
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
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0a0a0a; color: #ffffff;">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #0a0a0a; padding: 20px 0;">
        <tr>
          <td align="center">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #1a1a2e; border-radius: 24px; overflow: hidden;">
              
              <!-- Header -->
              <tr>
                <td style="background-color: #00f3ff; padding: 2px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="background-color: #0a0a0a; padding: 32px; text-align: center;">
                        <h1 style="margin: 0; font-size: 28px; font-weight: bold; color: #00f3ff;">
                          ✨ Transmission Confirmed
                        </h1>
                        <p style="margin: 8px 0 0 0; color: #aaaaaa; font-size: 14px;">Portfolio Contact System</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding: 32px;">
                  <!-- Success Icon and Greeting -->
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td align="center" style="padding-bottom: 32px;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                          <tr>
                            <td style="width: 80px; height: 80px; background-color: #00f3ff; border-radius: 50%; text-align: center; vertical-align: middle; font-size: 32px; line-height: 80px;">
                              🚀
                            </td>
                          </tr>
                        </table>
                        <h2 style="margin: 20px 0 16px 0; color: #ffffff; font-size: 24px; font-weight: 600;">Hi ${name}!</h2>
                        <p style="margin: 0; color: #aaaaaa; font-size: 16px; line-height: 1.6;">
                          Your message has been successfully transmitted through my portfolio contact system.
                        </p>
                      </td>
                    </tr>
                  </table>

                  <!-- What Happens Next Card -->
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="background-color: #1a1a2e; border: 1px solid #333333; border-radius: 16px; padding: 24px; margin-bottom: 24px;">
                        <h3 style="margin: 0 0 16px 0; color: #00f3ff; font-size: 18px; font-weight: 600;">What happens next?</h3>
                        
                        <!-- Timeline Item 1 -->
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 12px;">
                          <tr>
                            <td width="40" valign="top" style="padding-right: 12px;">
                              <span style="color: #bc13fe; font-size: 18px;">⚡</span>
                            </td>
                            <td valign="middle">
                              <span style="color: #ffffff; font-size: 15px;">I'll review your message within 24 hours</span>
                            </td>
                          </tr>
                        </table>

                        <!-- Timeline Item 2 -->
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 12px;">
                          <tr>
                            <td width="40" valign="top" style="padding-right: 12px;">
                              <span style="color: #ff0055; font-size: 18px;">🎯</span>
                            </td>
                            <td valign="middle">
                              <span style="color: #ffffff; font-size: 15px;">You'll receive a personalized response</span>
                            </td>
                          </tr>
                        </table>

                        <!-- Timeline Item 3 -->
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                          <tr>
                            <td width="40" valign="top" style="padding-right: 12px;">
                              <span style="color: #00f3ff; font-size: 18px;">🚀</span>
                            </td>
                            <td valign="middle">
                              <span style="color: #ffffff; font-size: 15px;">Let's discuss your project or opportunity</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  ${subject ? `
                  <!-- Subject Card -->
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="background-color: #0a1a2e; border: 1px solid #00f3ff; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
                        <p style="margin: 0; color: #00f3ff; font-size: 14px; font-weight: 500;">
                          📋 Subject: ${subject}
                        </p>
                      </td>
                    </tr>
                  </table>
                  ` : ''}

                  <!-- CTA Button -->
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td align="center" style="padding-top: 32px;">
                        <p style="margin: 0 0 20px 0; color: #aaaaaa; font-size: 14px;">
                          In the meantime, feel free to explore my work
                        </p>
                        <a href="${production.url}" style="display: inline-block; background-color: #00f3ff; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 12px; font-weight: 600; font-size: 14px;">
                          View Portfolio →
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #0a0a0a; padding: 20px; text-align: center; border-top: 1px solid #333333;">
                  <p style="margin: 0 0 8px 0; color: #ffffff; font-size: 16px; font-weight: 600;">
                    Best regards,<br>
                    <span style="color: #00f3ff; font-weight: 700;">Anas Fred</span>
                  </p>
                  <p style="margin: 0; color: #aaaaaa; font-size: 12px;">
                    🌟 Portfolio Contact System • ${new Date().toLocaleString()}
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}
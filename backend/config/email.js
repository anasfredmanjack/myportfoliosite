// Function to get email config (reads env vars when called, not at module load)
// This ensures environment variables are loaded before reading them
export function getEmailConfig() {
  return {
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // Add timeout for Vercel serverless functions
    connectionTimeout: 10000,
    greetingTimeout: 5000,
    socketTimeout: 10000,
  };
}

// Debug function to check config
export function debugEmailConfig() {
  const config = getEmailConfig();
  console.log('Email Config Debug:');
  console.log('- Service:', config.service);
  console.log('- User:', config.auth.user ? 'SET' : 'NOT SET');
  console.log('- Pass:', config.auth.pass ? 'SET' : 'NOT SET');
  console.log('- User value:', config.auth.user);
  console.log('- Pass length:', config.auth.pass ? config.auth.pass.length : 0);
}

// Function to get email settings (reads env vars when called, not at module load)
export function getEmailSettings() {
  return {
    from: {
      name: process.env.EMAIL_FROM_NAME || 'Portfolio Contact Form',
      email: process.env.EMAIL_FROM || process.env.EMAIL_USER
    },
    admin: {
      email: process.env.EMAIL_USER
    },
    production: {
      url: process.env.VITE_PRODUCTION_URL || 'http://localhost:5173'
    }
  };
}
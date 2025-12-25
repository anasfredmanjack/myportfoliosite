# Vercel Deployment Guide

## Project Structure

```
├── api/                    # Vercel serverless functions
│   └── contact.js         # Contact API endpoint (imports from backend)
├── backend/               # Organized backend code
│   ├── handlers/          # Request handlers
│   ├── utils/            # Utility functions
│   └── config/           # Configuration files
├── src/                  # React frontend
├── dev-server.js         # Development API server
├── vite.config.js        # Vite configuration with API proxy
└── vercel.json           # Vercel deployment configuration
```

## Development vs Production

### Development (localhost)
- Run `npm run dev` to start both frontend and backend
- Vite dev server runs on port 5173
- Express API server runs on port 3001
- Vite proxies `/api/*` requests to the Express server

### Production (Vercel)
- Frontend is built as static files
- API routes become Vercel serverless functions
- Same handler code is used for consistency

## Environment Variables Setup

Before deploying to Vercel, configure these environment variables in your Vercel dashboard:

### Required Variables:
```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-custom-email@domain.com
EMAIL_FROM_NAME=Your Name or Business Name
```

### Optional Variables:
```
NODE_ENV=production
VITE_APP_TITLE=Your Portfolio Title
VITE_PRODUCTION_URL=https://your-domain.vercel.app
```

## Gmail Setup Instructions:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this 16-character password as `EMAIL_PASS`

## Deployment Steps:

1. **Connect to Vercel**:
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

3. **Set Environment Variables** in Vercel Dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add all required variables listed above

## Development Commands:

```bash
# Start both frontend and backend for development
npm run dev

# Start only the frontend (Vite)
npm run dev:client

# Start only the backend API server
npm run dev:api

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features:
- ✅ Clean, modular backend structure
- ✅ Serverless API routes for Vercel
- ✅ Development server with hot reload
- ✅ Email functionality with Gmail
- ✅ Beautiful responsive email templates
- ✅ CORS handling
- ✅ Error handling and logging
- ✅ Production optimizations
- ✅ Environment-specific configurations

## Testing:
After deployment, test the contact form to ensure emails are being sent successfully.
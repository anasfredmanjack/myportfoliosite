# Backend Structure

This folder contains the organized backend code for the portfolio contact system.

## Structure

```
backend/
├── handlers/          # Request handlers
│   └── contact.js     # Contact form handler
├── utils/            # Utility functions
│   └── emailUtils.js # Email validation and template creation
├── config/           # Configuration files
│   └── email.js      # Email service configuration
└── README.md         # This file
```

## How it works

### Development
- The `dev-server.js` runs an Express server on port 3001
- Vite proxies `/api/*` requests to the development server
- Uses the same handler code as production for consistency

### Production (Vercel)
- The `/api/contact.js` file imports and uses the handler from `backend/handlers/contact.js`
- Vercel automatically creates serverless functions from files in the `/api` directory
- Environment variables are configured in Vercel dashboard

## Features

- ✅ Modular, organized code structure
- ✅ Shared logic between development and production
- ✅ Email validation and sanitization
- ✅ Beautiful HTML email templates
- ✅ Error handling and logging
- ✅ CORS support
- ✅ Environment-specific configurations

## Environment Variables

Required:
- `EMAIL_USER` - Gmail address
- `EMAIL_PASS` - Gmail app password
- `EMAIL_FROM` - Custom sender email
- `EMAIL_FROM_NAME` - Custom sender name

Optional:
- `VITE_PRODUCTION_URL` - Production URL for email links
- `DEV_API_PORT` - Development server port (default: 3001)
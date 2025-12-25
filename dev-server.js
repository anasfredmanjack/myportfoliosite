import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { handleContactForm } from './backend/handlers/contact.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.DEV_API_PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));
app.use(express.json());

// Wrap handler for Express (development server)
// The handler is designed to work with both Express and Vercel request/response objects
app.post('/api/contact', async (req, res) => {
  // Create request/response objects compatible with the handler
  // The handler expects objects with: method, body, and res methods: status(), json(), setHeader(), end()
  const handlerReq = {
    method: req.method,
    body: req.body,
    headers: req.headers,
    query: req.query
  };

  // Create a response object that mimics Vercel's response API
  // but uses Express's underlying response
  let headersSent = false;
  const handlerRes = {
    status: (code) => {
      res.status(code);
      return handlerRes;
    },
    json: (data) => {
      if (!headersSent) {
        headersSent = true;
        res.json(data);
      }
      return handlerRes;
    },
    setHeader: (name, value) => {
      res.setHeader(name, value);
      return handlerRes;
    },
    end: () => {
      if (!headersSent) {
        headersSent = true;
        res.end();
      }
      return handlerRes;
    },
    get headersSent() {
      return headersSent || res.headersSent;
    }
  };

  try {
    await handleContactForm(handlerReq, handlerRes);
  } catch (error) {
    console.error('Dev server error:', error);
    if (!res.headersSent && !headersSent) {
      res.status(500).json({ 
        message: 'Internal server error', 
        error: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      });
    }
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Development API server is running',
    environment: 'development',
    port: PORT
  });
});

// Start server only if not in production
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Development API server running on http://localhost:${PORT}`);
    console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`);
  });
}

export default app;
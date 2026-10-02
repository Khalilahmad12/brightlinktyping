import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import contactRoutes from './backend/routes/contactRoutes.js';
import inquiryRoutes from './backend/routes/inquiryRoutes.js';
import authRoutes from './backend/routes/authRoutes.js';
import { connectDB } from './backend/config/db.js';
import { errorHandler } from './backend/middleware/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  // Initialize Data Layer
  await connectDB();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Mount API Endpoints
  app.use('/api/contact', contactRoutes);
  app.use('/api/inquiries', inquiryRoutes);
  app.use('/api/auth', authRoutes);

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'online',
      brand: 'BrightLink Typing & Consulting',
      location: 'Business Bay, Dubai, UAE',
      timestamp: new Date().toISOString()
    });
  });

  // Serve static assets from public folder (videos, posters, favicon)
  app.use(express.static(path.join(__dirname, 'public')));

  // Vite integration
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  // Error handling middleware
  app.use(errorHandler);

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`BrightLink Full-Stack Server active on http://0.0.0.0:${PORT}`);
  });
}

startServer();

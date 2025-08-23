import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes';
import { errorHandler } from './middleware/errorHandler';

// Load environment variables from .env file
dotenv.config();

// Create Express application
const app = express();

// Middleware
app.use(cors());                // Allow cross-origin requests

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Parse JSON request bodies with increased logging
app.use(express.json({
  verify: (req, res, buf) => {
    try {
      JSON.parse(buf.toString());
    } catch (e) {
      console.error('Invalid JSON received:', buf.toString());
      throw new Error('Invalid JSON');
    }
  }
}));

// Add body logging for debugging
app.use((req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    console.log('Request body:', req.body);
  }
  next();
});

// Routes
app.use('/tasks', taskRoutes);  // Mount task routes at /tasks endpoint

// Default route
app.get('/', (req, res) => {
  res.send('Todo API is running');
});

// Error handling middleware (should be last)
app.use(errorHandler);

export default app;
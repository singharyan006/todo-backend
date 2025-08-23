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
app.use(express.json());        // Parse JSON request bodies

// Routes
app.use('/tasks', taskRoutes);  // Mount task routes at /tasks endpoint

// Default route
app.get('/', (req, res) => {
  res.send('Todo API is running');
});

// Error handling middleware (should be last)
app.use(errorHandler);

export default app;
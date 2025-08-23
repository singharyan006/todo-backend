import mongoose from 'mongoose';
import app from './index';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Define port to run the server on
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/todo-app';

mongoose.connect(MONGODB_URI)
  .then(() => {
    // Log successful connection
    console.log('Connected to MongoDB');
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(error => {
    // Log error and exit if MongoDB connection fails
    console.error('MongoDB connection error:', error);
    process.exit(1);  // Exit with error
  });
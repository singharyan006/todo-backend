import { Request, Response } from 'express';
import Task from '../models/Task';

// Create a new task
export const createTask = async (req: Request, res: Response) => {
  try {
    // Get task data from request body
    const { title, description, status } = req.body;
    
    // Check if title is provided
    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }
    
    // Create a new task
    const newTask = new Task({
      title,
      description,
      status: status || 'pending'
    });
    
    // Save task to database
    const savedTask = await newTask.save();
    
    // Return success response with the created task
    res.status(201).json(savedTask);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: 'Error creating task' });
  }
};

// Get all tasks (with optional filtering by status)
export const getTasks = async (req: Request, res: Response) => {
  try {
    // Get status from query parameter (if provided)
    const { status } = req.query;
    let filter = {};
    
    // If status is valid, add it to the filter
    if (status === 'pending' || status === 'completed') {
      filter = { status };
    }
    
    // Find tasks that match the filter
    const tasks = await Task.find(filter);
    
    // Return the tasks
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Error fetching tasks' });
  }
};

// Update a task by ID
export const updateTask = async (req: Request, res: Response) => {
  try {
    // Get the task ID from the URL parameter
    const { id } = req.params;
    
    // Get the data to update from request body
    const updateData = req.body;
    
    // Update the task and get the updated version
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      updateData,
      { new: true } // Return the updated document
    );
    
    // If task not found, return 404
    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    // Return the updated task
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ message: 'Error updating task' });
  }
};

// Delete a task by ID
export const deleteTask = async (req: Request, res: Response) => {
  try {
    // Get the task ID from the URL parameter
    const { id } = req.params;
    
    // Find and delete the task
    const deletedTask = await Task.findByIdAndDelete(id);
    
    // If task not found, return 404
    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    // Return success message
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ message: 'Error deleting task' });
  }
};
import { Router } from 'express';
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} from '../controllers/taskController';

// Create a router
const router = Router();

// Define routes:

// POST /tasks - Create a new task
router.post('/', createTask);

// GET /tasks - Get all tasks (with optional status filter)
router.get('/', getTasks);

// PUT /tasks/:id - Update a task by ID
router.put('/:id', updateTask);

// DELETE /tasks/:id - Delete a task by ID
router.delete('/:id', deleteTask);

export default router;
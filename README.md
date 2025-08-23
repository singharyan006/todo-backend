# Todo Backend API

A RESTful API for a Todo List application built with Express.js, TypeScript, and MongoDB.

## Features

- Create new tasks
- List all tasks (with optional filtering by status)
- Update existing tasks
- Delete tasks

## Technologies

- Node.js
- Express.js
- TypeScript
- MongoDB with Mongoose

## Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB instance

### Installation

1. Clone the repository:
```bash
git clone https://github.com/singharyan006/todo-backend.git
cd todo-backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

### MongoDB Setup

#### Option 1: Use MongoDB Atlas (Recommended for cloud hosting)

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a new cluster
3. In "Database Access," create a new user with read/write privileges
4. In "Network Access," allow access from your IP or from anywhere (0.0.0.0/0)
5. Click "Connect" and choose "Connect your application"
6. Copy the connection string and replace `<username>` and `<password>` with your credentials
7. Add this connection string to your `.env` file

#### Option 2: Use Local MongoDB

1. Install and start MongoDB locally
2. Set `MONGODB_URI=mongodb://127.0.0.1:27017/todoapp` in your `.env` file

## Running the Application

### Development mode:
```bash
npm run dev
```

### Build for production:
```bash
npm run build
```

### Run in production mode:
```bash
npm start
```

## Learning the Codebase

The codebase follows a structured approach:

- `src/server.ts` - Main entry point that connects to MongoDB and starts the server
- `src/index.ts` - Sets up the Express application with middleware and routes
- `src/models/Task.ts` - Task model definition with schema
- `src/controllers/taskController.ts` - Request handlers for CRUD operations
- `src/routes/taskRoutes.ts` - API route definitions

The code includes detailed comments to help beginners understand how the application works.

## API Endpoints

### Create Task
- **Method**: POST
- **Endpoint**: `/tasks`
- **Body**:
  ```json
  {
    "title": "Buy groceries",
    "description": "Milk, Eggs, Bread",
    "status": "pending"
  }
  ```

### Get All Tasks
- **Method**: GET
- **Endpoint**: `/tasks`
- **Query Parameters**:
  - `status`: (optional) - Filter by "pending" or "completed"

### Update Task
- **Method**: PUT
- **Endpoint**: `/tasks/:id`
- **Body** (all fields optional):
  ```json
  {
    "title": "Updated title",
    "description": "Updated description",
    "status": "completed"
  }
  ```

### Delete Task
- **Method**: DELETE
- **Endpoint**: `/tasks/:id`

## Environment Variables

- `PORT`: The port the server will run on (default: 3000)
- `MONGODB_URI`: MongoDB connection string

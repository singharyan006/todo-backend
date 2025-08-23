# Getting Started Guide for Beginners

This guide will help you understand the structure and functionality of this Todo List backend application. The project is built using Node.js, Express.js, TypeScript, and MongoDB.

## Project Structure Explained

```
src/
├── index.ts          # Sets up the Express application
├── server.ts         # The entry point that connects to MongoDB and starts the server
├── models/
│   └── Task.ts       # Defines the data structure for tasks
├── controllers/
│   └── taskController.ts  # Contains the request handlers for CRUD operations
└── routes/
    └── taskRoutes.ts      # Defines the API endpoints
```

## Understanding the Code Flow

1. **Starting Point**: When the application starts (`npm run dev`), the code in `server.ts` and `index.ts` runs:
   - `index.ts` sets up the Express application with middleware and routes
   - `server.ts` connects to MongoDB and starts the server
   - The server listens for incoming requests on the specified port

2. **Routes**: When a request comes in, it's directed to a specific handler based on the route:
   - `POST /tasks` - Creates a new task
   - `GET /tasks` - Retrieves all tasks (can be filtered by status or title)
   - `PUT /tasks/:id` - Updates a specific task (can also update by title)
   - `DELETE /tasks/:id` - Deletes a specific task

3. **Controllers**: The route handlers in `taskController.ts` contain the logic for:
   - Creating tasks and saving them to the database
   - Retrieving tasks from the database with filtering options
   - Updating task information by ID or title
   - Deleting tasks from the database

4. **Model**: The `Task.ts` file defines:
   - The structure of a task (title, description, status)
   - Validation rules for task data
   - The Mongoose schema for interaction with MongoDB

## Key Concepts

### Express.js
Express is a web framework for Node.js that makes it easy to create web servers and APIs.

```typescript
// Creating an Express application
const app = express();

// Setting up a route
app.get('/path', (req, res) => {
  res.send('Response');
});

// Starting the server
app.listen(3000, () => {
  console.log('Server running');
});
```

### MongoDB with Mongoose
Mongoose is an Object Data Modeling (ODM) library for MongoDB that provides a schema-based solution.

```typescript
// Defining a schema
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: Boolean
});

// Creating a model
const Task = mongoose.model('Task', taskSchema);

// Using the model to create a document
const newTask = new Task({ title: 'Learn MongoDB', completed: false });
await newTask.save();
```

### RESTful API Design
This application follows REST principles:

| HTTP Method | Endpoint                      | Action                                    |
|------------|-------------------------------|-------------------------------------------|
| GET        | /tasks                        | Retrieve all tasks                        |
| GET        | /tasks?status=pending         | Retrieve all pending tasks                |
| GET        | /tasks?title=keyword          | Search tasks by title (case-insensitive)  |
| POST       | /tasks                        | Create a new task                         |
| PUT        | /tasks/:id                    | Update a task by ID                       |
| PUT        | /tasks/any?title=keyword      | Update a task by title                    |
| DELETE     | /tasks/:id                    | Delete a task by ID                       |
| DELETE     | /tasks/any?title=keyword      | Delete a task by title                    |

## Common Beginner Questions

### What is middleware in Express?
Middleware functions are functions that have access to the request and response objects and the next middleware function. They can:
- Execute code
- Make changes to the request/response objects
- End the request-response cycle
- Call the next middleware function

Example in our code:
```typescript
app.use(cors());         // Allows cross-origin requests
app.use(express.json()); // Parses JSON request bodies
```

### What is MongoDB?
MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. Instead of using tables and rows as in traditional relational databases, MongoDB uses collections and documents.

### What are environment variables?
Environment variables are values that affect the way running processes will behave on a computer. In Node.js applications, they're commonly used to store configuration settings like database connection strings or API keys.

We use the `dotenv` package to load environment variables from a `.env` file.

## Debugging Tips

1. **Console Logging**: Add `console.log()` statements to see what's happening:
   ```typescript
   console.log('Request body:', req.body);
   ```

2. **Error Handling**: Check for specific errors:
   ```typescript
   try {
     // Code that might fail
   } catch (error) {
     console.error('Error details:', error);
   }
   ```

3. **Testing Routes**: Use tools like Postman or Thunder Client (VS Code extension) to test your API endpoints.

## Testing with Postman

1. **Set up Postman**:
   - Create a new collection for your Todo API
   - Set up an environment variable `baseURL` with value `http://localhost:3000`

2. **Test endpoints**:
   - Create task: POST `{{baseURL}}/tasks` with JSON body `{"title": "Buy groceries", "description": "Milk, eggs, bread", "status": "pending"}`
   - Get all tasks: GET `{{baseURL}}/tasks`
   - Search tasks: GET `{{baseURL}}/tasks?title=groceries`
   - Filter tasks: GET `{{baseURL}}/tasks?status=pending`
   - Update task: PUT `{{baseURL}}/tasks/:taskId` or `{{baseURL}}/tasks/any?title=groceries` with updated fields
   - Delete task: DELETE `{{baseURL}}/tasks/:taskId` or `{{baseURL}}/tasks/any?title=groceries`

## Next Steps for Learning

1. Add authentication to protect your API (JWT or OAuth)
2. Implement user-specific tasks
3. Add more fields to the Task model (due date, priority, tags)
4. Implement pagination for large task lists
5. Add data validation with a library like Joi or Zod
6. Write unit and integration tests
7. Create a frontend application that consumes this API
8. Deploy your application to a cloud platform (Heroku, Vercel, AWS)

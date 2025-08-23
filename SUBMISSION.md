# SUBMISSION

## Features Implemented

I have successfully implemented the following features for the Todo List backend:

1. **Add Task** (Create):
   - Implemented a POST endpoint to create new tasks
   - Stores tasks in MongoDB with title, description, and status

2. **Get All Tasks** (Read):
   - Implemented a GET endpoint to retrieve tasks
   - Added filtering capability by status (pending/completed)

3. **Update Task** (Update):
   - Implemented a PUT endpoint to update existing tasks
   - Allows updating task title, description, and status

4. **Delete Task** (Delete):
   - Implemented a DELETE endpoint to remove tasks from the database

## Technical Implementation

- Used Express.js with TypeScript for the backend
- Implemented MongoDB with Mongoose for data persistence
- Used controllers, services, and routes for clean architecture
- Implemented proper error handling for invalid IDs and missing fields
- Created comprehensive documentation in the README.md

## Challenges and Solutions

- **Challenge**: Setting up TypeScript with Express.js
  **Solution**: Configured tsconfig.json with appropriate settings for the project

- **Challenge**: MongoDB integration
  **Solution**: Used Mongoose ODM to simplify database operations

- **Challenge**: Handling error cases
  **Solution**: Implemented try/catch blocks with appropriate status codes

## Future Improvements

If given more time, I would:

- Add user authentication
- Implement task categories/tags
- Add due dates for tasks
- Create unit and integration tests
- Add pagination for the GET endpoint

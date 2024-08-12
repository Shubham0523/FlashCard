# Flashcard Project

<img width="1463" alt="Screenshot 2024-08-12 at 1 00 01 PM" src="https://github.com/user-attachments/assets/ba8bfa99-28e9-4abd-a07d-43f50f3f39e8">
<img width="1463" alt="Screenshot 2024-08-12 at 1 00 10 PM" src="https://github.com/user-attachments/assets/080c5cb8-79c6-4141-9e34-5ea0836c08d5">
<img width="1463" alt="Screenshot 2024-08-12 at 1 00 21 PM" src="https://github.com/user-attachments/assets/dc10c07d-cb4a-43f4-b5ec-1693fb09899c">

## Description

This project is a simple flashcard application that allows users to store, manage, and view flashcards with questions and answers. The application is built using React for the frontend and Node.js with Express for the backend. The backend uses MySQL for data storage.

## Features

- **Add**: Create new flashcards with a question and answer.
- **View**: Display a list of all flashcards.
- **Delete**: Remove flashcards from the list.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MySQL

### Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <project-directory>
Setup the backend:

Navigate to the backend directory:

bash
Copy code
cd backend
Install the required dependencies:

bash
Copy code
npm install
Configure your MySQL database:

Create a database called FlashcardDB.
Import the schema into your MySQL instance.
Update the database connection settings in server.js if needed.

Start the server:

bash
Copy code
npm start
Setup the frontend:

Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install the required dependencies:

bash
Copy code
npm install
Update the API URL in the .env file if necessary:

env
Copy code
REACT_APP_API_URL=http://localhost:5001
Start the development server:

bash
Copy code
npm start
API Endpoints
GET /api/flashcards
Description: Retrieve all flashcards.
Response: List of flashcards with id, question, answer, and created_at.
POST /api/flashcards
Description: Add a new flashcard.
Request Body:
json
Copy code
{
  "question": "Your question here",
  "answer": "Your answer here"
}
Response: Status code 201 for successful creation.
DELETE /api/flashcards/
Description: Delete a flashcard by ID.
Parameters: id (integer) - ID of the flashcard to delete.
Response: Status code 200 for successful deletion.
Running Tests
Currently, there are no tests implemented. Consider adding tests for both frontend and backend to ensure reliability.
Troubleshooting
Database Connection Issues: Ensure MySQL is running and the connection settings in server.js are correct.
Data Not Updating: Make sure to re-fetch the data after adding or deleting flashcards. Check network requests and responses for any issues.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

License
This project is licensed under the MIT License.

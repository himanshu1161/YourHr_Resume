
## Overview

YourHR is a job search service application that enables job seekers to sign up and submit their resumes. The application is designed with a frontend built in React, a backend powered by Express, and MongoDB for data storage. The system is designed to be simple yet effective in helping users manage their job application process.

## Architecture

### 1. **Frontend (React)**

- **Components**: 
  - **SignupForm**: A form component that allows users to enter their personal information, including name, email, phone number, qualifications, and upload their resume.
  - **HomePage**: A landing page with a brief introduction and a link to the signup form.
- **Routing**: Managed using React Router to navigate between different views/pages.
- **Styling**: Tailwind CSS is used for styling, providing a responsive and modern UI.
- **State Management**: Local state management is used for form inputs and handling form submission.
- **API Interaction**: Axios is used for making HTTP requests to the backend.

### 2. **Backend (Express)**

- **Routes**:
  - **/api/users/signup**: Handles user registration, including personal information and resume upload.
- **Middleware**:
  - **Multer**: Used for handling file uploads, storing resume files in the `uploads` directory.
  - **Cors**: Enables cross-origin requests to allow frontend and backend communication.
  - **Body Parser**: Parses JSON request bodies.
- **Database Interaction**: 
  - **Mongoose**: Used for interacting with MongoDB, handling user data storage and retrieval.
- **Database**:
  - **MongoDB**: Stores user information, including name, email, phone number, qualifications, and resume metadata (e.g., filename).

### 3. **Database**

- **Database Name**: `YourHr`
- **Collections**:
  - **Users**: Stores user information and references to resume files.

## Functionality

### 1. **User Registration**

- **Form Submission**:
  - The user fills out the registration form with their personal details and uploads their resume.
  - Upon submission, the form data is sent to the backend API endpoint `/api/users/signup` as a `multipart/form-data` request.
- **Backend Processing**:
  - The backend receives the form data, validates the inputs, and processes the resume upload.
  - Resume files are saved in the `uploads` directory.
  - User details, along with a reference to the uploaded resume, are stored in the MongoDB `Users` collection.
- **Response**:
  - On successful registration, a success message is returned.
  - In case of an error, an appropriate error message is returned.

### 2. **File Handling**

- **Resume Upload**:
  - Users can upload resume files in various formats (e.g., PDF, DOCX).
  - Files are stored on the server’s file system within the `uploads` directory.
  - Metadata about the resume (such as the filename) is stored in the MongoDB `Users` collection.

### 3. **Frontend Integration**

- **User Interface**:
  - The signup form is styled using Tailwind CSS for a clean and responsive design.
  - User inputs are validated before submission.
  - Feedback messages are displayed for successful or failed submissions.
- **Routing**:
  - The React Router is used to navigate between the home page and the signup form.

## Code Structure

### Frontend (`client` Directory)

- **`src`**:
  - **`components`**: Contains React components (`SignupForm.js`, `HomePage.js`).
  - **`App.js`**: Main application component that sets up routing.
  - **`index.js`**: Entry point for React application.
- **`public`**: Contains static files and the main `index.html`.

### Backend (`server` Directory)

- **`src`**:
  - **`models`**: Contains Mongoose models (`User.js`).
  - **`routes`**: Contains API routes (`userRoutes.js`).
  - **`server.js`**: Main server setup and configuration file.
- **`uploads`**: Directory for storing uploaded resume files.

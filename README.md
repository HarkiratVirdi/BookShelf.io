# Bookshelf.io - E-commerce Platform Documentation
PRJ 666 Project
Welcome to the official documentation for Bookshelf.io, an e-commerce platform designed for buying and selling books. This repository contains comprehensive information about the technical aspects of the platform.
## Introduction
Welcome to the official documentation for Bookshelf.io, an e-commerce platform that facilitates the buying and selling of books in an efficient and user-friendly manner. This documentation provides valuable insights into the technical underpinnings of Bookshelf.io, offering developers a comprehensive guide to understanding the platform. 

The purpose of this documentation is to assist our internal development team in understanding, maintaining, enhancing, and adding new functionality to the Bookshelf.io e-commerce platform. 
## Getting Started
This guide will help you set up and run the application's frontend and backend components for development purposes. Make sure you have Node.js and npm installed on your system before proceeding. 
1. Clone the repository:
`git clone https://github.com/YourUsername/BookShelf.io.git`
`cd bookshelf.io`
2. Install dependencies for frontend and backend:
`cd frontend`
`npm install`

`cd ../backend`
`npm install`
3. Run the application:
- Run backend and frontend separately: `npm run server` or `npm run client`
- Run both concurrently: `npm run dev`
4. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
## Architecture Overview
Bookshelf.io follows a modular architecture with separate frontend and backend components. The backend handles API endpoints using an MVC architecture. MongoDB is used for data storage, while book images are stored in Amazon S3.
### Backend 
- Structure: The src directory contains routes and controllers, handling API endpoints for books, users, addresses, and orders. 
- Database: MongoDB is used to store user, book, order, and address data, while book images are stored in Amazon S3. 
- Testing: Backend tests are written using Jest and Supertest to ensure robust functionality. 
### Frontend 
- Technology: The frontend is built using React, comprising components and pages. 
- Pages: Dashboard, Register/Login, Book Management, Address Management, Cart, and Order pages provide user interactions. 
- Payment Integration: PayPal is integrated for secure payment processing. 
## Directory Structure
- **backend**: Backend-related code
- **src/controllers**: Controller logic for API endpoints
- **src/middlewares**: Middleware functions for request processing
- **src/models**: Mongoose models for database interaction
- **src/routes**: Definition of API routes
- **src/services**: Business logic and external service interactions
- **src/server.js**: Backend entry point
  
- **frontend**: Frontend-related code
- **public**: Static assets
- **src/apis**: API interaction logic
- **src/components**: Reusable UI components
- **src/config**: Configuration files
- **src/hooks**: Custom React hooks
- **src/interfaces**: TypeScript interfaces
- **src/pages**: React components representing pages
## Database Schema

### Address Schema

- `addressLine1`
- `addressLine2`
- `city`
- `province`
- `postalCode`
- `country`

### Book Schema

- `title` The title of the book. 
- `author` The author of the book. 
- `genre` An array capturing one or more genres associated with the book. 
- `price` The price of the book. 
- `description` A textual description of the book. 
- `image` An optional field storing the URL of the book's cover image. 
- `user` An optional field linking the book to a specific user. 

### Order Schema

- `bookIds`
- `totalPrice`

### User Schema

- `firstName`
- `lastName`
- `email`
- `password`
- `addressId`
- `orders`

## API Documentation

The Bookshelf.io application provides a comprehensive set of API endpoints to facilitate interactions between the frontend and backend components. The API follows RESTful principles and offers functionality related to users, books, addresses, and orders. 
#### User Routes 
- `POST /api/users/register`: Register a new user. 
- `POST /api/users/login`: Log in an existing user.
- `GET /api/users/user`: Retrieve the user's profile. 
- `PUT /api/users/user`: Update the user's profile. 
#### Book Routes 
- `POST /api/products/book`: Create a new book listing.
- `GET /api/products/books/user`: Retrieve books listed by the user.
- `GET /api/products/books`: Retrieve all available books. 
- `GET /api/products/book/:id`: Retrieve details of a specific book. 
- `PUT /api/products/ book/:id`: Update details of a specific book. 
- `DELETE /api/products/ book/:id`: Delete a book listing. 
- `GET /api/products/ books/:author`: Retrieve books by a specific author. 
- `GET /api/products/ books/:searchResults`: Search for books based on search criteria. 
#### Address Routes 
- `POST /api/users/user/address`: Add a new address to the user's profile. 
- `GET /api/users/user/address`: Retrieve the user's addresses. 
- `PUT /api/users/user/address`: Update the user's addresses. 
- `DELETE /api/users //user/address`: Delete an address from the user's profile. 
#### Order Routes 
- `POST /api/users/user/order`: Create a new order. 
- `GET /api/users/user/orders`: Retrieve the user's order history. 

### Examples:
#### Health Check:
`curl -X GET http://localhost:3001/`
Response:
```json
{
"status":"ok",
"description":"Bookshelf.io API",
"version":"1.0.0",
"hostname":" ",
"author":"PRJ666 Team 1"
}
```
#### Create a New Book Listing
- **Route:** `POST /api/products/book`
- **Description:** Create a new book listing.
- **Request Body:**
```json
{
  "title": "The Great Book",
  "author": "Jane Smith",
  "genre": ["Fiction"],
  "price": "19.99",
  "description": "A captivating tale of adventure."
}
```

- **Command:**
`curl -X POST http://localhost:3001/api/products/book -H "Content-Type: application/json" -d '{
  "title": "The Great Book",
  "author": "Jane Smith",
  "genre": ["Fiction"],
  "price": "19.99",
  "description": "A captivating tale of adventure."
}'`
- **Response:**
```json
{
  "message": "Book is successfully saved"
}
```
## Testing

Unit tests play a crucial role in ensuring the reliability and functionality of the Bookshelf.io application's API endpoints. The testing suite utilizes Jest as the testing framework and Supertest to make HTTP requests and simulate interactions with the API routes. 

The tests are organized into separate files corresponding to the different parts of the application, such as user routes, book routes, address routes, and order routes. 

To run tests:
`cd backend`
`npm test`
Running Backend Tests with Coverage 
`cd backend`
`npm run coverage` 

## Code Conventions 
At Bookshelf.io, code conventions have been designed to simplify development and promote teamwork. Clean formatting with consistent indentation and spacing is prioritized. Thoughtful commenting ensures that every function and logic block is well-explained, enabling quick comprehension by all team members. In the realm of error handling, try-catch blocks are utilized to capture exceptions in a controlled manner, enhancing the robustness of the application. For the encouragement of efficient coding, modular and reusable components and functions are created. Additionally, async/await is adhered to when dealing with asynchronous operations, which simplifies the flow of the codebase. Collectively, these conventions contribute to the enhancement of code quality, teamwork, and the overall development experience within the context of Bookshelf.io. 

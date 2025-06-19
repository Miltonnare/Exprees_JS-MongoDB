📚 Bookstore API

A simple Node.js + Express + MongoDB API for managing books in a bookstore. It supports inserting, retrieving, filtering, and aggregating book data.

📦 Project Structure

#
Bookstore/
├── db.js # MongoDB connection and utility functions
├── books.js # Book-related database operations
├── app.js # Express server and route handlers
├── package.json
└── README.md
##

🚀 Features

Add a new book

Get all books

Filter books by author and genre

List books that are in stock

Calculate average price per genre

⚙️ Setup Instructions

Clone the repo

git clone (https://github.com/Miltonnare/Exprees_JS-MongoDB.git)

cd Exprees_JS-MongoDB

Install dependencies


npm install

Start MongoDB (ensure it's running locally on mongodb://localhost:27017)

Run the server


node app.js
Or with nodemon:


nodemon app.js
Server will be running at:

http://localhost:3000

🧪 Testing the API with Postman

1. Insert a Book
   
Endpoint: POST /books/insertBook

Body (JSON):


{
  "title": "Atomic Habits",
  "author": "James Clear",
  "genre": "Self-help",
  "price": 19.99,
  "inStock": true
}

2. Get All Books

Endpoint: GET /books/getAllBooks

3. Get Books by Author and Genre

Endpoint: GET /books/getBooksByAuthor

Query Params:

author=James Clear&genre=Self-help

Example:

GET http://localhost:3000/books/getBooksByAuthor?author=James%20Clear&genre=Self-help

4. Get In-Stock Books

Endpoint: GET /books/inStock


5. Get Average Price by Genre
   
Endpoint: GET /books/averagePriceByGenre


📌 Notes

MongoDB database name: Bookstore

Collection used: Books

You must ensure MongoDB is running and accessible at mongodb://localhost:27017.

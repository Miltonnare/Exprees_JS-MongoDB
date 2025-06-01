const express = require('express');
const app = express();
const port = 3000;

const { Database } = require('./db');
const { getCollection } = require('./db');

const { insertBook, getBooksByAuthor_Genre, getInStocks, getPrice, getAllBooks } = require('./books');


app.use(express.json());

app.get('/books/getAllBooks', async (req, res) => {
  try {
    const result = await getAllBooks();
    res.status(200).json({ message: "All books:", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.post('/books/insertBook', async (req, res) => {
    try {
        const result = await insertBook(req.body);
        res.status(201).json({ message: "Book inserted", result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/books/getBooksByAuthor', async (req, res) => {
    try {
        const { author, genre } = req.query;
        const result = await getBooksByAuthor_Genre({ author, genre });
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/books/inStock', async (req, res) => {
    try {
        const result = await getInStocks();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/books/averagePriceByGenre', async (req, res) => {
    try {
        const result = await getPrice();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

async function startServer() {
    await Database();
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

startServer();

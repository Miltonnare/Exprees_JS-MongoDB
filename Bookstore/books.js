const { getCollection } = require('./db');

async function getAllBooks() {
    const books = getCollection('Books');
    const result= await books.find({}).toArray();
    return result;
}

async function insertBook(book) {
    const books = getCollection('Books');
    const result = await books.insertOne(book);
    return result;
}

async function getBooksByAuthor_Genre({ author, genre }) {
    const books = getCollection('Books');
    const result = await books.find({ author, genre }).toArray();
    return result;
}

async function getInStocks() {
    const books = getCollection('Books');
    const result = await books.find({ inStock: true }).toArray();
    return result;
}

async function getPrice() {
    const books = getCollection('Books');
    const result = await books.aggregate([
        {
            $group: {
                _id: "$genre",
                avgPrice: { $avg: "$price" }
            }
        }
    ]).toArray();
    return result;
}

module.exports = { insertBook, getBooksByAuthor_Genre, getInStocks, getPrice, getAllBooks};

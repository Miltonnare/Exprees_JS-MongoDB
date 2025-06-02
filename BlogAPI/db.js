const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/';
const client = new MongoClient(uri);

let db;

async function connectToDatabase() {
    await client.connect();
    console.log("Database Connected");
    db = client.db('Blogger');
}

function getBlogsCollection() {
    return db.collection('Blogs');
}

module.exports = { connectToDatabase, getBlogsCollection };

const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/';
const client = new MongoClient(uri);

let db;

async function Database() {
    await client.connect();
    console.log("Database Connected");
    db = client.db('Bookstore');
}

function getCollection(name) {
    return db.collection(name);
}

module.exports = { Database, getCollection };

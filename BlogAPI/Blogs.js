const { getBlogsCollection } = require('./db');

async function InsertBlogs(data) {
    const collection = getBlogsCollection();
    const result = await collection.insertOne(data);
    return result;
}

async function SeeBlogs() {
    const collection = getBlogsCollection();
    const result = await collection.find({}).toArray();
    return result;
}

async function UpdateBlogs({ id, update }) {
    const collection = getBlogsCollection();
    const result = await collection.updateOne({ _id: id }, { $set: update });
    return result;
}

module.exports = { InsertBlogs, SeeBlogs, UpdateBlogs };

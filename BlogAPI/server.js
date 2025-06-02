const express = require('express');
const app = express();
const port = 3000;

const { InsertBlogs, SeeBlogs, UpdateBlogs } = require('./Blogs');
const { connectToDatabase } = require('./db');

app.use(express.json()); //  Kutumia  middleware 

// Kuingiza Blogu
app.post('/Blogs/InsertBlog', async (req, res) => {
    try {
        const result = await InsertBlogs(req.body); // Most of us forget to pass data
        res.status(200).json({ message: "Blog Inserted", result });
    } catch (err) {
        res.status(500).json({ message: "Error Occurred", error: err.message });
    }
});

// Kutazama Blogs
app.get('/Blogs/SeeBlogs', async (req, res) => {
    try {
        const result = await SeeBlogs();
        res.status(200).json({ message: "Blogs are:", result });
    } catch (err) {
        res.status(500).json({ message: "Error Occurred", error: err.message });
    }
});

//  Update Blog (example assumes blog has `id` and update info)
app.put('/Blogs/UpdateBlog', async (req, res) => {
    try {
        const result = await UpdateBlogs(req.body);
        res.status(200).json({ message: "Updated Blog", result });
    } catch (err) {
        res.status(500).json({ message: "Error Occurred", error: err.message });
    }
});

// Start Server after DB Connect...You can use any type of function e.g Async, promise
connectToDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch(err => {
    console.error("Failed to connect to DB", err);
});

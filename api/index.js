const Express = require('express');
const app = Express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const multer = require('multer');
const pool = require('./connect'); // Import the pool from connect.js
const postRoutes = require("./routes/posts.js"); // Use require instead of import

// Middlewares
app.use(Express.json());

console.log("Initializing server...");

// Test API
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Start server
app.listen(8800, () => {
    console.log("API working!!");
});

app.use("/api/posts", postRoutes);
app.use("/api/posts", postRoutes);

const Express = require('express');
const app = Express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const multer = require('multer');
const postRoutes = require("./routes/posts.js"); // Use require instead of import
const studentsRoutes = require("./routes/students.js");
const authRoutes = require("./routes/auth.js")

// Middlewares
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
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
app.use("/api/students", studentsRoutes);
app.use("/api/auth", authRoutes);

const Express = require('express');
const app = Express();
const mysql = require('mysql2'); // Import the MySQL package
const cookieParser = require('cookie-parser');
const cors = require('cors');
const multer = require('multer');

//middlewares
app.use(Express.json());

console.log("Initializing server...");

// Create a connection to the database
const db = mysql.createConnection({
    host: 'dedis.cf26yes0ex8o.eu-north-1.rds.amazonaws.com',
    user: 'selena',
    password: 'SELena7DEDIS',
    database: 'dedis',
    connectTimeout: 10000  // 10 seconds timeout for connection
});

// Connect to the MySQL database
db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.stack);
        return;
    }
    console.log("Connected to the database.");
});

// Test database query to check if everything is working
app.get("/testdb", (req, res) => {
    db.query("SELECT NOW()", (err, result) => {
        if (err) {
            res.status(500).send("Error querying database.");
            return;
        }
        res.json(result);
    });
});

app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Start server
app.listen(8800, () => {
    console.log("API working!!")
});

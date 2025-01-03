const Express = require('express');
const app = Express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const multer = require('multer');
const { Pool } = require('pg');

//middlewares
app.use(Express.json());

console.log("Initializing server...");

// Create a connection to the database
const pool = new Pool({
    host: 'aws-0-eu-central-1.pooler.supabase.com',
    port: 5432,
    database: 'postgres',
    user: 'postgres.xjmvxmnngdlpcsqrvxjo',
    pool_mode:"session",
    password: 'fvQvv1FCqWD4bGsh', 
    ssl: {
      rejectUnauthorized: false, // Disable strict SSL validation
    },
  });
  // Test connection
  pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Database connected:', res.rows);
    }
  });
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Start server
app.listen(8800, () => {
    console.log("API working!!")
});

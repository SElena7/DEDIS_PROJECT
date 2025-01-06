const { Pool } = require('pg');

// Create a connection to the database
const pool = new Pool({
    host: 'aws-0-eu-central-1.pooler.supabase.com',
    port: 5432,
    database: 'postgres',
    user: 'postgres.xjmvxmnngdlpcsqrvxjo',
    pool_mode: "session",
    password: 'fvQvv1FCqWD4bGsh',
    ssl: {
        rejectUnauthorized: false, // Disable strict SSL validation
    },
});

// Test the connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Database connected:', res.rows);
    }
});

module.exports = pool;

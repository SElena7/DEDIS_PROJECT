const db = require('../connect');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = (req, res) => {
    // CHECK USER IF EXISTS
    const q = 'SELECT * FROM users WHERE name = $1';

    db.query(q, [req.body.name], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json('User already exists!');

        // CREATE A NEW USER
        // Hash the password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const insertQuery = `INSERT INTO users ("name", "email", "password") VALUES ($1, $2, $3)`;

        const values = [req.body.name, req.body.email, hashedPassword];

        db.query(insertQuery, values, (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json('User has been created.');
        });
    });
};

const login = (req, res) => {
    const q = "SELECT * FROM users WHERE name = $1"; // Use parameterized query with $1

    db.query(q, [req.body.name], (err, data) => {
        if (err) return res.status(500).json(err);

        // Check if the user exists
        if (data.rows.length === 0) {
            return res.status(404).json("User not found!");
        }

        const user = data.rows[0]; // Extract the first user from the rows array

        // Verify the password
        const checkPassword = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!checkPassword) {
            return res.status(400).json("Wrong password or name!");
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user.id }, "secretkey");

        const { password, ...others } = user;

        // Send response with token
        res
            .cookie("accessToken", token, {
                httpOnly: true, // Secure cookie
            })
            .status(200)
            .json(others);
    });
};


const logout = (req, res) => {

    res.clearCookie("accessToken", {
        secure: true,
        sameSite:"none"
        
    }).status(200).json("User has been logged out.")

};

module.exports = { register, login, logout };
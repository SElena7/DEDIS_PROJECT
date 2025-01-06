const pool = require('../connect'); 

// Add a new student
const addStudent = async (req, res) => {
    try {
        const { name, grade, gender, home_address, postcode, city } = req.body;

        if (!name || !grade || !gender) {
            return res.status(400).json({ error: "Name, grade, and gender are required" });
        }

        const query = `
            INSERT INTO students (name, grade, gender, home_address, postcode, city)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;
        `;

        const values = [name, grade, gender, home_address, postcode, city];
        const result = await pool.query(query, values);

    
        return res.status(201).json({
            message: "Student added successfully",
            student: result.rows[0],
        });
    } catch (error) {
        console.error('Error adding student:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { addStudent };

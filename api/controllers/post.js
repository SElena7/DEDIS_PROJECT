const pool = require('../connect');
const moment = require('moment');

// Get posts
const getPosts = async (req, res) => {
    try {
        const query = `
            SELECT p.*, u.id AS author_id, u.name 
            FROM posts AS p
            JOIN users AS u ON u.id = p.author_id
            WHERE u.id = $1
            ORDER BY 
            p.created_at DESC;
        `;

        const authorId = req.query.authorId || req.body.authorId;
        if (!authorId) {
            return res.status(400).json({ error: 'Author ID is required' });
        }

        const result = await pool.query(query, [authorId]);
        return res.status(200).json(result.rows);
    } catch (err) {
        console.error('Error fetching posts:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


const addPost = async (req, res) => {
    try {
        const { title, content, picture_url, author_id, status } = req.body;

        if (!title || !content || !author_id) {
            return res.status(400).json({ error: "Title, content, and author ID are required." });
        }

        const query = `
            INSERT INTO posts (title, content, picture_url, created_at, updated_at, author_id, status)
            VALUES ($1, $2, $3, NOW(), NOW(), $4, $5)
            RETURNING *;
        `;

        const values = [title, content, picture_url || null, author_id, status || 'active'];
        const result = await pool.query(query, values);

        res.status(201).json({
            message: "Post created successfully.",
            post: result.rows[0],
        });
    } catch (err) {
        console.error("Error adding post:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ error: "Post ID is required." });
        }

        const query = `
            DELETE FROM posts
            WHERE post_id = $1
            RETURNING *;
        `;

        const result = await pool.query(query, [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Post not found." });
        }

        res.status(200).json({
            message: "Post deleted successfully.",
            deletedPost: result.rows[0],
        });
    } catch (err) {
        console.error("Error deleting post:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


// Export functions
module.exports = { getPosts, addPost, deletePost };
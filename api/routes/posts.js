const express = require('express');
const { verifyToken, adminOnly } = require('../middleware/auth');
const { getPosts, addPost,deletePost,editPost } = require('../controllers/post.js');

const router = express.Router();

router.get("/", getPosts);
router.post("/", adminOnly, addPost);
router.delete("/:id", adminOnly, deletePost); 
router.put("/:post_id", adminOnly, editPost);
module.exports = router;

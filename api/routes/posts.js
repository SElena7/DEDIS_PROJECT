const express = require('express');
const { getPosts, addPost,deletePost,editPost } = require('../controllers/post.js');

const router = express.Router();

router.get("/", getPosts);
router.post("/", addPost);
router.delete("/:id", deletePost); 
router.put("/:post_id", editPost);
module.exports = router;

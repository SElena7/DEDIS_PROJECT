const express = require('express');
const { addStudent } = require('../controllers/student.js');

const router = express.Router();

router.post("/add", addStudent); // POST for adding a student

module.exports = router;

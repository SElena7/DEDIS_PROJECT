
const express = require('express');
const { login, register, logout, getCurrentUser }  = require("../controllers/auth.js");


const router = express.Router()

router.post("/login", login)
router.post("/register", register)
router.post("/logout", logout)
router.get("/me", getCurrentUser)


module.exports = router;
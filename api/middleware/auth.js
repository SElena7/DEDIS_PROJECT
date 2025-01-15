const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "secretkey", (err, user) => {
        if (err) return res.status(403).json("Token is not valid!");
        req.user = user; // Attach user info to request
        next();
    });
};

const adminOnly = (req, res, next) => {
    if (req.user?.id !== 1) {
        return res.status(403).json("Unauthorized access!");
    }
    next();
};

module.exports = { verifyToken, adminOnly };

const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
    const { authToken } = req.cookies;

    if (!authToken) {
        return res.status(402).json({ message: "Please Login first" });
    }

    try {
        const data = jwt.verify(authToken, process.env.SECRETKEY);
        req.user = data; 

        next();
    } catch (error) {
        return res.status(402).json({ message: "Invalid Token" });
    }
};
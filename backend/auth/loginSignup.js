const User = require('../Schema/userSchema');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const secretKey = process.env.SECRETKEY;

const signupController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const findUser = await User.find({ email });

        if (findUser.length > 0) {
            return res.status(400).json({ message: "User already exists. Try with another email." });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name, email, password: hashPassword
        });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id, name: newUser.name }, secretKey, { expiresIn: '1h' });

        res.cookie("authToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            maxAge: 3600000 // 1 hour
        });

        res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const findUser = await User.findOne({ email });
        if (!findUser) {
            return res.status(404).json({ message: "User not found. Please create your account." });
        }

        const comparePassword = await bcrypt.compare(password, findUser.password);
        if (!comparePassword) {
            return res.status(400).json({ message: "Wrong password" });
        }

        // Change newUser to findUser to correctly access the logged-in user's name
        const token = jwt.sign({ id: findUser._id, name: findUser.name }, secretKey, { expiresIn: "1h" });

        res.cookie("authToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600000 // 1 hour
        });

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { signupController, loginController };

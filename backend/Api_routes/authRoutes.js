const express = require("express");
const { signupController, loginController } = require("../auth/loginSignup");

const router = express.Router();

router.post('/signup',signupController);
router.post('/login',loginController);
router.post('/login',loginController);

module.exports = router;
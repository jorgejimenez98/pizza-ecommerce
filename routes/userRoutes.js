const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// REGISTER USER
router.post("/register", userController.registerUser);
// LOGIN USER
router.post("/login", userController.loginUser);

module.exports = router;

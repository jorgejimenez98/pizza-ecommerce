const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// REGISTER USER
router.post("/register", userController.registerUser);
// LOGIN USER
router.post("/login", userController.loginUser);
// User List
router.get("/", userController.getUserList);
// Delete Users
router.post("/deleteUsers", userController.deleteUsers);
module.exports = router;

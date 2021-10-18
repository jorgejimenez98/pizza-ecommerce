const express = require("express");
const router = express.Router();

const User = require("../models/userModel");

router.post("/register", async (req, response) => {
  try {
    const data = req.body;

    // Create User
    const newUser = new User({
      name: data.name,
      email: data.email,
      password: data.password,
      isAdmin: data.isAdmin ? data.isAdmin : false,
    });
    // Save User
    newUser.save();
    // Send response
    response.send("User Create Succ");
  } catch (error) {
    // Send error Response
    return response.status(400).json({ detail: error });
  }
});

module.exports = router;

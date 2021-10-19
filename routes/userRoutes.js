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

router.post("/login", async (req, response) => {
  try {
    const { email, password } = req.body;
    const user = await User.find({ email, password });

    // Check if User Exist
    if (user.length > 0) {
      response.send({
        _id: user[0]._id,
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
      });
    } else {
      throw "User Login Failed";
    }
  } catch (error) {
    // Send error Response
    console.log("Error", error);
    return response.status(400).json({ detail: error });
  }
});

module.exports = router;

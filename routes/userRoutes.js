const express = require("express");
const router = express.Router();

const User = require("../models/userModel");

// REGISTER USER
router.post("/register", async (req, res) => {
  try {
    const data = req.body;

    // create user
    let user = new User({
      name: data.name,
      email: data.email,
      isAdmin: data.isAdmin ? data.isAdmin : false,
    });
    // Set password
    user.set_passwordHash(data.password);

    // return user
    user = await user.save();
    if (!user) res.status(404).send({ detail: "Error to create USER" });
    res.send(user);
  } catch (error) {
    res.status(404).send({ detail: error.message });
  }
});

// LOGIN USER
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // Find A user with provided email
  const user = await User.findOne({ email: email });
  // Check if user exist
  if (!user) return res.status(404).send({ detail: "User not found" });
  // Check if Password is correct
  if (user.checkPassword(password)) {
    // Generate User Token
    const token = user.generateJWT();
    // Return User and token Response
    return res.status(200).send({ user: user.toAuthJson(), token });
  }
  // Send Error Login Message
  res.status(400).send({ detail: "Incorrect Password" });
});

module.exports = router;

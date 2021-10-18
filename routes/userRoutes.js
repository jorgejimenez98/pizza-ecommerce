const express = require("express");
const router = express.Router();

const User = require("../models/userModel");

router.get("/register", async (request, response) => {
  try {
    const data = request.body;
    const newUser = new User({
      name: data.name,
      email: data.email,
      password: data.password,
      isAdmin: data.isAdmin ? data.isAdmin : false,
    });
    newUser.save();
    response.send(newUser);
  } catch (error) {
    return response.status(400).json({ detail: error });
  }
});

module.exports = router;

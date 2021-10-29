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

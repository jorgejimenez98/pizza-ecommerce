const User = require("../models/userModel");

// Register User
exports.registerUser = async (req, res) => {
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
};

// Login User
exports.loginUser = async (req, res) => {
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
};

// Get User List
exports.getUserList = async (req, res) => {
  try {
    // Get List
    const usersList = await User.find({});
    // Resturn Response
    if (!usersList) res.status(400).send({ detail: "Error to get User List" });
    res.send(usersList);
  } catch (error) {
    res.status(400).send({ detail: error });
  }
};

// Delete Selected Users
exports.deleteUsers = async (req, res) => {
  try {
    // Get Users from request
    const { users } = req.body;
    // Delete Users
    await users.map(async (user) => {
      await User.findByIdAndRemove(user.id);
    });
    // Resturn Response
    res.send("Users Deleted Successfully");
  } catch (error) {
    res.status(400).send({ detail: error });
  }
};

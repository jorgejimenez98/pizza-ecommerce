const Order = require("../models/order.model");

// Register User
exports.postUserOrder = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    res.send("ALL is OK");
  } catch (error) {
    res.status(404).send({ detail: error.message });
  }
};

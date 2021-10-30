const Order = require("../models/order.model");

// Register User
exports.postUserOrder = async (req, res) => {
  try {
    // Get Data from req.body
    const data = req.body;
    const { shippingAddress1, shippingAddress2, city, country, phone } =
      data.form;
    const { subtotalPrice, cartItems } = data;
    console.log(shippingAddress1, shippingAddress2, city, country, phone);
    console.log(subtotalPrice, cartItems);
    res.send("ALL is OK");
  } catch (error) {
    res.status(404).send({ detail: error.message });
  }
};

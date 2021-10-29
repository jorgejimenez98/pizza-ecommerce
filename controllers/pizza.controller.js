const Pizza = require("../models/pizzaModel");

exports.getPizzasList = async (req, res, next) => {
  try {
    const data = await Pizza.find({});
    res.send(data);
  } catch (error) {
    return res.status(400).json({ detail: error });
  }
};

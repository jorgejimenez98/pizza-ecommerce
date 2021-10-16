const express = require("express");
const router = express.Router();

const Pizza = require("../models/pizzaModel");

router.get("/getPizzas", async (request, response) => {
  try {
    const data = await Pizza.find({});
    response.send(data);
  } catch (error) {
    return response.status(400).json({ detail: error });
  }
});

module.exports = router
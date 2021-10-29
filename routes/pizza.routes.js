const express = require("express");
const router = express.Router();
const pizzaController = require("../controllers/pizza.controller");

router.get("/getPizzas", pizzaController.getPizzasList);

module.exports = router;

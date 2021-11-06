const express = require("express");
const router = express.Router();
const pizzaController = require("../controllers/pizza.controller");

router.get("/getPizzas", pizzaController.getPizzasList);
router.post("/", pizzaController.registerPizza);
router.post("/deletePizzas", pizzaController.deletePizzas);

module.exports = router;

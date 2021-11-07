const express = require("express");
const router = express.Router();
const pizzaController = require("../controllers/pizza.controller");

router.get("/getPizzas", pizzaController.getPizzasList);
router.post("/", pizzaController.registerPizza);
router.post("/deletePizzas", pizzaController.deletePizzas);
router.put("/edit/:pizzaId", pizzaController.editPizza);
router.get("/:pizzaId", pizzaController.getPizzaDetails);

module.exports = router;

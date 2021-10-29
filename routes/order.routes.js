const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");

// POST USER ORDER
router.post("/", orderController.postUserOrder);

module.exports = router;

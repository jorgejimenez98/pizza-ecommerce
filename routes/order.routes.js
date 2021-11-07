const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");

// POST USER ORDER
router.post("/", orderController.postUserOrder);
router.get("/", orderController.getOrdersList);
router.post("/user/:userId", orderController.getUserOrders);

module.exports = router;

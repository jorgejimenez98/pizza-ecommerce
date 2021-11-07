const Order = require("../models/order.model");
const OrderItem = require("../models/order-item.model");
const User = require("../models/userModel");

// Register User
exports.postUserOrder = async (req, res) => {
  try {
    // Get Data from req.body
    const data = req.body;
    const { cartItems } = data;

    // Create Order Items and Get Promise
    const orderItemsIds = Promise.all(
      cartItems.map(async (cartItem) => {
        let newOrderItem = new OrderItem({
          quantity: cartItem.quantity,
          pizza: cartItem._id,
          varient: cartItem.varient,
        });
        newOrderItem = await newOrderItem.save();
        // Return newOrderItem ID
        return newOrderItem._id;
      })
    );
    // Await orderItems Id from Promise
    const orderItemsIdsResolved = await orderItemsIds;

    // Calculate Total Price of Order
    const totalPrices = await Promise.all(
      // Map All order Items from Order
      orderItemsIdsResolved.map(async (orderItemId) => {
        // Get Order Item Model
        const orderItem = await OrderItem.findById(orderItemId).populate(
          "pizza",
          ["prices"]
        );
        // Get total price from OrderItem
        const totalPrice =
          orderItem.pizza.prices[0][orderItem.varient] * orderItem.quantity;
        // Return Total Price
        return totalPrice;
      })
    );

    // Sum All total Prices from Array
    const totalPrice = totalPrices.reduce((a, b) => a + b, 0);

    // Create Order
    let order = new Order({
      orderItems: orderItemsIdsResolved,
      shippingAddress1: data.form.shippingAddress1,
      shippingAddress2: data.form.shippingAddress2,
      city: data.form.city,
      country: data.form.country,
      phone: data.form.phone,
      status: "Pending",
      totalPrice: totalPrice,
      user: data.userId,
    });

    // Save New Order
    order = await order.save();
    // Return new Order
    if (!order) res.status(404).send({ detail: "Error to create order" });
    res.send("Order Create Successfully");
  } catch (error) {
    res.status(404).send({ detail: error.message });
  }
};

// GEt user Orders
exports.getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;
    const userOrders = await Order.find({ user: userId })
      .populate({
        path: "orderItems",
        populate: { path: "pizza" },
      })
      .sort("-dateOrdered");
    if (!userOrders)
      res.status(400).send({ detail: "Error to get User Orders" });
    res.send(userOrders);
  } catch (error) {
    res.status(404).send({ detail: error.message });
  }
};

// GET Orders List
exports.getOrdersList = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate({ path: "user", model: User, select: "name email" })
      .select("_id user totalPrice status dateOrdered")
      .sort("-dateOrdered");
    if (!orders) res.status(400).send({ detail: "Error to get Orders" });
    res.send(orders);
  } catch (error) {
    res.status(404).send({ detail: error.message });
  }
};

// UPDATE Order Status
exports.changeOrderStatus = async (req, res) => {
  try {
    // Get Order ID
    const orderId = req.params.orderId;

    // Change Order Status
    const order = await Order.findByIdAndUpdate(orderId, {
      status: "Delivered",
    });

    // Return Response
    if (!order) res.status(400).send({ detail: "Error to update order" });
    res.send("Order Changed Successfully");
  } catch (error) {
    res.status(404).send({ detail: error.message });
  }
};

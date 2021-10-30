const Order = require("../models/order.model");
const OrderItem = require("../models/order-item.model");

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

const Pizza = require("../models/pizzaModel");

exports.getPizzasList = async (req, res, next) => {
  try {
    // Filter Section
    const keyword = req.query.keyword;
    const cat = req.query.category;
    let filter = {};
    if (keyword && cat) {
      if (cat !== "all") {
        filter = { category: cat, name: { $regex: keyword.trim() } };
      } else {
        filter = { name: { $regex: keyword.trim() } };
      }
    } else if (keyword) {
      filter = { name: { $regex: keyword.trim() } };
    } else if (cat && cat !== "all") {
      filter = { category: cat };
    }

    // GET Data
    const data = await Pizza.find(filter);
    res.send(data);
  } catch (error) {
    return res.status(400).json({ detail: error });
  }
};

exports.registerPizza = async (req, res) => {
  try {
    // Get Data
    const data = req.body;

    // Create Pizza
    let pizza = new Pizza({
      name: data.name,
      varients: ["small", "medium", "large"],
      prices: [[data.priceSmall, data.priceMedium, data.priceLarge]],
      category: data.category,
      image: data.imageUrl,
      description: data.description,
    });

    // Save Pizza
    pizza = await pizza.save();

    // Return Response
    if (!pizza) res.status(400).send("Error to create Pizza");
    res.send("Pizza Add Successfully");
  } catch (error) {
    return res.status(400).json({ detail: error });
  }
};

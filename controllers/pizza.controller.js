const Pizza = require("../models/pizzaModel");
const mongoose = require("mongoose");

// GET PIZZA LIST
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

// REGISTER NEW PIZZA
exports.registerPizza = async (req, res) => {
  try {
    // Get Data
    const data = req.body;

    // Create Pizza
    let pizza = new Pizza({
      name: data.name,
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: data.priceSmall,
          medium: data.priceMedium,
          large: data.priceLarge,
        },
      ],
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

// DELETE SELECTED PIZZAS
exports.deletePizzas = async (req, res) => {
  try {
    // Get Selected Pizzas
    const { pizzas } = req.body;
    // Delete Selected Pizzas
    await pizzas.map(async (pizza) => {
      await Pizza.findByIdAndRemove(pizza._id);
    });
    // Return Response
    res.send("Pizza Deleted Successfully");
  } catch (error) {
    return res.status(400).json({ detail: error });
  }
};

// EDIT PIZZA
exports.editPizza = async (req, res) => {
  try {
    // Get request values
    const pizzaId = req.params.pizzaId;
    const data = req.body;

    // Validate Pizza Id
    if (!mongoose.isValidObjectId(pizzaId)) {
      return res.status(400).send({ detail: "Invalid Pizza ID" });
    }

    // Update Pizza Values
    const pizza = await Pizza.findByIdAndUpdate(pizzaId, {
      name: data.name,
      prices: [
        {
          small: data.priceSmall,
          medium: data.priceMedium,
          large: data.priceLarge,
        },
      ],
      category: data.category,
      image: data.imageUrl,
      description: data.description,
    });

    // Return Response
    if (!pizza) res.status(400).json({ detail: "Error to update Pizza" });
    res.send("Pizza Updated Successfully");
  } catch (error) {
    return res.status(400).json({ detail: error });
  }
};

// GET PIZZA DETAILS
exports.getPizzaDetails = async (req, res) => {
  try {
    // Get request values
    const pizzaId = req.params.pizzaId;

    // Validate Pizza Id
    if (!mongoose.isValidObjectId(pizzaId)) {
      return res.status(400).send({ detail: "Invalid Pizza ID" });
    }

    // Get Pizza by Id
    const pizza = await Pizza.findById(pizzaId);

    // Return Response
    if (!pizza) res.status(400).json({ detail: "Error to get Pizza" });
    res.send(pizza);
  } catch (error) {
    return res.status(400).json({ detail: error });
  }
};

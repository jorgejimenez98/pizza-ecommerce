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

const express = require("express");

// Models
const Pizzas = require("./models/pizzaModel");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => res.send(`Server Working!`));

// PIZZA ROUTES
app.get("/getPizzas", (req, res) => {
  Pizzas.find({}, (error, docs) => {
    if (error) {
      console.log(`Error loading pizzas ${error}`);
    } else {
      res.send(docs);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));

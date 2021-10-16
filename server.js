const express = require("express");

// Root Imports
const PizzaRoute = require("./routes/pizzasRoutes");

const app = express();
const port = process.env.PORT || 5000;
const db = require("./db");

app.use(express.json());

// Routes
app.use("/api/pizzas/", PizzaRoute);

app.get("/", (req, res) => res.send(`Server Working!`));

app.listen(port, () => console.log(`Example app listening on port ${port}`));

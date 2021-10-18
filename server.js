const express = require("express");

// Root Imports
const PizzaRoute = require("./routes/pizzasRoutes");
const UserRouter = require("./routes/userRoutes");

const app = express();
const port = process.env.PORT || 5000;
const db = require("./db");

// Routes
app.use("/api/pizzas/", PizzaRoute);
app.use("/api/users/", UserRouter);

app.get("/", (req, res) => res.send(`Server Working!`));

app.listen(port, () => console.log(`Example app listening on port ${port}`));

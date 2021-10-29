const express = require("express");
const app = express();

// Dependencies
require("./db");

// Middleware
app.use(require("morgan")("tiny")); // Log API method details
app.use(express.json());

// Routes
app.use("/api/pizzas/", require("./routes/pizzasRoutes"));
app.use("/api/users/", require("./routes/userRoutes"));

const port = process.env.PORT || 5000;
app.get("/", (req, res) => res.send(`Server Working!`));
app.listen(port, () => console.log(`Example app listening on port ${port}`));

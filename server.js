const express = require("express");
const app = express();

// Dependencies
require("./db");
const cors = require("cors");

// Middleware
app.use(require("morgan")("tiny")); // Log API method details
app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(require("./helpers/jwt")()); // Protect API Authentication
app.use(require("./helpers/errorhandler"));

// Routes
app.use("/api/pizzas", require("./routes/pizza.routes"));
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/orders", require("./routes/order.routes"));

const port = process.env.PORT || 5000;
app.get("/", (req, res) => res.send(`Server Working!`));
app.listen(port, () => console.log(`Example app listening on port ${port}`));

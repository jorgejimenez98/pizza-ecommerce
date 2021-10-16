const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => res.send("Server Working!"));
app.listen(port, () => console.log(`Example app listening on port ${port}`));

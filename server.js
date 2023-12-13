const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/database");
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post("/api/register", (req, res) => {
  console.log(req.body);
  res.send("Hello");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

connectDB();

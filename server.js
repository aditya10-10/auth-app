const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/database");
const PORT = process.env.PORT || 5000;
const users = require("./routes/user");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1", users);

app.post("/api/register", (req, res) => {
  console.log(req.body);
  res.send("Hello");
});

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

connectDB();

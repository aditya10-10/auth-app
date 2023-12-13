const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB

const ConnectDB = async () => {
  try {
    await mongoose
      .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("MongoDB connected..."))
      .catch(() => console.log("MongoDB connection failed..."));
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = ConnectDB;

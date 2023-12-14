const express = require("express");
const User = require("../models/User");
const router = express.Router();

const { getUser, login } = require("../controller/Auth");
const { auth, isStudent, isAdmin } = require("../middleware/auth");

router.post("/signup", getUser);
router.post("/login", login);

router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "Test route",
  });
});

router.get("/student", auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Student Application",
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Admin Application",
  });
});

router.get("/getEmail", auth, async (req, res) => {
  try {
    const id = req.user.id;
    console.log("ID: " + id);
    const user = await User.findById({ _id: id });

    res.status(200).json({
      success: true,
      user: user,
      message: "Welcome to Email Route",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;

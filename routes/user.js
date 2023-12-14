const express = require("express");
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

module.exports = router;

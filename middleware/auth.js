const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
  try {
    const payload = req.body.token;
    console.log("paylaod is here " + payload);

    if (!payload) {
      return res.status(401).json({
        success: false,
        message: "Token is Missing  ",
      });
    }
    console.log("jwt token" + process.env.JWT_SECRET);

    try {
      const decode = jwt.verify(payload, process.env.JWT_SECRET);

      console.log(decode);

      req.user = decode;
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: "Token is Invalid",
      });
    }
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "something went wrong",
    });
  }
};

exports.isStudent = (req, res, next) => {
  try {
    if (req.user.role !== "Student") {
      return res.status(401).json({
        success: false,
        message: "This is protected route for students",
      });
    }
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "user role is not matched",
    });
  }
};

exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(401).json({
        success: false,
        message: "This is protected route for Admin",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "User role is not matched",
    });
  }
};

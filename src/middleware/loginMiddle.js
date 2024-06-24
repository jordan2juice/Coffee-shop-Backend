"use strict";

const User = require("../modals/Users");
const jwt = require("jsonwebtoken");

async function checkEmail(req, res, next) {
  const { email } = req.body;
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials." });
  }
  req.user = user;
  next();
}

async function checkPassword(req, res, next) {
  try {
    const { password } = req.body;
    const isMatch = await req.user.isValidPassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    next();
  } catch (error) {
    next(error);
  }
}

async function signToken(req, res, next) {
  const userId = req.user._id;
  const role = req.user.isAdmin;
  const token = jwt.sign({ userId, role }, process.env.SECRET, {
    expiresIn: "1h",
  });
  req.token = token;
  next();
}

module.exports = { checkEmail, checkPassword, signToken };

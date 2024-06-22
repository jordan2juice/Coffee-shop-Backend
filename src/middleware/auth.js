"use strict";

const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    if (!token) {
      return res.status(401).send({ error: "Please authenticate." });
    }
    const decoded = jwt.verify(token, process.env.SECRET);
    req.role = decoded.role;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = auth;

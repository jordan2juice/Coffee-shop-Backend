"use strict";

function home (req, res, next) {
  res.send("Server online!");
}

module.exports = { home };
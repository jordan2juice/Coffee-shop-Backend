"use strict";

function role(req, res, next) {
  console.log(req.role);
  if (!req.role) {
    return res.status(401).send({ error: "Unauthorized" });
  }
  next();
}

module.exports = { role };

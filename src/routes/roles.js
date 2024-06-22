"use strict";

function role() {
  return (req, res, next) => {
    if (!req.role) {
      res.status(401).send({ error: "Unauthorized" });
    }
    next();
  };
}

module.exports = { role };

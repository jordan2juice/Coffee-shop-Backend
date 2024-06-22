"use strict";

function role(allowRoles) {
  return (req, res, next) => {
    if (!allowRoles.includes(req.role)) {
      res.status(401).send({ error: "Unauthorized" });
    }
    next();
  };
}

module.exports = { role };

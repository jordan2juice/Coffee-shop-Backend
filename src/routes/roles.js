"use strict";

function role(allowRoles) {
  return (req, res, next) => {
    if (allowRoles.includes(req.role)) {
      next();
    }
  };
}

module.exports = { role };

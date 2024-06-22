"use strict";

function errorHandling(err, req, res, next) {
  res.status(500).send(err.message);
}

function notFound(req, res, next) {
  res.status(404).send("Not found");
}

module.exports = { errorHandling, notFound };

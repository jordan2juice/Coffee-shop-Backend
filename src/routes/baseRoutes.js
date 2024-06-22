"use strict";

const express = require("express");
const baseRouter = express.Router();
const { home } = require("../controllers");

baseRouter.route("/").get(home);

module.exports = baseRouter;

"use strict";

const { storage } = require("../../image");

const multer = require("multer");
const upload = multer({ storage });

module.exports = upload;

"use strict";

const mongoose = require("mongoose");


const DB = process.env.DB;

// main().catch((err) => console.log(err));

async function mongooseConnect() {
  await mongoose.connect(DB);
}

module.exports = mongooseConnect;

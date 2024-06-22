"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3011;
const cors = require("cors");
const { errorHandling, notFound } = require("./src/middleware/error");

const mongooseConnect = require("./database");
const product = require("./src/routes/productRoutes");
const baseRouter = require("./src/routes/baseRoutes");
const userRouter = require("./src/routes/userRoutes");

app.use(cors());
app.use(express.json());

mongooseConnect().catch((error) => {
  console.log(error);
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
//! Routes
app.use(baseRouter);
app.use(product); // product routes.

//! User Route
app.use("/user", userRouter);

// Error Handling - Middleware
app.use(errorHandling);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

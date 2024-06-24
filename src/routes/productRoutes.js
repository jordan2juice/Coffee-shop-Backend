"use strict";

const express = require("express");
const {
  getProduct,
  newProduct,
  updateProduct,
  deleteProduct,
  getProductById,
} = require("../controllers/productController");
const upload = require("../middleware/upload");

const product = express.Router();

product
  .route("/products")
  .post(upload.single("image"), newProduct)
  .get(getProduct);

product.route("/products/:id").get(getProductById);

product.route("/products/:id").put(updateProduct);

product.route("/products/:id").delete(deleteProduct);

module.exports = product;

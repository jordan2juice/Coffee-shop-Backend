"use strict";

const Product = require("../modals/Product");

async function home(req, res, next) {
  res.send("Server online!");
}

async function newProduct(req, res, next) {
  try {
    const { name, description, price, category } = req.body;
    const newProduct = new Product({
      name,
      description,
      price,
      imageURL: req.file.path,
      category,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
}

async function getProduct(req, res, next) {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
}

async function getProductById(req, res, next) {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json("Product not found");
    }
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
}

async function updateProduct(req, res, next) {
  try {
    const product = await Product.findById(req.params.id);
    product.name = req.body.name || product.name;
    product.description = req.body.description || product.description;
    product.price = req.body.price ?? product.price;
    product.imageURL = req.body.imageURL || product.imageURL;
    product.category = req.body.category || product.category;
    await product.save();
    if (!product) {
      res.status(404).json("Product not found");
    }
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
}

async function deleteProduct(req, res, next) {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.status(200).json(deletedProduct);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  updateProduct,
  deleteProduct,
  newProduct,
  getProduct,
  getProductById,
};

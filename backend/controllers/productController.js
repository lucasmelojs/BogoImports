const Product = require("../models/productModel");
const mongoose = require("mongoose");

// get all products
const getProducts = async (req, res) => {
  const products = await Product.find({}).sort({ createdAt: -1 });

  res.status(200).json(products);
};
// get single product
const getProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ msg: "Product not found" });
  }
  res.status(200).json(product);
};

// create a new product
const createProduct = async (req, res) => {
  const { type, category, name, model, brand, year, gear, price, fipe } =
    req.body;

  try {
    const product = await Product.create({
      type,
      category,
      name,
      model,
      brand,
      year,
      gear,
      price,
      fipe,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a product

// update a product

module.exports = {
  createProduct,
  getProducts,
  getProduct,
};

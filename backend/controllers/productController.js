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

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such product" })
  }

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
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such product" })
  }

  const product = await Product.findOneAndDelete({ _id: id });
  if (!product) {
    return res.status(404).json({ msg: "Product not found" });
  }

  res.status(200).json({ msg: "Deleted Successfully!" });
}

// update a product
const updateProduct = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such product" })
  }

  const product = await Product.findOneAndUpdate({ _id: id }, {
    ...req.body
  })
  if (!product) {
    return res.status(404).json({ error: "No such product" })
  }
  res.status(200).json({ msg: "Updated Successfully!" });
}


module.exports = {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct
};

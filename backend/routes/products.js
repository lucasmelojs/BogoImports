const express = require("express");
const Products = require("../models/Products");

const router = express.Router();

//GET all products
router.get("/", (req, res) => {
  res.json({ mssg: "GET all products" });
});

//GET Single Product
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET single product" });
});

//POST a new product
router.post("/", async (req, res) => {
  const { type, category, name, model, brand, year, gear, price, fipe } =
    req.body;
  try {
    const newProduct = await Products.create({
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
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//DELETE a new product
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a product" });
});

//UPDATE a new product
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a product" });
});

module.exports = router;

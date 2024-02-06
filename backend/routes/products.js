const express = require("express");
const {
  createProduct,
  getProducts,
  getProduct,
} = require("../controllers/productController");

const router = express.Router();

//GET all products
router.get("/", getProducts);

//GET Single Product
router.get("/:id", getProduct);

//POST a new product
router.post("/", createProduct);

//DELETE a new product
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a product" });
});

//UPDATE a new product
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a product" });
});

module.exports = router;

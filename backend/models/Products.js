const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    type: { type: String, required: true },
    category: { type: String, required: true },
    name: { type: String, required: true },
    model: { type: String, required: true },
    brand: { type: String, required: true },
    year: { type: String, required: true },
    gear: { type: String, required: true },
    price: { type: Number, required: true },
    fipe: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);

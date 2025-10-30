const Product = require("../Models/Product");

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
    console.log("Data", product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { createProduct, getProduct };

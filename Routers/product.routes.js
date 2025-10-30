const {
  createProduct,
  getProduct,
} = require("../Controllers/productController");
const express = require("express");
const router = express.Router();

router.post("/", createProduct);
router.get("/", getProduct);

module.exports = router;

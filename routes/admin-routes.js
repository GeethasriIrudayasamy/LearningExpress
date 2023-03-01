const express = require("express");
const router = express.Router();
const productController = require("../controllers/products");

router.use("/add-product", productController.addProducts);

router.post("/product", productController.products);

module.exports = router;

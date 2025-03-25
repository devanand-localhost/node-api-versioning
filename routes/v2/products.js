const express = require("express");
const router = express.Router();
const productController = require("../../controllers/v2/productController");

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.createProduct); // New in v2

module.exports = router;

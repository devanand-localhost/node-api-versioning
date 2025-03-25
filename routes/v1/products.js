const express = require("express");
const router = express.Router();
const productController = require("../../controllers/v1/productController");

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);

module.exports = router;

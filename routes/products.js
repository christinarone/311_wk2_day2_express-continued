const express = require("express");
const productsController = require('../controller/products')

const router = express.Router()

router.get("/", productsController.getAllProducts)

router.get("/:id", productsController.getProductsById)

router.post("/products", productsController.postProduct)

module.exports = router
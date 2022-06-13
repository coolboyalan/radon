const express = require('express');
const router = express.Router();
const product = require("../controllers/productController")
const user = require("../controllers/userController")
const order = require("../controllers/orderController")

const mid = require("../middlewares/commonMiddlewares")

router.post("/createProduct",product.createProduct)
router.post("/createUser", mid.checkHeader, user.createUser)
router.post("/newOrder", mid.checkHeader, order.newOrder)

module.exports = router;
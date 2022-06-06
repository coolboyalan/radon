const express = require("express")
const router = express.Router()
const bookController = require("../controllers/bookController")

router.post("/addNewBook",bookController.addNewBook)
router.get("/getAllBooks",bookController.getAllBooks)

module.exports = router
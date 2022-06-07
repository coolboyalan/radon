const express = require('express');
const router = express.Router();
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", bookController.createBook)
router.post("/createAuthor", bookController.createAuthor)
router.get("/chetanBhagatBooks", bookController.chetanBhagatBooks)

module.exports = router;
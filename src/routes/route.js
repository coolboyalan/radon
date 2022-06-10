const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/apiOne", controller.apiOne);
router.get("/apiTwo", controller.apiTwo);
router.get("/apiThree", controller.apiThree);

module.exports = router;

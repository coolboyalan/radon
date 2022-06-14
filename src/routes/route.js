const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mid= require("../middleware/auth")


router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/users/:userId", mid.auth,userController.getUserData)

router.put("/users/:userId", mid.auth, userController.updateUser)

router.delete("/users/:userId", mid.auth, userController.deleteUser)

module.exports = router;
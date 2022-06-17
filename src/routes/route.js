const express = require('express');
const router = express.Router();
const cowin= require("../controllers/vaccineController")
const weather = require("../controllers/weatherController")
const meme = require("../controllers/memeController")

//PROBLEM1 - COWIN
router.get("/findByDistrict", cowin.findByDistrict)


//PROBLEM2 - WEATHER
router.get("/weather", weather.weather)

//PROBLEM 2.3 - SORTING CITIES
router.get("/weather/temp", weather.citiesTemp)

//PROBLEM3
router.post("/createMeme", meme.createMeme)
module.exports = router;
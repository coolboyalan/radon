const express = require("express");
const problem = require("../logger/logger");
const problem2 = require("../util/helper");
const problem3 = require("../validator/formatter");
const router = express.Router();

// PROBLEM 1

router.get("/test-me", function (req, res) {
  problem.first();
  res.send("My first ever api!");
});
// PROBLEM 2

router.get("/test-me1", function (req, res) {
  problem2.second();
  res.send("My second ever api!");
});

// PROBLEM 3

router.get("/test-me2", function (req, res) {
  problem3.final();
  res.send("My third api!");
});

module.exports = router;
// adding this comment for no reason

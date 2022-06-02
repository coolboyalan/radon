const express = require("express");
const _ = require("lodash")
const problem = require("../logger/logger");
const problem2 = require("../util/helper");
const problem3 = require("../validator/formatter");
const problem4 = require("../problem4/problem4")
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

// PROBLEM 4

router.get("/hello", function(req, res){
    console.log(_.chunk(problem4.months,3)); //PROBLEM 4.1
    console.log((_.tail(problem4.odd))) //PROBLEM 4.2
    console.log((_.union(problem4.arr1,problem4.arr2,problem4.arr3,problem4.arr4,problem4.arr5))) //PROBLEM 4.3
    console.log((_.fromPairs(problem4.o1))) //PROBLEM 4.4
     res.send("Problem4")
})

module.exports = router;
// adding this comment for no reason

const express = require('express');
const problem = require('../api-assignment/api')
const underscore = require('underscore')

const router = express.Router();

router.get('/movies', function (req, res) {  //PROBLEM1
    res.send(problem.movies)
});

router.get('/movies/:movieno', function (req, res) { //PROBLEM2 & PROBLEM3
  res.send(problem.movies[req.params.movieno - 1] || "This isn't a valid index")
});

router.get('/films', function(req, res){ //PROBLEM4
    res.send(problem.moviesob)
})

router.get('/films/:filmId', function(req, res){ //PROBLEM5
    res.send((problem.moviesob)[req.params.filmId - 1] || "There isn't any movie with this ID")
})

module.exports = router;
// adding this comment for no reason
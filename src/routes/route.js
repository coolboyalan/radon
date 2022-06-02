const express = require('express');
const problem = require('../api-assignment/api')
const underscore = require('underscore')

const router = express.Router();

router.get('/movies', function (req, res) {  //PROBLEM1
    res.send(JSON.stringify(problem.movies))
});

router.get('/movies/:movieno', function (req, res) { //PROBLEM2 & PROBLEM3
  res.send(problem.movies[req.params.movieno - 1] || "This isn't a valid index")
});

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason
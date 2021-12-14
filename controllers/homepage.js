const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");

const { Joke } = require('../models');

const faker = require('faker');


router.get('/', async (req, res) => {
  //get Jokes
  Joke.findAll()
  .then(function(jokeList) {
    console.log('FOUND:', jokeList);
    // res;
    // Joke = Joke.toJSON();

    res.render('homepage', {
      jokeList :jokeList,
    })
})
.catch(function(err) {
    console.log('ERROR', err);
    res.json({ message: 'Error occured, please try again....'});
  });
});






module.exports = router;


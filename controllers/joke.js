const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");

const { Joke } = require('../models');

const faker = require('faker');

// Refer to https://u.pgamerx.com/types for types


router.get('/', async (req, res) => {
  let firstName = faker.name.firstName();
  let image = faker.image.abstract()
  let lastName = faker.name.lastName();

  let joke = "bartender fart"  



  res.render('joke', {
       haha:joke,
       background: image,
       joke1: "aha",
       newJoke: firstName + " " + lastName + 
       " died."
     })
 
});

// router.post
//   Joke.create()
//   save to sql

module.exports = router;


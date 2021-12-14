const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");

const { Joke } = require('../models');

const faker = require('faker');

//GET to Joke page

router.get('/', async (req, res) => {
  //get Jokes
  Joke.findAll()
  .then(function(jokeList) {
    console.log('FOUND:', jokeList);
    // res.json({ jokes: jokeList });
    // Joke = Joke.toJSON();

    res.render('joke', {
      'jokeList':jokeList,
      Joke_text: "haha"
    })
})
.catch(function(err) {
    console.log('ERROR', err);
    res.json({ message: 'Error occured, please try again....'});
  });
});

// Get to each joke page

router.get('/joke/:id', function(req, res) {
  let jokeList = Number(req.params.id);
  Joke.findByPk(jokeList)
  .then(function(joke) {
      if (joke) {
          joke = Joke.toJSON();
          res.render('jokes/edit', { joke });
      } else {
          console.log('This joke does not exist');
          // render a 404 page
          res.render('404', { message: 'joke does not exist' });
      }
  })
  .catch(function(error) {
      console.log('ERROR', error);
  });
  
})


router.get('/:id', function(req, res) {
  console.log('PARAMS', req.params);
  let jokeList = Number(req.params.id);
  console.log('IS THIS A NUMBER?', jokeList);
  Joke.findByPk(jokeList)
  .then(function(joke) {
      if (joke) {
          joke = joke.toJSON();
          console.log('IS THIS A joke?', joke);
          res.render('joke', { joke,
            jokeList:jokeList,

           });
      } else {
          console.log('This joke does not exist');
          // render a 404 page
          res.render('404', { message: 'joke does not exist' });
      }
  })
  .catch(function(error) {
      console.log('ERROR', error);
  });
});

//   let firstName = faker.name.firstName();
//   let image = faker.image.abstract()
//   let lastName = faker.name.lastName();

//   let joke = "bartender fart";  
//   let newWord = "apple"; // miriam webster api random word
//   let nounsPerson = "Surfer"
//   let nounDrink = "cup of seawater"



//   res.render('joke', {
       
//        
//        background: image,
//        newWord : newWord,
//        newJoke: firstName + " " + lastName + 
//        " died. We will all miss" + firstName + " " + lastName,
//        bestJoke: "A " + nounsPerson + " walks into a bar. Says to the bartender, I’ll have a " + nounDrink + 
//        ". Bartender says,  last time I serve " + nounsPerson + "s!"
       
//      })
 
// });

// router.post
//   Joke.create()
//   save to sql

module.exports = router;


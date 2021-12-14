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
    // res.json({ albums: albumList });
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


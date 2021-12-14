const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");

const { Joke, Bot } = require('../models');

const faker = require('faker');

const jokeArray = [
"a rabbi, a priest and an imam walk into a bar. They all order water.",
"My wife told me to stop impersonating a flamingo. I had to put my foot down.",
"I went to buy some camo pants but couldn’t find any.",
"I failed math so many times at school, I can’t even count.",
"I used to have a handle on life, but then it broke.",
"I was wondering why the frisbee kept getting bigger and bigger, but then it hit me.",
"I heard there were a bunch of break-ins over at the car park. That is wrong on so many levels.",
"I want to die peacefully in my sleep, like my grandfather… Not screaming and yelling like the passengers in his car.",
"When life gives you melons, you might be dyslexic.",
"Don’t you hate it when someone answers their own questions? I do.",
"My father has schizophrenia, but he’s good people.",
"Most people are shocked when they find out how bad I am as an electrician.",
"Never trust atoms; they make up everything.",
"My wife just found out I replaced our bed with a trampoline. She hit the ceiling.",
"I was addicted to the hokey pokey, but then I turned myself around.",
"I used to think I was indecisive. But now I’m not so sure.",
"Russian dolls are so full of themselves.",
"The easiest time to add insult to injury is when you’re signing someone’s cast.",
"Light travels faster than sound, which is the reason that some people appear bright before you hear them speak.",
"My therapist says I have a preoccupation for revenge. We’ll see about that.",
"A told my girlfriend she drew her eyebrows too high. She seemed surprised.",
"People who use selfie sticks really need to have a good, long look at themselves.",
"Two fish are in a tank. One says, ‘How do you drive this thing?.",
"I always take life with a grain of salt. And a slice of lemon. And a shot of tequila.",
"Just burned 2,000 calories. That’s the last time I leave brownies in the oven while I nap.",
"Always borrow money from a pessimist. They’ll never expect it back.",
"Build a man a fire and he’ll be warm for a day. Set a man on fire and he’ll be warm for the rest of his life.",
"I don’t suffer from insanity—I enjoy every minute of it.",
"The last thing I want to do is hurt you; but it’s still on the list.",
"The problem isn’t that obesity runs in your family. It’s that no one runs in your family.",
"What do you call a blind deer? No-eye Dear."
];

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
          res.render('joke', { joke });
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

router.get('jokes/new', function(req, res) {
  res.render('/new', { Joke,
    'jokeList':jokeList,
    Joke_text: "haha"})});

router.get('/edit', function(req, res) {
  res.render('jokes/edit', {
    'jokeList':jokeList,
    Joke_text: "haha" 
  })});

// GET to Edit page
router.get('edit/:id', function(req, res) {
  let jokeIndex = Number(req.params.id);
  Joke.findByPk(jokeIndex)
  .then(function(joke) {
      if (joke) {
          joke = joke.toJSON();
          res.render('/edit', { Joke });
      } else {
          console.log('This Joke does not exist');
          // render a 404 page
          res.render('404', { message: 'Joke does not exist' });
      }
  })
  .catch(function(error) {
      console.log('ERROR', error);
  });
  
})


router.get('/:id', function(req, res) {
  console.log('PARAMS', req.params);
  let jokeIndex = Number(req.params.id);
  console.log('IS THIS A NUMBER?', jokeIndex);
  Joke.findByPk(jokeIndex)
  .then(function(joke) {
      if (joke) {
          joke = joke.toJSON();
          console.log('IS THIS A Joke?', joke);
          res.render('joke/show', { joke });
      } else {
          console.log('This album does not exist');
          // render a 404 page
          res.render('404', { message: 'Album does not exist' });
      }
  })
  .catch(function(error) {
      console.log('ERROR', error);
  });
});

/**
* POST ROUTES
* */ 

router.post('jokes/new', function(req, res) {
  console.log('SUBMITTED FORM', req.body);
  Joke.create({
      name: req.body.name,
      Joke_text: req.body.Joke_text,
      id: Number(req.body.id),
  })
  .then(function(newJoke) {
      console.log('NEW Joke', newJoke.toJSON());
      newJoke = newJoke.toJSON();
      res.redirect(`/jokes/${newJoke.id}`);
  })
  .catch(function(error) {
      console.log('ERROR', error);
      res.render('404', { message: 'Joke was not added please try again...' });
  });
  // res.redirect()
});
/**
* EDIT
* */ 
router.put('/:id', function(req, res) {
  console.log('EDIT FORM DATA THAT WAS SUBMITTED', req.body);
  console.log('HERE IS THE ID', req.params.id);
  let jokeIndex = Number(req.params.id);
  Joke.update({
      title: req.body.title,
      length: Number(req.body.length),
      tracks: Number(req.body.tracks),
      year: Number(req.body.year)
  }, { where: { id: jokeIndex } })
  .then(function(response) {
      console.log('AFTER UPDATE', response);
      res.redirect(`/jokes/${jokeIndex}`);
  })
  .catch(function(error) {
      console.log('ERROR', error);
      res.render('404', { message: 'Update was not successful. Please try again.'})
  });
});

/**
* DELETE
* */ 
router.delete('/:id', function(req, res) {
  console.log('ID HERE', req.params.id);
  let albumIndex = Number(req.params.id);
  Joke.destroy({ where: { id: jokeIndex } })
  .then(function(response) {
      console.log('joke DELETED', response);
      res.redirect('/jokes');
  })
  .catch(function(error) {
      console.log('ERROR', error);
      res.render('404', { message: 'joke was not deleted, please try again...'});
  })
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


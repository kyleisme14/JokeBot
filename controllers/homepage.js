const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");

const { Joke } = require('../models');

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

router.get('/', async (req, res) => {
  //get Jokes
  Joke.findAll()
  .then(function(jokeList) {
    console.log('FOUND:', jokeList);
    // res;
    // Joke = Joke.toJSON();

    res.render('homepage', {
      jokeList :jokeList, jokeArray
    })
})
.catch(function(err) {
    console.log('ERROR', err);
    res.json({ message: 'Error occured, please try again....'});
  });
});






module.exports = router;


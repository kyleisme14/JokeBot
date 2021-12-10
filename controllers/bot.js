

var express = require('express');
const axios = require('axios').default
var app = express();
const router = express.Router();
const passport = require("../config/ppConfig");
const sequelize = require('sequelize')


app.set('view engine', 'ejs');
const faker = require('faker');

const { joke, bot } = require('../models');

let firstName = faker.name.firstName();
let lastName = faker.name.lastName();
let date = faker.date.past();

//print to the console
console.log(firstName + " " + lastName + 
" died on " + date);




const button = document.querySelector("button");
const jokeText = document.querySelector(".joke").textContent
var noun1 = prompt("noun")
var noun2 = prompt("noun")
var integer = prompt("integer")
const joke = "why did the duck cross the road? quack!"

document.write("How many " + noun1 +
 " does it take to screw in a " + noun2 + "?")
// How many ___noun1__ does it take to screw in a __noun2____?
// answer: _____integer

function myFunction(){
  console.log("hello");
}

//function for loading a random joke
//open page event and it's a new joke. 
//pulls joke from api
//or computer joke
//prints joke





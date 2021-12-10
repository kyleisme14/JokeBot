const {
    bot,
    Joke,
    user
} = require("./models");


// joke create
Joke.create({
    name: 'first attempts',
    bot_id: null,
    Joke_text: "a rabbi, a priest and an imam walk into a bar. They all order water."
})
.then(function(newJoke){
    console.log('NEW Joke', newJoke.toJSON());
})
.catch(function(error) {
    console.log('ERROR', error);
})
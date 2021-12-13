const {
    Bot,
    Joke,
    User
} = require("./models");


// joke create
Joke.create({
    name: 'first attempts',
    bot_id: null,
    Joke_text: "The future, the present, and the past walk into a bar. Things got a little tense."
})
.then(function(newJoke){
    console.log('NEW Joke', newJoke.toJSON());
})
.catch(function(error) {
    console.log('ERROR', error);
})


// bot createç
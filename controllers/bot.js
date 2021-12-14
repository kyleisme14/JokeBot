const express = require('express');
const router = express.Router();

const { Joke, Bots } = require('../models');
const faker = require('faker');

const nounArray = [
'time',
' year',
' way',
' day',
' man',
' thing',
' woman',
' life',
'child',
'world',
'school',
'state',
'family',
'student',
'group',
'country',
'problem',
'hand',
' part',
' place',
' week',
' company',
' system',
' program',
 'question',
 'work',
 'government',
 'number',
 'night',
 'point',
 'home',
 'water',
' room',
' mother',
' area',
' money',
' story',
'fact',
'month',
'lot',
'right',
'study',
'book',
'eye',
'job',
'word',
'business',
'issue',
'side',
'kind',
'head',
'house',
'service',
'friend',
'father',
'power',
'hour',
' game',
' line',
' end',
' member',
' law',
' car',
' city',
 'community',
 'name',
 'president',
 'team',
 'minute',
 'idea',
 'kid',
 'body',
 'information',
 'back',
 'parent',
 'face',
 'others',
 'level',
 'office',
 'door',
 'health',
 'person',
 'art',
 'war',
 'history',
 'party',
 'result',
 'change',
 'morning',
 'reason',
 'research',
 'girl',
 'guy',
 'moment',
 'air',
 'teacher',
 'force',
'education'];

const verbsArray = [
'surrounds',
'stabs',
'returns',
'medicates',
'blindsides',
'boogies',
'flaps',
'trips',
'swats',
'suck ins',
'harasss',
'traps',
'snoops',
'explodes',
'sketchs',
'scatters',
'challenges',
'fights',
'burys',
'splatters',
'smacks',
'peddles',
'balances',
'trip ups',
'boggles',
'pokes',
'critiques',
'fears',
'initiates',
'line ups',
'run overs',
'schedules',
'cooks',
'imprisons',
'underestimates',
'cajoles',
'wheedles',
'soft soaps',
'butter ups',
'sweet-talks',
'prevails',
'shreds',
'drinks',
'disputes',
'echos',
'mimics',
'berates',
'castigates',
'underrates',
'taunts',
'bes',
'haves',
'dos',
'says',
'gos',
'cans',
'gets',
'woulds',
'makes',
'nows',
'ills',
'hinks',
'akes',
'ees',
'omes',
'oulds',
'wants',
'looks',
'uses',
'finds',
'gives',
'tells',
'works',
'mays',
'shoulds',
'calls',
'trys',
'asks',
'needs',
'feels',
'becomes',
'leaves',
'puts',
'means',
'keeps',
'lets',
'begins',
'seems',
'helps',
'talks',
'turns',
'starts',
'mights',
'shows',
'hears',
'plays',
'runs',
'moves',
'likes',
'lives',
'believes',
'holds',
'brings',
'happens',
'musts',
'writes',
'provides',
'sits',
'stands',
'loses',
'pays',
'meets',
'includes',
'continues',
'sets',
'learns',
'changes',
'leads',
'understands',
'watchs',
'follows',
'stops',
'creates',
'speaks',
'reads',
'allows',
'adds',
'spends',
'grows',
'opens',
'walks',
'wins',
'offers',
'remembers',
'loves',
'considers',
'appears',
'buys',
'waits',
'serves',
'dies',
'sends',
'expects',
'builds',
'stays',
'falls',
'cuts',
'reachs',
'kills',
'emains',
]

router.get('/', async (req, res) => {
    //get Jokes
  Joke.findAll()
  .then(function(jokeList) {



    const noun1 = nounArray[(faker.datatype.number({
        'min':0, 'max': nounArray.length
    }))];
    const noun2 = nounArray[(faker.datatype.number({
        'min':0, 'max': nounArray.length
    }))];
    const noun3 = nounArray[(faker.datatype.number({
        'min':0, 'max': nounArray.length
    }))];
    const noun4 = nounArray[(faker.datatype.number({
        'min':0, 'max': nounArray.length
    }))];
    const verb1 = verbsArray[(faker.datatype.number({
        'min':0, 'max': verbsArray.length
    }))];
    const verb2 = verbsArray[(faker.datatype.number({
        'min':0, 'max': verbsArray.length
    }))];
    const joketext = "What do you call a " + noun1 + " that " + verb1 + " " + noun2 + "? " + 
    "A " + noun3 + " that " + verb2 + " " + noun4 + "!";

    res.render('bot', {
    joketext
  })
})
.catch(function(err) {
  console.log('ERROR', err);
  res.json({ message: 'Error occured, please try again....'});
});
});



module.exports = router;
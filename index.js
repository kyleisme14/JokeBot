const {
    Bot,
    Joke,
    User,
    Nouns
} = require("./models");


// // joke create
// Joke.create({
//     name: 'more jokes',
//     bot_id: null,
//     Joke_text: "What do you call a blind deer? No-eye Dear."
// })
// .then(function(newJoke){
//     console.log('NEW Joke', newJoke.toJSON());
// })
// .catch(function(error) {
//     console.log('ERROR', error);
// })


// bot createç

// const fs = require('fs');
// const { kill, report } = require('process');
// fs.readFile('./csv/most-common-nouns-english.csv', 'utf8', function (err, data) {
//   const reportArray = [];
//   const junkArray = [];
//   const singularObj = {};
//   const pluralObj = {};
//   if(err) {
//         console.log("There was a problem reading the file.");
//     } else {
//         let splitByCommaArray = data.split(',');
//         let splitWithSpaceArray = data.split('\n');

//         for (let i = 0; i < splitWithSpaceArray.length; i++) {
//           let row = splitWithSpaceArray[i];
//           const rowSplitArray = row.split(',');
//           let word = rowSplitArray[0];
//           let plural = rowSplitArray[1];

//           if (rowSplitArray.length === 15) {
//             const obj = {
//                 singular: rowSplitArray[0],
//                 plural: rowSplitArray[1],
//                 INSERT: 'nouns',
//                 ATTRIBUTES: '( singular, plural)',
//                 VALUES: 'VALUES',
//             }
//             const dataString =  `( '${obj.singular}', '${obj.plural}' );`;
//             obj['DATA'] = dataString;
//             reportArray.push(obj);
//         } else {
//             const obj = {
//                 singular: rowSplitArray[0],
//                 plural: rowSplitArray[1],
//                 INSERT: 'nouns',
//                 ATTRIBUTES: '( singular, plural)',
//                 VALUES: 'VALUES',
//             }
//             const dataString =  `( '${obj.singular}', '${obj.plural}' );`;
//             obj['DATA'] = dataString;
//             reportArray.push(obj);
//             }
//             for (let i = 0; i < reportArray.length; i++) {
//                 let noun = reportArray[i];
//                 console.log(reportArray);
//             }}
//     }})


   
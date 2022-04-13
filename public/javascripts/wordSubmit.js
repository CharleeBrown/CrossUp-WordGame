var newChall = require('./dbInsert.js');


let newWord = document.getElementById('inputWord');
let newClue= document.getElementById('inputClue');
newChall.setChallWord(newWord, newClue);

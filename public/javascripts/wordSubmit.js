import {setChallWord} from './dbInsert.js';

let newWord = document.getElementById('inputWord');
let newClue= document.getElementById('inputClue');
setChallWord(newWord, newClue);

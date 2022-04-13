import {client, coll} from './conn.js';

export function setChallWord(word, clue){

if(clue!=null || word!=null || word !=""|| clue !=""){
	client.connect(
		coll.insertOne({'date':'01/01/2023', 'wordOfDay':word, 'wordClue':clue}));
	}
}
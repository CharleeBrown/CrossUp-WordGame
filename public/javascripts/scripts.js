function guessCount(){
	//After the button is clicked
	// It will store a cookie with a count of 1.
	// The cookie will dispose in 24 hours.
	setCookies();


}
function getGuess(){
	//I want to get the length of the word.
	// The guessword should be global then.
	// Make the guessword global then get the length.
	// then get the - detour -- should it be one input box?
	// That would differentiate it from wordle.
	document.cookie = "attemptWord="+ wordGuess;
}
function setCookies(){

	var cookDate = new Date();
	cookDate.getDate()+1;
	document.cookie = "tries=1; SameSite=None; Secure";
	document.cookie = "attemptWord="+ wordGuess;
}
function createBoxes(guessWord, clue){
	var containDiv = document.createElement("div");
	var wordLength = guessWord.length;
	var mainDiv = document.getElementById("container");
	var keyboard = document.createElement("input");
	for(i=0; i<wordLength; i++){
		var newDiv = document.createElement("input");
		newDiv.style.border = "1px solid black";
		newDiv.style.height = "30px";
		newDiv.style.width= "30px";
		newDiv.style.display = "inline-block";
		newDiv.style.margin = "3px";
		newDiv.style.textAlign = "center";
		newDiv.setAttribute("maxlength", "1");
		newDiv.setAttribute("id", "letter"+i)
		containDiv.appendChild(newDiv);
	}

	var clues = document.getElementById("clue");
	clues.innerHTML = clue;
	//containDiv.style.display ="inline-block";
	mainDiv.style.textAlign = "center";
	mainDiv.style.paddingTop ="20px";
	mainDiv.appendChild(containDiv);
	keyboard.setAttribute("inputmode", "text");
	setCookies();
	
}
/* newDiv.addEventListener("onchange", function(){
	if(this.value.length == this.maxlength){
		var nextInput = this.next
	}
}) */
// I should add the clue and word to a database, so people and look at the past ones.

document.addEventListener('DomContentLoaded', createBoxes("Seek", "To Search for"));
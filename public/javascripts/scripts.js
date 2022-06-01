function guessCount() {
	//After the button is clicked
	// It will store a cookie with a count of 1.
	// The cookie will dispose in 24 hours.
	setCookies();


}
var elts = document.getElementsByClassName('letters');
Array.from(elts).forEach(function(elt){
  elt.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13 || elt.value.length == 1) {
      // Focus on the next sibling
      elt.nextElementSibling.focus();
    }
  });
});

function getGuess() {
	//I want to get the length of the word.
	// The guessword should be global then.
	// Make the guessword global then get the length.
	// then get the - detour -- should it be one input box?
	// That would differentiate it from wordle.
	document.cookie = "attemptWord="+ wordGuess;
}

function numbercheck() {

	let guessCheck = parseInt(guess);
	if (guessCheck) {
		guess = null;
	} else {
		console.log(guess);
	}
	return guess;

}


function setCookies() {

	const today = new Date();
	const tomorrow = new Date(today);


	document.cookie = "id=1; tries=1; expires=" + tomorrow.setDate(tomorrow.getDate() + 1).toGMT() + "; SameSite=None; Secure";
	//document.cookie = "attemptWord="+ wordGuess;
	//document.cookie = " + "; Secure";
	console.log(tomorrow);
}

function createBoxes(guessWord, clue) {
	var containDiv = document.createElement("div");
	var wordLength = guessWord.length;
	var mainDiv = document.getElementById("container");
	var keyboard = document.createElement("input");
	for (i = 0; i < wordLength; i++) {
		var newDiv = document.createElement("input");
		newDiv.setAttribute("maxlength", "1");
		newDiv.setAttribute("class", "letters");
		containDiv.appendChild(newDiv);
	}
	var clues = document.getElementById("clue");
	clues.innerHTML = clue;
	containDiv.style.display ="inline-block";
	mainDiv.style.textAlign = "center";
	mainDiv.style.paddingTop = "20px";
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
function fetchCheck(){
	fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then((response) => response.json())
	.then((json) => console.log("id"+json['id']));
}
document.addEventListener('DomContentLoaded', createBoxes("Seek", "To Search for"));
document.addEventListener('DOMContentLoaded', fetchCheck());

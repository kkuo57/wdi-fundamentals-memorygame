console.log()
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne === cardTwo) {
	window.alert("You found a match!");
} else if (cardThree === cardFour) {
	window.alert("You found a match!");
} else if (cardOne === cardThree) {
	window.alert("Sorry, try again.");
} else if (cardOne === cardFour) {
	window.alert("Sorry, try again.");
} else if (cardTwo === cardThree) {
	window.alert("Sorry, try again.");
} else if (cardTwo === cardFour) {
	window.alert("Sorry, try again.");
}

var createCards = function(){

var board = document.getElementById("game-board");
for (var i = 1; i <= 4; i += 1){
	var newCard = document.createElement("div");
	newCard.className = "card";
	board.appendChild(newCard);
}
}
createCards();

var cardsInPlay = [];
var createBoard = function(){
	var card = ["queen", "queen", "king", "king"];
	for (var i = 0; i < card.length; i ++)
		cardElement.setAttribute("data-card", card[i]);
		cardElement.addEventListener('click', isTwoCards());
		console.log(card[i]);
		cardElement.innerHTML = '<img src="king-card.jpg" alt = "King of Spades" />';
}
var isMatch = function(){
var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'))
	if (cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
}
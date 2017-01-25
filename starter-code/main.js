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

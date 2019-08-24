// Pseudocode the steps

// Create an array of the letters

var guessOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Create Global Variables
var wins = 0;
var losses = 0;
var remainingGuesses = 9;
var playerPick = [];
var letters = null;


// Pick Random Choices

var randGuess = guessOptions[Math.floor(Math.random() * guessOptions.length)];

// Track Guesses Remaining
function countRemainingGuesses() {
  document.querySelector("#remainingGuesses").innerHTML = "# of Guesses Remaining: " + remainingGuesses;
}

// Add to empty array for player picks
function farUserGuesses() {
  document.querySelector("#guessesPicked").innerHTML = "The Guesses You've Already Picked: " + playerPick.join(' ');
}

countRemainingGuesses();

var restart = function() {
  remainingGuesses = 9;
  playerPick = [];
  var randGuess = guessOptions[Math.floor(Math.random() * guessOptions.length)];
}

// Track User Picks

document.onkeyup = function(event) {
  remainingGuesses--;

  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  playerPick.push(userGuess);
  countRemainingGuesses();
  farUserGuesses();

  // Tracks Wins & Losses
  if (userGuess === randGuess){
    wins++;
    document.querySelector("#wins").innerHTML = "# of Wins: " + wins;
    restart();
  } 
  else if (remainingGuesses === 0) {
    losses++;
    document.querySelector("#losses").innerHTML = "# of Losses: " + losses;
    restart();
  }
  };



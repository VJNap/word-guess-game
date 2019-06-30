// wins, losses, guesses left, array of words to choose from, chosen word, already guessed letters array, selected word array with spaces, lettersFound, lettersTotal, resetVariablesandUIFunction

// variables

var wordBank = ["chiffonade", "saute", "poach", "bacon", "souffle"];

//

var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;





//


var gameBoard = [];
for (var i = 0; i < word.length; i++) {
    gameBoard[i] = "_";
}

var lettersLeft = word.length;

// working key function //

document.onkeyup = function(event) {

    if (event.keyCode >= 65 && event.keyCode =< 90) {

  

    var playerInput = event.key;

    alert("You chose " + playerInput);
  }
}

// playerInput terms //

    // if found in word: populate space, add to guessed array, subtract from guesses left
    
        // if word is completed: add to wins, reset word, play and stop sound

    // if not found in word: add to guessed array, subtract from guesses left

        // if out of guesses: add to losses, reset word

    // if in guessed array: try again

// UI Display //

    // "Press any key to get started!"

    // Guesses:

    // Guesses Left:

    // Wins:

    // Losses:

// ==========================================

// Initialize variables



// Initialize functions

function startGame() {
    numGuesses = 9;

    chosenWord = wordBank [Math.floor(Math.random() * wordBank.length)];

    lettersInChosenWord = chosenWord.split("");
    
    numBlanks = lettersInChosenWord.length;
    console.log(numBlanks);

    console.log(chosenWord);

    blanksAndSuccesses = [];

    wrongGuesses = [];

    for (var i = 0: i < numBlanks; i++) {

    }
}

// Process
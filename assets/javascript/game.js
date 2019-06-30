// UI Display //

    // "Press any key to get started!"

    // Guesses:

    // Guesses Left:

    // Wins:

    // Losses:

// ==========================================

// Initialize variables

var wordBank = ["chiffonade", "saute", "poach", "bacon", "souffle"];
var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var lettersLeft = chosenWord.length;
var gameBoard = [];
for (var i = 0; i < chosenWord.length; i++) {
    gameBoard[i] = "_";
}

// =========================================

// Initialize functions

    // start function
function startGame() {
    numGuesses = 9;

    chosenWord = wordBank [Math.floor(Math.random() * wordBank.length)];

    lettersInChosenWord = chosenWord.split("");
    
    numBlanks = lettersInChosenWord.length;
    console.log(numBlanks);

    console.log(chosenWord);

    blanksAndSuccesses = [];

    wrongGuesses = [];

    for (var i = 0; i < numBlanks; i++) {

    }
}

    // working key function

document.onkeyup = function(event) {

    // if (event.keyCode >= 65 && event.keyCode < 90); {
        
        var playerInput = event.key;

        alert("You chose " + playerInput);

        // }

    return playerInput;
}

// ===========================================

// Process

    // playerInput terms

        // if found in word: populate space, add to guessed array, subtract from guesses left
        
            // if word is completed: add to wins, reset word, play and stop sound

        // if not found in word: add to guessed array, subtract from guesses left

            // if out of guesses: add to losses, reset word

        // if in guessed array: try again
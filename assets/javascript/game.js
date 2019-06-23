// wins, losses, guesses left, array of words to choose from, chosen word, already guessed letters array, selected word array with spaces, lettersFound, lettersTotal, resetVariablesandUIFunction

//


var wordBank = ["chiffonade", "saute", "poach", "bacon", "souffle"]

// working key function //

document.onkeyup = function (event) {

    var playerInput = event.key;

    alert("You chose " + playerInput);

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
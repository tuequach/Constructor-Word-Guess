
//initialize constructor file
var Word = require("./word.js");
var inquirer = require('inquirer');

//input of all alphabet letters
var letterArray = 
'abcdefghijklmnopqrstuvwxyz';

// list of characters to choose from for HangMan
var leagueChampions = 
['nocturne', 'teemo', 'ezreal', 'graves', 'blitzcrank', 'ahri', 'annie', 'alistar', 'katarina'];

//randomize the leagueChampions array
var randomIndex = Math.floor(Math.random() * leagueChampions.length);
var randomWord = leagueChampions[randomIndex];

//constructor for leagueChampions array
compWord = new Word (randomWord);

var newWordNeeded = false; 

var incorrect = [];
var correct = [];

var guesses = 15; 

function information () {
    if (newWordNeeded) {
        var randomIndex = Math.floor(Math.random () * leagueChampions.length);
        var randomWord = leagueChampions[randomIndex];

        compWord = new Word (randomWord);

        newWordNeeded = false;
    }

//if letter is guessed correctly
var wordComplete = [];
compWord.objArray.forEach(completeCheck);

//letters left that need to be guessed
if (wordComplete.includes(false)) {
    inquirer
    .prompt ([
        {
            type: 'input',
            message: 'Welcome to League of Legends Champions Hangman! \nGuess a letter (A-Z)!',
            name: 'userinput'
        }
    ])
    .then(function (input) {
        if (!letterArray.includes(input.userinput) || input.userinput.length > 1) {
            console.log('\nWrong! Try Again!\n');
            information();
        } else {

            if (incorrect.includes(input.userinput) || correct.includes(input.userinput) || input.userinput === '') {
                console.log("\nYou've Already Guessed It!\n");
                information();
            } else {
                 
                //Checking if guesses are correct 
                var checkArray = [];

                compWord.userGuess(input.userinput);

                compWord.objArray.forEach(wordCheck);
                if (checkArray.join('') === wordComplete.join('')) {
                    console.log('\nThis Is Incorrect!\n');

                    incorrect.push(input.userinput);
                    guesses--;
                } else {
                    console.log ('\nThis is Correct!\n');
                    correct.push(input.userinput);
                }

                compWord.log();

//showing gueses left 
            console.log('Guesses Left: ' + guesses + '\n');

            console.log("Letters That's Been Guessed: " + incorrect.join(' ') + '\n');
            
        if (guesses > 0) {
            information();
        } else {
            console.log("Sorry! You've Lost'\n");

            resetGame();
        }

        function wordCheck (key) {
            checkArray.push(key.guessed);
                }
            }
        }
    })
} else {
    console.log("You WIN!\n");

    resetGame();
}

function completeCheck(key) {
    wordComplete.push(key.guessed);
}
}

function resetGame() {
    inquirer
    .prompt([
        {
        type: "list",
        message:"What Would You Like To Do: ",
        choices: ['Play Again', 'Quit Game'],
        name: 'reset'
        }
    ])
    .then (function (input) {
        if (input.reset === 'Play Again') {
            newWordNeeded = true;
            incorrect = [];
            correct = [];
            guesses = 15;
            information();
        } else {
            return
        }
    })
}

information();


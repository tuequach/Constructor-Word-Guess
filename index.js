//initialize constructor file

var Word = require ('./word.js');
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

var incorrect = [];
var correct = [];

var guesses = 15; 

function information () {
    if (newWord) {
        var randomIndex = Math.floor(Math.random () * leagueChampions.length);
        var randomWord = leagueChampions[randomIndex];

        compWord = new Word (randomWord);
    }
}
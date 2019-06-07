//Global variables
//------------------------------------------------------------
//Arrays and variables for holding data
const wordOptions = ["riddikulus", "obliviate", "sectumsempra", "alohomora", "expelliarmus", "accio", "lumos"];
let selectedWord = " ";
let lettersInWord = [];
let numBlanks = 0;
let blankAndSuccesses = []; //j _ _ _ _ _ _ 
let wrongLetters = [];

//Game counters
let winCount = 0;
let lossCount = 0;
let guessesLeft = 9;

//Functions (Reusable blocks of code that I will call upon when I need)
//------------------------------------------------------------
function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)]
    lettersInWord = selectedWord.split(" ");
    numBlanks = lettersInWord.length;
    //Reset - each round of the game this will reset the variables
    guessesLeft = 9;
    wrongLetters = [];
    blankAndSuccesses = [];

    //Populate blanks and success with right number of blanks
    for (i=0; i < numBlanks; i++) {
        blankAndSuccesses.push ("_");
    }

    //Testing/Debuging
    console.log (selectedWord);
    console.log (lettersInWord);
    console.log (numBlanks);
    console.log (blankAndSuccesses);
}

//MAIN PROCESS
//------------------------------------------------------------
startGame ();
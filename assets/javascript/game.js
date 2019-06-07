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
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;
    //Reset - each round of the game this will reset the variables
    guessesLeft = 9;
    wrongLetters = [];
    blankAndSuccesses = [];

    //Populate blanks and success with right number of blanks
    for (i=0; i < numBlanks; i++) {
        blankAndSuccesses.push ("_");
    }

    //Change HTML to reflect round conditions 
    document.getElementById("wordToGuess").innerHTML = blankAndSuccesses.join (" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    //Testing/Debuging
    console.log (selectedWord);
    console.log (lettersInWord);
    console.log (numBlanks);
    console.log (blankAndSuccesses);
}

//MAIN PROCESS
//------------------------------------------------------------
//Initiates the code for the first time 
startGame ();

//Register key clicks
//document.onkeyup = function(event) {
  //  letter;
//}

//stoped at 15:11 https://www.youtube.com/watch?v=cgdmOR15cn4&feature=youtu.be
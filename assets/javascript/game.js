// Array of computer choices and user choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"
, "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


//Wins, loses and guesses starting point
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesArray = [];

console.log(guessesLeft)
console.log(guesses)


// Display variables
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesArrayText = document.getElementById("guessesArray-text");

//display
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
guessesArrayText.textContent = "Your Guesses so far: " + guessesArray;
 
// Randomly chooses a choice from the alphabet array
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess)

    // User choice determined by pressing a key, function operates after key is pressed
 document.onkeyup = function(event) {
    var userGuess = event.key;
console.log(userGuess)
   
for (i = 0; i < cars.length; i++)

// If/Else statements 
 
if (userGuess !== computerGuess){
    guessesLeft --;
//  fill guesses array

   
}

if (guessesLeft === 0){
    losses ++;
    guessesLeft = 9;
    guessesArray = [];
    }

if (userGuess === computerGuess){
    wins ++;
    guessesLeft = 9;
    guessesArray = [];
    }
 
};
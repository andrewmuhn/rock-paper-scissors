// Variables
let userInput = 'R';
// Array of options for computer to pick from

let compChoices = ["R", "S", "P"];

// Create function
// Ask user for their choice

function userChoice() {
  let text;

}

// If user pressed Cancel, immediately end function
if (userChoice === null) {
  break;
}
// Convert to uppercase to make comparisons easier
userChoice = userChoice.toUpperCase;

// Get random index from array of options
let randomChoice = function (compChoices) {
  const randomIndex = Math.floor(Math.random * compChoices.length);

  const randomChoice = compChoices[randomIndex];

  return randomChoice;
}




// If choices are the same, it's a tie

// if (userChoice === randomChoice) {
//   console.log(It's a tie!);
// }
// // Check every win condition for the player

// else if (userChoice === "R" && randomChoice === "S") {
//   console.log(`${userChoice} crushes ${randomChoice}, you win!`);
// } else if (userChoice === 'R' && randomChoice) {

// }
function playRPS() {
  let text;
  switch (userChoice) {
    case 'R':
      if (randomChoice === 'S') {
        console.log(`${userChoice} crushes ${randomChoice}, you win!`);
        text = `${userChoice} crushes ${randomChoice}, you win!`;
      } else if (randomChoice === 'P') {
        console.log(`${randomChoice} covers ${userChoice}, better luck next time!`);
        text = `${randomChoice} covers ${userChoice}, better luck next time!`;
      }
      break;
    case 'P':
      if (randomChoice === 'R') {
        console.log(`${userChoice} covers ${randomChoice}, you win!`);
        text = `${userChoice} covers ${randomChoice}, you win!`;
      } else if (randomChoice === 'S') {
        console.log(`${randomChoice} cuts ${userChoice}, better luck next time!`);
        text = `${randomChoice} cuts ${userChoice}, better luck next time!`;
      }
      break;
    case 'S':
      if (randomChoice === 'P') {
        console.log(`${userChoice} cuts ${randomChoice}, you win!`);
        text = `${userChoice} cuts ${randomChoice}, you win!`;
      } else if (randomChoice === 'R') {
        console.log(`${randomChoice} crushes ${userChoice}, better luck next time!`);
        text = `${randomChoice} crushes ${userChoice}, better luck next time!`;
      }
      break;
    default:
      console.log(`Sorry, ${userChoice} is an invalid input.`)
      text = `Sorry, ${userChoice} is an invalid input.`;
  }
  document.getElementById('winner').innerHTML = text;
}


  // If above conditions failed, assume player lost

  // Print stats with line breaks


  // Ask user to play again

  // If user pressed OK, run the function again

// Run the game for the first time

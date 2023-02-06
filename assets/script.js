// Variables

// Array of options for computer to pick from
const compChoices = ['R', 'P', 'S'];


//test
document.getElementById("myBtn").addEventListener("click", testFunction);
function testFunction() {
  let test = prompt("Please enter your name", "Harry Potter");
  if (test != null) {
    document.getElementById("test-answer").innerHTML =
      "Hello " + test + "! How are you today?";
  }
}

// Create function
// Ask user for their choice
// If user pressed Cancel, immediately end function
// Convert to uppercase to make comparisons easier
// Get random index from array of options
// If choices are the same, it's a tie
// Check every win condition for the player
// If above conditions failed, assume player lost
// Print stats with line breaks
// Ask user to play again
// If user pressed OK, run the function again

document.getElementById("play").addEventListener("click", userInput);

function userInput() {
  let text;
  let userChoice = prompt('R, P, or S', 'R');
  // userChoice = userChoice.toUpperCase;

  function getCompChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  }
  const randomChoice = getCompChoice(compChoices);

  if (userChoice === null) {
    document.getElementById('result').innerHTML = 'Invalid entry please try again';
  }

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
  document.getElementById('result').innerHTML = text;
}


// Run the game for the first time

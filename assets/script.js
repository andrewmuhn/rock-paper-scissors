// Variables
let scoreBoard = {
  wins: 0,
  losses: 0,
  ties: 0,
}
// Array of options for computer to pick from
const compChoices = ['R', 'P', 'S'];

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


//points to button elment on html document "listening" for a click on the button. clicking begins the game aka rockPaperScissors func.
document.getElementById("play").addEventListener("click", rockPaperScissors);


//this is the game function
function rockPaperScissors() {
  //output variable text is modified based on results of the game
  let text;

  //dialouge box asking for users input
  let userChoice = prompt('R, P, or S', 'R');
  // userChoice = userChoice.toUpperCase;

  function getCompChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  }
  const randomChoice = getCompChoice(compChoices);



  if (userChoice == null) {
    text = `It's okay, you didn't have to play`;
    document.getElementById('result').innerHTML = text;
    console.log(text);
    return;
  }

  console.log(`Computer chose: ${randomChoice}`);
  console.log(`You chose: ${userChoice}`)

  if (userChoice === randomChoice) {
    text = `A classic ${userChoice} ${randomChoice} stalemate.`;
    scoreBoard.ties = scoreBoard.ties + 1;
  }

  switch (userChoice) {
    case 'R':
      if (randomChoice === 'S') {
        text = `${userChoice} crushes ${randomChoice}, you win!`;
      } else if (randomChoice === 'P') {
        text = `${randomChoice} covers ${userChoice}, better luck next time!`;
      }
      break;
    case 'P':
      if (randomChoice === 'R') {
        text = `${userChoice} covers ${randomChoice}, you win!`;
      } else if (randomChoice === 'S') {
        text = `${randomChoice} cuts ${userChoice}, better luck next time!`;
      }
      break;
    case 'S':
      if (randomChoice === 'P') {
        text = `${userChoice} cuts ${randomChoice}, you win!`;
      } else if (randomChoice === 'R') {
        text = `${randomChoice} crushes ${userChoice}, better luck next time!`;
      }
      break;
    default:
      text = `Sorry, '${userChoice}' is an invalid input.`;
  }

  console.log(scoreBoard.ties);
  console.log(text);
  alert(text);
  if (confirm("Play again?") === true) {
    rockPaperScissors();
  } else {
    text = `Let's play again soon`;
    document.getElementById('result').innerHTML = text;
    console.log(text);
    alert(text);
    return;
  }
}



// Run the game for the first time

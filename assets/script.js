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

  // ! changes the value from a string to 'function toUpperCase() { [native code] }'
  // TODO: refactor code to keep the return value from prompt a string but still have it be uppercase
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
    scoreBoard.losses = 0;
    scoreBoard.wins = 0;
    scoreBoard.ties = 0;
    return;
  }

  else if (userChoice === randomChoice) {

    text = `A classic ${userChoice} ${randomChoice} stalemate.`;
    scoreBoard.ties = scoreBoard.ties + 1;
  } else if (userChoice === 'R' && randomChoice === 'S' || userChoice === 'P' && randomChoice === 'R' || userChoice === 'S' && randomChoice === 'P') {
    text = `You won!!`;
    scoreBoard.wins = scoreBoard.wins + 1;
  } else {
    text = `You lose, better luck next time.`;
    scoreBoard.losses = scoreBoard.losses + 1;
  }


  // ! uses switch case to iterate through responses and give custom dialog based off of each game outcomes.
  // switch (userChoice) {
  //   case 'R':
  //     if (randomChoice === 'S') {
  //       text = `${userChoice} crushes ${randomChoice}, you win!`;
  //       scoreBoard.wins = scoreBoard.wins + 1;
  //     } else if (randomChoice === 'P') {
  //       text = `${randomChoice} covers ${userChoice}, better luck next time!`;
  //       scoreBoard.losses = scoreBoard.losses + 1;
  //     }
  //     break;
  //   case 'P':
  //     if (randomChoice === 'R') {
  //       text = `${userChoice} covers ${randomChoice}, you win!`;
  //       scoreBoard.wins = scoreBoard.wins + 1;
  //     } else if (randomChoice === 'S') {
  //       text = `${randomChoice} cuts ${userChoice}, better luck next time!`;
  //       scoreBoard.losses = scoreBoard.losses + 1;
  //     }
  //     break;
  //   case 'S':
  //     if (randomChoice === 'P') {
  //       text = `${userChoice} cuts ${randomChoice}, you win!`;
  //       scoreBoard.wins = scoreBoard.wins + 1;
  //     } else if (randomChoice === 'R') {
  //       text = `${randomChoice} crushes ${userChoice}, better luck next time!`;
  //       scoreBoard.losses = scoreBoard.losses + 1;
  //     }
  //     break;
  //   default:
  //     text = `Sorry, '${userChoice}' is an invalid input.`;
  // }

  console.log(text);
  alert(`Computer chose: ${randomChoice} \nYou chose: ${userChoice}`)
  alert(`${text} \nWins: ${scoreBoard.wins} \nLosses: ${scoreBoard.losses} \nTies: ${scoreBoard.ties}`);
  if (confirm("Play again?") === true) {
    rockPaperScissors();
  } else {
    text = `Let's play again soon`;
    document.getElementById('result').innerHTML = text;
    console.log(text);
    alert(text);
    scoreBoard.losses = 0;
    scoreBoard.wins = 0;
    scoreBoard.ties = 0;
    return;
  }
}



// Run the game for the first time

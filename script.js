/*
The problem: Creating a code that will make the computer choose a hand from 
rock, paper and scissors to battle against the player, and thus defining a 
winner, with points and wins counting

The plan: For now, the user needs to input the hand through console command,
using only console for visual representations and values.

The Pseudocode:
1. Computer launches a random value between 0 and 1, representing each hand
2. User inputs value
2. Code compares user input value with computer randomly selected value
3. Console logs their values/hands and the winner
*/

function getComputerChoice(computerchoice) {
  computerchoice = Math.floor(Math.random() * 3);
  if (computerchoice === 0) {
    return "rock";
  } else if (computerchoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// For debugging
let computerhand = getComputerChoice();
console.log("Computer chose " + computerhand + "!");

// To make the code cleaner:

// Main function for each round
function playRound(playerSelection, computerSelection) {
  const winner =
    "You win! " +
    playerSelection +
    " " +
    "beats" +
    " " +
    computerSelection +
    "!";

  const loser =
    "You lose! " +
    computerSelection +
    " " +
    "beats" +
    " " +
    playerSelection +
    "!";
  if (playerSelection === computerSelection) {
    return "Tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return loser;
    } else {
      return winner;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return loser;
    } else {
      return winner;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return loser;
    } else {
      return winner;
    }
  } else {
    return "ERROR!";
  }
}

// To display and count their scores
let computerScore = 0;
let playerScore = 0;

document.querySelector(".computerScore").innerHTML += computerScore;
document.querySelector(".playerScore").innerHTML += playerScore;

// To setup each button
let playerChoice = "";

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
  playerChoice = "rock";
  let round = playRound(playerChoice, getComputerChoice());
  console.log(round);
  // A kinda complicated checker for wins and losses
  if (round[4] === "w") {
    return playerScore++;
  } else if (round[4] === "l") {
    return computerScore++;
  } else if (round[3] === "!") {
    return;
  } else {
    console.log("ERROR");
  }
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
  playerChoice = "paper";
  let round = playRound(playerChoice, getComputerChoice());
  console.log(round);
  if (round[4] === "w") {
    return playerScore++;
  } else if (round[4] === "l") {
    return computerScore++;
  } else if (round[3] === "!") {
    return;
  } else {
    console.log("ERROR");
  }
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
  playerChoice = "scissors";
  let round = playRound(playerChoice, getComputerChoice());
  console.log(round);
  if (round[4] === "w") {
    return playerScore++;
  } else if (round[4] === "l") {
    return computerScore++;
  } else if (round[3] === "!") {
    return;
  } else {
    console.log("ERROR");
  }
});

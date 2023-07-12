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

let computerhand = getComputerChoice();
console.log("Computer chose " + computerhand + "!");

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return (
        "You lose! " +
        computerSelection +
        " " +
        "beats" +
        " " +
        playerSelection +
        "!"
      );
    } else {
      return (
        "Computer loses! " +
        playerSelection +
        " " +
        "beats" +
        " " +
        computerSelection +
        "!"
      );
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return (
        "You lose! " +
        computerSelection +
        " " +
        "beats" +
        " " +
        playerSelection +
        "!"
      );
    } else {
      return (
        "Computer loses! " +
        playerSelection +
        " " +
        "beats" +
        " " +
        computerSelection +
        "!"
      );
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return (
        "You lose! " +
        computerSelection +
        " " +
        "beats" +
        " " +
        playerSelection +
        "!"
      );
    } else {
      return (
        "Computer loses! " +
        playerSelection +
        " " +
        "beats" +
        " " +
        computerSelection +
        "!"
      );
    }
  } else {
    return "ERROR!";
  }
}

let playerChoice = "";

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
  playerChoice = "rock";
  let round = playRound(playerChoice, getComputerChoice());
  console.log(round);
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
  playerChoice = "paper";
  let round = playRound(playerChoice, getComputerChoice());
  console.log(round);
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
  playerChoice = "scissors";
  let round = playRound(playerChoice, getComputerChoice());
  console.log(round);
});

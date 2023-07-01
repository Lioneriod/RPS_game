// A function round up a random number and then use it to choose the computer hand
function getcomputerchoice(){
    let hand = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    switch(hand){
        case 0:
            return("Rock");
        case 1:
            return("Paper");
        case 2:
            return("Scissors");
    }
}

// A function to format the player input
// and then compare it with the computer choice
// For starters, we try with ties
// Then, we work with either the player choosing the right hand or 
// the computer choosing the right hand
function playRound(playerselection, computerselection){
    playerselection = playerselection.charAt(0).toUpperCase() + 
    playerselection.slice(1);
    if(playerselection === computerselection){
        return("Tie");
    } else if (playerselection === "Rock"){
        if(computerselection === "Paper"){
            return("Computer won!")
        } else {
            return("Player won!")
        }
    } else if (playerselection === "Paper"){
        if(computerselection === "Scissors"){
            return("Computer won!");
        } else {
            return("Player won!")
        }
    } else if (playerselection === "Scissors"){
        if(computerselection === "Rock"){
            return("Computer won!");
        } else {
            return("Player won!")
        }
    }
}

function game(){
    
}

const playerselection = prompt("Choose your hand","hand");
const computerselection = getcomputerchoice();
const result = playRound(playerselection,computerselection)
// Then a log to show each hand, and another to show the result
console.log(`Player chose ${playerselection}`)
console.log(`Computer chose ${computerselection}`)
console.log(result);
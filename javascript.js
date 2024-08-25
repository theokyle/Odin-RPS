function getComputerChoice() {
    let choice = Math.floor((Math.random()*3)+1);
    switch (choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?");
}

let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase()=="rock") {
        switch (computerChoice) {
            case "Rock":
                console.log("Tie Game");
                break;
            case "Paper":
                console.log("You Lose! Paper beats Rock");
                computerScore += 1;
                return;
            case "Scissors":
                console.log("You Win! Rock beats Scissors");
                humanScore += 1;
                return;
        }
    }
    else if (humanChoice.toLowerCase()=="paper") {
        switch (computerChoice) {
            case "Paper":
                console.log("Tie Game");
                break;
            case "Scissors":
                console.log("You Lose! Scissors beats Paper");
                computerScore += 1;
                return;
            case "Rock":
                console.log("You Win! Paper beats Rock");
                humanScore += 1;
                return;
        }
    }
    else if (humanChoice.toLowerCase()=="scissors") {
        switch (computerChoice) {
            case "Scissors":
                console.log("Tie Game");
                break;
            case "Rock":
                console.log("You Lose! Rock beats Scissors");
                computerScore += 1;
                return;
            case "Paper":
                console.log("You Win! Scissors beats Paper");
                humanScore += 1;
                return;
        }
    }
    else {
        console.log("Invalid choice, try again!");
        return;
    }
}

function playGame() {
    
}
playRound(humanChoice, computerChoice);

console.log(humanScore);
console.log(computerScore);



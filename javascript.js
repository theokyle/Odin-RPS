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

let humanScore = 0;
let computerScore = 0;

const container = document.createElement("div");

const rock = document.createElement("button");
    rock.classList.add("rock");
    rock.textContent = "Rock";
    container.appendChild(rock);

const paper = document.createElement("button");
    paper.classList.add("paper");
    paper.textContent = "Paper";
    container.appendChild(paper);

const scissors = document.createElement("button");
    scissors.classList.add("scissors");
    scissors.textContent = "scissors";
    container.appendChild(scissors);

const body = document.querySelector("body");
body.appendChild(container);

rock.addEventListener("click", () => {
    playRound("rock");
})

paper.addEventListener("click", () => {
    playRound("paper");
})

scissors.addEventListener("click", () => {
    playRound("scissors");
})


function playRound(humanChoice) { 
    let computerChoice = getComputerChoice();
    
    if (humanChoice == "rock") {
        switch (computerChoice) {
            case "Rock":
                console.log("Tie Game");
                break;
            case "Paper":
                console.log("You Lose! Paper beats Rock");
                computerScore += 1;
                break;
            case "Scissors":
                console.log("You Win! Rock beats Scissors");
                humanScore += 1;
                break;
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
                break;
            case "Rock":
                console.log("You Win! Paper beats Rock");
                humanScore += 1;
                break;
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
                break;
            case "Paper":
                console.log("You Win! Scissors beats Paper");
                humanScore += 1;
                break;
        }
    }
    else {
        console.log("Invalid choice, try again!");
        return;
    }
}





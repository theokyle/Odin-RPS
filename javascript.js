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
let round = 0;

const selections = document.querySelector(".selections");
const results = document.querySelector(".results");
const finalScore = document.querySelector(".final-score")

const rock = document.createElement("button");
    rock.classList.add("rock");
    rock.textContent = "Rock";
    selections.appendChild(rock);

const paper = document.createElement("button");
    paper.classList.add("paper");
    paper.textContent = "Paper";
    selections.appendChild(paper);

const scissors = document.createElement("button");
    scissors.classList.add("scissors");
    scissors.textContent = "Scissors";
    selections.appendChild(scissors);

const ol = document.createElement("ol");
    results.appendChild(ol);


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
    let result = "";

    if (humanChoice == "rock") {
        switch (computerChoice) {
            case "Rock":
                result = "Tie Game";
                break;
            case "Paper":
                result = "You Lose! Paper beats Rock";
                computerScore += 1;
                break;
            case "Scissors":
                result = "You Win! Rock beats Scissors";
                humanScore += 1;
                break;
        }
    }
    else if (humanChoice == "paper") {
        switch (computerChoice) {
            case "Paper":
                result ="Tie Game";
                break;
            case "Scissors":
                result = "You Lose! Scissors beats Paper";
                computerScore += 1;
                break;
            case "Rock":
                result = "You Win! Paper beats Rock";
                humanScore += 1;
                break;
        }
    }
    else if (humanChoice.toLowerCase()=="scissors") {
        switch (computerChoice) {
            case "Scissors":
                result = "Tie Game";
                break;
            case "Rock":
                result = "You Lose! Rock beats Scissors";
                computerScore += 1;
                break;
            case "Paper":
                result = "You Win! Scissors beats Paper";
                humanScore += 1;
                break;
        }
    }

    let listItem = document.createElement("li");
    listItem.textContent = result + "" + "Score: " + humanScore.toString() + " - " + computerScore.toString();
    ol.appendChild(listItem);

    round += 1;

    if (round == 5) {
        if (humanScore > computerScore){
            finalScore.textContent = "You Win!";
        }
        else if (computerScore > humanScore){
            finalScore.textContent = "You lose!";
        }
        else {
            finalScore.textContent = "You tie!";
        }

        rock.remove();
        paper.remove();
        scissors.remove();
    }

}





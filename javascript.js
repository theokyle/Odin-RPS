function getComputerChoice() {
    let choice = Math.floor((Math.random()*3)+1);
    switch (choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}
let choice = getComputerChoice();
console.log(choice);

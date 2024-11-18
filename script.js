let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

function getHumanChoice() {;
    let choice = prompt("Your choice is...").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`Your choice is ${humanChoice}`);
    console.log(`Computer choice is ${computerChoice}`);
    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("You lose! Paper beats rock");
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("You lose! Scissors beat paper");

    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("You lose! Rock beats scissors");

    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("You win! Rock beats scissors");

    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("You win! Paper beats rock");

    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("You win! Scissors beat paper");

    }
    else {
        console.log("Draw!");
    }

    console.log(`${humanScore} : ${computerScore}`);

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
        
    }

    if (humanScore > computerScore) {
        alert("You win!");
    }
    else {
        alert("You lose!");
    }

}

playGame();
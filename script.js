let humanScore = 0;
let computerScore = 0;
let resultBlock = document.querySelector(".result");

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

function getHumanChoice() {;
    let choice = prompt("Your choice is...").toLowerCase();
    return choice;
}

document.querySelector(".rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})

document.querySelector(".paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})

document.querySelector(".scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})





function playRound(humanChoice, computerChoice) {

    let showHumanChoice = document.createElement("p");
    showHumanChoice.textContent = `Your choice is ${humanChoice}`;

    let showComputerChoice = document.createElement("p");
    showComputerChoice.textContent = `Computer choice is ${computerChoice}`;

    resultBlock.appendChild(showHumanChoice);
    resultBlock.appendChild(showComputerChoice);

    let showWinner = document.createElement("p");
    resultBlock.appendChild(showWinner);

    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        showWinner.innerHTML = "You lose! Paper beats rock<br>";

    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        showWinner.innerHTML = "You lose! Scissors beat paper<br>";

    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        showWinner.innerHTML = "You lose! Rock beats scissors<br>";

    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        showWinner.innerHTML = "You win! Rock beats scissors<br>";

    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        showWinner.innerHTML = "You win! Paper beats rock<br>";

    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        showWinner.innerHTML = "You win! Scissors beat paper<br>";

    }
    else {
        showWinner.innerHTML = "Draw!<br>"
    }

    let showScore = document.createElement("p");
    showScore.textContent = `${humanScore} : ${computerScore}`;
    resultBlock.appendChild(showScore);

    if (humanScore == 5) {
        const congrats = document.createElement("p");
        congrats.textContent = "Congratulations, human! You win!";
        resultBlock.appendChild(congrats);
        humanScore = 0;
        computerScore = 0;
        alert("New game!");
        resultBlock.children = "";
    }
    if (computerScore == 5) {
        const congrats = document.createElement("p");
        congrats.textContent = "I win, hahaha!";
        resultBlock.appendChild(congrats);
        humanScore = 0;
        computerScore = 0;
        alert("New game!");
        resultBlock.innerHTML = "";
    }

}

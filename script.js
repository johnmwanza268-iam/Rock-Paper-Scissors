
let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    
    if(compChoice === 1) return "rock"
    else if(compChoice === 2) return "paper"
    else return "scissors"
}

function getHumanChoice () {
let choice = prompt("Enter a number between 1 and 3: ");

    choice = Number(choice)

    if (choice === 1) {
        return "rock"
    }
    else if (choice === 2) {
        return "paper"
    }
    else if (choice === 3) return "scissors"
}

function playRound(humanChoice,computerChoice) {
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    
}

function playGame () {
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection,computerSelection)

}

playGame()
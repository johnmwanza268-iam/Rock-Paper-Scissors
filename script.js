
let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const resultDisplay = document.querySelector('#result-display')

const hScore = document.querySelector('#hScore')
const cScore = document.querySelector('#cScore')

const winner = document.createElement('p')
const body = document.querySelector('#b')
function getComputerChoice () {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    
    if(compChoice === 1) return "rock"
    else if(compChoice === 2) return "paper"
    else return "scissors"
}

function playRound(humanChoice,computerChoice) {

        
        if (humanChoice === computerChoice) {
            resultDisplay.textContent = "It's a tie!"
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            resultDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            hScore.textContent = humanScore;    
        } else {
            computerScore++;
            resultDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            cScore.textContent = computerScore;
        }   

        if(humanScore === 5) {
        winner.textContent = "You win!"
        body.append(winner)
        }else if (computerScore ===5){
        winner.textContent = "The computer won!"
        body.append(winner)
      }
    
}

rock.addEventListener('click',() => playRound('rock',getComputerChoice()))
paper.addEventListener('click',() => playRound('paper',getComputerChoice()))
scissors.addEventListener('click',() => playRound('scissors',getComputerChoice()))
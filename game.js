//const { createElement } = require("react");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const yourChoice = prompt("Player: What is your choice? (rock, paper, scissors)");
  return yourChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie");
    return "tie";
  } else if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "rock" && computerChoice === "scissors")
  ) {
    console.log(`Human wins: ${humanChoice} beats ${computerChoice}`);
    return "human";
  } else {
    console.log(`Computer wins: ${computerChoice} beats ${humanChoice}`);
    return "computer";
  }
}
/*
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }

    console.log(`Score after round ${i + 1}: Human ${humanScore} - Computer ${computerScore}`);
  }
  console.log("Final score:");
  console.log(`Human: ${humanScore} - Computer: ${computerScore}`);
  }
playGame();
*/
let paperBtn = document.createElement("button");
paperBtn.innerText = "Paper";
paperBtn.addEventListener("click", () => { 
    const humanChoice = "Paper";
    const computerChoice = getComputerChoice();
    console.log("Paper button clicked"); 
    playRound(humanChoice, computerChoice);
});

let rockBtn = document.createElement("button");
rockBtn.innerText = "Rock";
rockBtn.addEventListener("click", () => { 
      const humanChoice = "Rock";
      const computerChoice = getComputerChoice();
      console.log("Rock button clicked"); 
      playRound(humanChoice, computerChoice);
});

let scissorsBtn = document.createElement("button");
scissorsBtn.innerText = "Scissors";  
scissorsBtn.addEventListener("click", () => { 
    const humanChoice = "Scissors";
    const computerChoice = getComputerChoice();
    console.log("Scissors button clicked"); 
    playRound(humanChoice, computerChoice);
});
document.body.appendChild(paperBtn);
document.body.appendChild(rockBtn);
document.body.appendChild(scissorsBtn);

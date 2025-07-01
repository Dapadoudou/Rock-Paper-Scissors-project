//const { createElement } = require("react");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const humanChoice = "";
  If (rockBtn.clicked) {
  humanChoice = "rock";
} else if (paperBtn.clicked) {
  humanChoice = "paper";
} else (scissorsBtn.clicked) {
  humanChoice = "scissors";
}
  return humanChoice.toLowerCase();
}
  

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
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


function displayResult(result) {
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
 if (humanScore === 5 || computerScore === 5) {
  console.log("Game ended");
 }
 {
  console.log("Final score:");
  console.log(`Human: ${humanScore} - Computer: ${computerScore}`);
  };


let paperBtn = document.createElement("button");
paperBtn.innerText = "Paper";
paperBtn.addEventListener("click", () => { 
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();
    console.log("Paper button clicked"); 
    playRound(humanChoice, computerChoice);
});

let rockBtn = document.createElement("button");
rockBtn.innerText = "Rock";
rockBtn.addEventListener("click", () => { 
      const humanChoice = "rock";
      const computerChoice = getComputerChoice();
      console.log("Rock button clicked"); 
      playRound(humanChoice, computerChoice);
});

let scissorsBtn = document.createElement("button");
scissorsBtn.innerText = "Scissors";  
scissorsBtn.addEventListener("click", () => { 
    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    console.log("Scissors button clicked"); 
    playRound(humanChoice, computerChoice);
});
document.body.appendChild(paperBtn);
document.body.appendChild(rockBtn);
document.body.appendChild(scissorsBtn);

let results = document.createElement("div");
document.body.appendChild(results);
results.innerText = "Results will be displayed here";



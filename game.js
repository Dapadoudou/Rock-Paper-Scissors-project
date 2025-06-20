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
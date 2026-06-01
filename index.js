//function to get computer choice
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) return "Rock";
  if (num === 1) return "Paper";
  return "Scissors";
}
console.log(getComputerChoice());

//function to get human choice
function getHumanChoice() {
  let userChoice = prompt("enter your choice");
  return userChoice;
}
console.log(getHumanChoice());

//player score on the global scope
let humanScore = 0;
let computerScore = 0;

//play game function
function playGame() {
  function playRound(humanChoice, computerChoice) {
    //convert human choice to case insensitive format
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    //if else if statement to log a winner and also incrementing each round.
    if (humanChoice === computerChoice) {
      console.log("it's a draw");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("you win rock beat sicssors");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("you win scissors beat paper");
      humanScore++;
    } else if (humanChoice === "paper " && computerChoice === "rock") {
      console.log("you win paper beat rock");
      humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
      console.log("computer win rock beat scissors");
      computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      console.log("computer win scissors beat paper");
      computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      console.log("computer win paper beat rock");
      computerScore++;
    }
  }

  //playing 5 round
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  //view the winner
  if (humanScore > computerScore) {
    console.log("you win the game");
  } else if (computerScore > humanScore) {
    console.log("computer win the game!");
  } else {
    console.log("the game is a draw");
  }
}

playGame();

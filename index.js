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

  if (userChoice === "Rock") {
    return "Rock";
  } else if (userChoice === "Paper") {
    return "Paper";
  } else if (userChoice === "Scissors") {
    return "Scissors";
  }
}
console.log(getHumanChoice());

//play game function
function playGame() {
  //player score on the global scope
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    //convert human choice to case insensitive format
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

    //if else if statement to log a winner and also incrementing each round.
    if (human === computer) {
      console.log("it's a draw");
    } else if (human === "rock" && computer === "Scissors") {
      console.log("you win rock beat sicssors");
      humanScore++;
    } else if (human === "scissors" && computer === "paper") {
      console.log("you win scissors beat paper");
      humanScore++;
    } else if (human === "paper " && computer === "rock") {
      console.log("you win paper beat rock");
      humanScore++;
    } else if (computer === "rock" && human === "scissors") {
      console.log("computer win rock beat scissors");
      computerScore++;
    } else if (computer === "scissors" && human === "paper") {
      console.log("computer win scissors beat paper");
      computerScore++;
    } else if (computer === "paper" && human === "rock") {
      console.log("computer win paper beat rock");
      computerScore++;
    }
  }

//playing round
  playRound(getHumanChoice,getComputerChoice);
  playRound(getHumanChoice,getComputerChoice);
  playRound(getHumanChoice,getComputerChoice);
  playRound(getHumanChoice,getComputerChoice);
  playRound(getHumanChoice,getComputerChoice);

  //view both score
}

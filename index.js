// get elements
let computerScoreDisplay = document.getElementById("computerScore");
let humanScoreDisplay = document.getElementById("humanScore");
let messageDisplay = document.getElementById("message");

//player score on the global scope
let humanScore = 0;
let computerScore = 0;

//get buttons
let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");

//function to get computer choice
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) return "rock";
  if (num === 1) return "paper";
  return "scissors";
}

//play round function
function playRound(humanChoice) {
  // Check if game is already over
  if (humanScore === 5 || computerScore === 5) {
    return;
  }

  let computerChoice = getComputerChoice();
  
  //show choice
  messageDisplay.textContent = "You chose: " + humanChoice + " | Computer chose: " + computerChoice;

  //if else if statement to log a winner and also incrementing each round.
  if (humanChoice === computerChoice) {
    messageDisplay.textContent = "It's a draw! You both chose " + humanChoice;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    messageDisplay.textContent = "You win! Rock beats scissors";
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    messageDisplay.textContent = "You win! Scissors beats paper";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") { // Fixed: removed space
    messageDisplay.textContent = "You win! Paper beats rock";
    humanScore++;
  } else {
    messageDisplay.textContent = "Computer wins! " + computerChoice + " beats " + humanChoice;
    computerScore++;
  }

  //update score
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;

  // Check if someone reached 5 points
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      messageDisplay.textContent = " YOU WIN THE GAME! ";
    } else {
      messageDisplay.textContent = "COMPUTER WINS THE GAME! ";
    }
    
    // Disable buttons when game ends
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}

//button clicks
rockBtn.addEventListener("click", function () {
  playRound("rock");
});
paperBtn.addEventListener("click", function () {
  playRound("paper");
});
scissorsBtn.addEventListener("click", function () {
  playRound("scissors");
});
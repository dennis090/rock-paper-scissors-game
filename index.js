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
  }

  if (userChoice === "Paper") {
    return "Paper";
  }

  if (userChoice === "Scissors") {
    return "Scissors";
  }
}
console.log(getHumanChoice());


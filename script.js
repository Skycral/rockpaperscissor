let humanScore = 0;
let computerScore = 0;


const div = document.querySelector("div");
const p = document.createElement("p");
const p2 = document.createElement("p");


function getComputerChoice() {
  let rock = "rock";
  let paper = "paper";
  let scissor = "scissor";

  let randomly = Math.floor(Math.random() * 100);
  console.log(randomly);

  if(randomly <= 33){
    return rock;
  } else if (randomly > 33 && randomly <= 66) {
    return paper;
  } else {
    return scissor;
  }
}

function playRound(humanChoice, computerChoice) {

  p2.textContent = "";

  if (humanChoice === "rock" && computerChoice === "rock" || humanChoice === "scissor" && computerChoice === "scissor" || humanChoice === "paper" && computerChoice === "paper") {
    p2.textContent = "This is a draw, no points awarded.";
  
  } else if (humanChoice === "rock" && computerChoice === "scissor" || humanChoice === "scissor" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
      humanScore += 1;
  
  } else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissor" || humanChoice === "scissor" && computerChoice === "rock") {
      computerScore += 1;
  }

  if (computerScore == 5) {
    p.textContent = `Score is: User ${humanScore} points | Computer ${computerScore} points`;
    p2.textContent = "Sorry but no champagne for you, the computer outsmarted you.";
  
  } else if (humanScore == 5){
    p.textContent = `Score is: User ${humanScore} points | Computer ${computerScore} points`;
    p2.textContent = "You did it, you overcame the machine and won!!";
  
  } else {
    p.textContent = `Score is: User ${humanScore} points | Computer ${computerScore} points`;
  }


  
  div.appendChild(p);
  div.appendChild(p2);
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const startover = document.querySelector(".startover");

rock.addEventListener("click", () => {
  if (humanScore == 5 || computerScore == 5) {
    alert("The game is finished. Please press START OVER to continue playing.")
  } else {
    playRound("rock", getComputerChoice());
  }

});

paper.addEventListener("click", () => {
  if (humanScore == 5 || computerScore == 5) {
    alert("The game is finished. Please press START OVER to continue playing.")
  } else {
  playRound("paper", getComputerChoice());
  }
});

scissor.addEventListener("click", () => {
  if (humanScore == 5 || computerScore == 5) {
    alert("The game is finished. Please press START OVER to continue playing.")
  } else {
  playRound("scissor", getComputerChoice());
  }
});

startover.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;

  p.textContent = "";
  p2.textContent = "";

  div.appendChild(p);
  div.appendChild(p2);
});
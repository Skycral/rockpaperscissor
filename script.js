console.log("Hello World");


let humanScore = 0;
let computerScore = 0;
let numGames = 5;

const div = document.querySelector("div");
const p = document.createElement("p");


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
  if (humanChoice === "rock" && computerChoice === "rock" || humanChoice === "scissor" && computerChoice === "scissor" || humanChoice === "paper" && computerChoice === "paper") {
    console.log("This is a draw, no points awarded.");
  
  } else if (humanChoice === "rock" && computerChoice === "scissor" || humanChoice === "scissor" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
      humanScore += 1;
  
  } else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissor" || humanChoice === "scissor" && computerChoice === "rock") {
      computerScore += 1;
  }

  p.textContent = `Score is: User ${humanScore} points | Computer ${computerScore} points`;
  div.appendChild(p);
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissor.addEventListener("click", () => {
  playRound("scissor", getComputerChoice());
});

// if (humanSelection === null) {
//   console.log(`Score ends: User ${humanScore} points | Computer ${computerScore} points`);
// }
// console.log(`Score is: User ${humanScore} points | Computer ${computerScore} points`);



// if (humanScore === computerScore) {
//   console.log("No winner this time - it ends in a draw.");
// } else if (humanScore > computerScore){
//   console.log("You did it, you overcame the machine and won!!");
// } else {
//   console.log("Sorry but no champagne for you, the computer outsmarted you.");
// }

// function playGame() {
  
  


//   function getHumanChoice(hc) {
    


    
//     let humChoice = hc;

//     if (humChoice === null) {
//       alert("Too bad you didn't want to participate in our game.");
//       return null;
  
//     } else if (humChoice.toLowerCase() === "scissor") {
//         console.log(scissor);
//         return scissor;
//     } else if (humChoice.toLowerCase() === "paper") {
//         console.log("paper");
//         return paper;
    
//     } else if (humChoice.toLowerCase() === "rock"){
//         console.log(rock);
//         return rock;
    
//     } else {
//         alert("That wasn't any valid choice, please check your spelling.")
//         return getHumanChoice();
//     }
//   }

  
//   const humanSelection = getHumanChoice();
//   playRound(humanSelection, computerSelection);
//   console.log(humanSelection);
  
// }

// playGame();
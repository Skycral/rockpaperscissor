console.log("Hello World");

// Step Two 
/*
Create function getComputerChoice - will randomly choose one of three options
Create three variables holding rock, scissor, paper
Create algo that have a 33.3% chance for each variable to be returned
- 0-0.33 Rock
- 0.34 - 066 Paper
- 0.67 - 0.99 Scissor
Use if else to define the return

*/

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

//getComputerChoice();
// console.log(getComputerChoice());

/*Step 3
Write fn getHumanChoice where user can choose btw rock, paper, scissor
add a prompt where user writes choice - if no valid input, ask again
add variables to hold the choice
(add a multi choice to avoid any wrong doing?)
*/

function getHumanChoice() {
  let rock = "rock";
  let paper = "paper";
  let scissor = "scissor";
  
  let humChoice = prompt("Let's play rock, paper, scissor and see if you win!");

  // let lowHC = humChoice.toLowerCase();

  // switch (lowHC) {
  //   case null:
  //     alert("Too bad you didn't want to participate in our game.")
  //     break;

  //   case "rock":
  //     console.log(rock);
  //     return rock;

  //   case "scissor":
  //     return scissor;
    
  //   case "paper":
  //     return paper;

  //   default:
  //     alert("That wasn't any valid choice, please check your spelling.")
  //     return getHumanChoice();
  // }

  if (humChoice === null) {
    alert("Too bad you didn't want to participate in our game.")

  } else if (humChoice.toLowerCase() === "scissor") {
      console.log(scissor);
      return scissor;
  } else if (humChoice.toLowerCase() === "paper") {
      console.log("paper");
      return paper;
  
  } else if (humChoice.toLowerCase() === "rock"){
      console.log(rock);
      return rock;
  
  } else {
      alert("That wasn't any valid choice, please check your spelling.")
      return getHumanChoice();
  }
}

//getHumanChoice();

/*
Step 4
create two variables to hold pc and human scores
they should both start at 0
*/

let humanScore = 0;
let computerScore = 0;

/*
Step 5
create a function playRound to play a round of the game
define two params to take in the choices of pc and user 
make the input choice case insensitive - use lowercase method
use logic to understand who wins in each round - rock beats scissor
scissor beats paper
paper beats rock
if logic where each one gives a point to the score 
and writes out the winner in the log
*/


function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "rock" || humanChoice === "scissor" && computerChoice === "scissor" || humanChoice === "paper" && computerChoice === "paper") {
    console.log("This is a draw, no points awarded.");
    console.log(`Score is: User ${humanScore} points | Computer ${computerScore} points`)
  
  } else if (humanChoice === "rock" && computerChoice === "scissor" || humanChoice === "scissor" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
      console.log("Victory!!");
      humanScore += 1;
      console.log(`Score is: User ${humanScore} points | Computer ${computerScore} points`)
  
    } else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissor" || humanChoice === "scissor" && computerChoice === "rock") {
      console.log("You lose..");
      computerScore += 1;
      console.log(`Score is: User ${humanScore} points | Computer ${computerScore} points`)
  }


}

const humanSelection = getHumanChoice();

const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
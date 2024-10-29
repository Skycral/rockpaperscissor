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



//getComputerChoice();
// console.log(getComputerChoice());

/*Step 3
Write fn getHumanChoice where user can choose btw rock, paper, scissor
add a prompt where user writes choice - if no valid input, ask again
add variables to hold the choice
(add a multi choice to avoid any wrong doing?)
*/



//getHumanChoice();

/*
Step 4
create two variables to hold pc and human scores
they should both start at 0
*/

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

/*
Step 6
create a fn playGame to play 5 rounds
playround should be inside this function and be repeated 5 times, with loop?
need to get new choices from the computer each time
return random value and then chose the best fit in this fn?
*/


let humanScore = 0;
let computerScore = 0;

let numGames = 5;


function playGame() {
  

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
      alert("Too bad you didn't want to participate in our game.");
      return null;
  
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

  
  
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock" || humanChoice === "scissor" && computerChoice === "scissor" || humanChoice === "paper" && computerChoice === "paper") {
      console.log("This is a draw, no points awarded.");
    
    } else if (humanChoice === "rock" && computerChoice === "scissor" || humanChoice === "scissor" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1;
    
    } else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissor" || humanChoice === "scissor" && computerChoice === "rock") {
        computerScore += 1;
    }
  
  
  }

  for (let index = 0; index < numGames; index++) {
    const computerSelection = getComputerChoice(); 
    const humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    console.log(humanSelection);
    if (humanSelection === null) {
      console.log(`Score ends: User ${humanScore} points | Computer ${computerScore} points`);
      break;
    }
    console.log(`Score is: User ${humanScore} points | Computer ${computerScore} points`);
  }
  
  if (humanScore === computerScore) {
    console.log("No winner this time - it ends in a draw.");
  } else if (humanScore > computerScore){
    console.log("You did it, you overcame the machine and won!!");
  } else {
    console.log("Sorry but no champagne for you, the computer outsmarted you.");
  }
  

}

playGame();
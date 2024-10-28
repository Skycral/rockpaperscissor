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
  // console.log(randomly);

  if(randomly <= 33){
    return rock;
  } else if (randomly > 33 && randomly <= 66) {
    return paper;
  } else {
    return scissor;
  }
}

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

  switch (humChoice) {
    case "rock":
      console.log(rock);
      return rock;

    case "scissor":
      return scissor;
    
    case "paper":
      return paper;
    
    case null:
      alert("Too bad you didn't want to participate in our game.")
      break;

    default:
      alert("That wasn't any valid choice, please check your spelling.")
      return getHumanChoice();
    }

  // if (humChoice === "rock"){
  //     console.log(rock);
  //     return rock;
  // } else if (humChoice === "scissor") {
  //     console.log(scissor);
  //     return scissor;
  // } else if (humChoice === "paper") {
  //     console.log("paper");
  //     return paper;
  
  // } else if (humChoice === null) {
  //     alert("Too bad you didn't want to participate in our game.")
  
  // } else {
  //     alert("That wasn't any valid choice, please check your spelling.")
  //     return getHumanChoice();
  // }
}

getHumanChoice();
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

  let randomly = Math.floor(Math.random() * 100)
  console.log(randomly);

  if(randomly <= 33){
    return rock;
  } else if (randomly > 33 && randomly <= 66) {
    return paper;
  } else {
    return scissor;
  }
}

console.log(getComputerChoice());

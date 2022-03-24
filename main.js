'use strict';

{
  let computerPoint = 0;
  let playerPoint = 0;

  let playerSelection;
  let computerSelection;

  function computerPlay() {
    let rate = Math.random();
    if(rate < 0.33) {
      return "rock";
    } else if (rate < 0.66) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      console.log("Draw!");
    } else {
      if 
      ((playerSelection == "rock" && computerSelection == "scissors") || 
       (playerSelection == "paper" && computerSelection == "rock") ||
       (playerSelection == "scissors" && computerSelection == "paper")) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
        return playerPoint++;
      } else if 
      ((playerSelection == "rock" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection== "rock")) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`)
        return computerPoint++;
      } 
      
    } 

  }

  function game() {
    for (let i = 0; i < 5; i++) {
      let playerInput = prompt("Input Rock, Paper, or Scissors.", "Rock").toLowerCase();
      let computer = computerPlay();

      console.log(`Game${i + 1}`);
      console.log(`Player Selection: ${playerInput}`);
      console.log(`Computer Selection: ${computer}`);
      playRound(playerInput, computer);
    }
    
  }
  
  game();
  console.log("Results");
  console.log(`Player Point: ${playerPoint}, Computer Point: ${computerPoint}`);
  
  function result() {
    if (playerPoint == computerPoint) {
      console.log("Draw!");
    } else if (playerPoint > computerPoint) {
      console.log("You win!");
    } else {
      console.log("Computer win!");
    }
  }

  result();
}
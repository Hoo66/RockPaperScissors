'use strict';

{
  let computerPoint = 0;
  let playerPoint = 0;
  let roundNumber = 0;
  let playerSelection = "";

  const buttons = document.querySelectorAll('.playerSelection');
  
  buttons.forEach(pSelection => {
    pSelection.addEventListener('click', () => {
      playerSelection = pSelection.id;
      return playerSelection;
      console.log(playerSelection);
      // return playerSelection.id;
      // computerSelection();

      return computerSelection();
      playRound();
    });
  });
  
  
  function computerSelection() {
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
    const result = document.querySelector('.result');
    const points = document.querySelector('.points');

    console.log(`Player selected ${playerSelection}, Computer selected ${computerSelection}`);

    if (playerSelection == computerSelection) {
      result.textContent = 'Draw';
      console.log('Draw');
    } else {
      if 
      ((playerSelection == "rock" && computerSelection == "scissors") || 
       (playerSelection == "paper" && computerSelection == "rock") ||
       (playerSelection == "scissors" && computerSelection == "paper")) {
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        return playerPoint++;
      } else if 
      ((playerSelection == "rock" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection== "rock")) {
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        return computerPoint++;
      }       

      points.textContent = `Player Points: ${playerPoint}\nComputer Points: ${computerPoint}`;
    } 

    roundNumber ++;
  }

  // function game() {
  //   playRound();

  //   console.log(`Player Point: ${playerPoint}`);
  //   console.log(`Computer Point: ${computerPoint}`);
    
  // }

  // game();
 

}
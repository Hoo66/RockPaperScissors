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
      
      playRound(playerSelection, computerSelection());
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

  const selection = document.querySelector('.selection');
  const result = document.querySelector('.result');
  const points = document.querySelector('.points');

  function playRound(playerSelection, computerSelection) {

    selection.textContent = `Player selected ${playerSelection}, Computer selected ${computerSelection}`;

    if (playerSelection == computerSelection) {
      result.textContent = 'Draw';
    } else {
      if 
      ((playerSelection == "rock" && computerSelection == "scissors") || 
       (playerSelection == "paper" && computerSelection == "rock") ||
       (playerSelection == "scissors" && computerSelection == "paper")) {
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        playerPoint++;
      } else if 
      ((playerSelection == "rock" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection== "rock")) {
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        computerPoint++;
      }       

    } 
    countPoints();
    finalResult();
  }

  function countPoints() {
    const points = document.querySelector('.points');
    points.textContent = `Player Points: ${playerPoint} ComputerPoints: ${computerPoint}`;
  }

  function finalResult() {

    if (playerPoint == 5 || computerPoint == 5) {
      const playerSelections = document.querySelector('.playerSelections');
      playerSelections.classList.add('hide');
      selection.classList.add('hide');
      points.classList.add('hide');
      
      
      if (playerPoint > computerPoint) {
        result.textContent = `You Win!`;
      } else {
        result.textContent = 'Computer Wins!';
      }
      result.appendChild(finalResult);
    }
  }
 
  const reset = document.querySelector('.reset');
  const button = document.createElement('button');
  // resetbutton.onclick = "refresh";
  reset.appendChild('button');

}
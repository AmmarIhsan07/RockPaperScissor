  let wins = 0;
  let losses = 0;
  let ties = 0;
  
  function playGame(playerMove) {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissor';
    }

    let result = '';

    if (playerMove === computerMove) {
      result = 'Tie';
      ties++;
    } else if (
      (playerMove === 'rock' && computerMove === 'scissor') ||
      (playerMove === 'paper' && computerMove === 'rock') ||
      (playerMove === 'scissor' && computerMove === 'paper')
    ) {
      result = 'You win';
      wins++;
    } else {
      result = 'You lose';
      losses++;
    }
    
    updateScore();
    console.log(computerMove);
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
  }

  function updateScore() {
    document.getElementById('wins').textContent = `Wins: ${wins}`;
    document.getElementById('losses').textContent = `Losses: ${losses}`;
    document.getElementById('ties').textContent = `Ties: ${ties}`;
  }

  function resetScore() {
    wins = 0;
    losses = 0;
    ties = 0;
    updateScore();
  }
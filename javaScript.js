let computerScore = 0;
let playerScore = 0;
function getComputerChoice() {
  const ChoiceNumber = Math.floor(Math.random() * 3);
  const choicesNames = ['Rock', 'Paper', 'Scissors'];
  return choicesNames[ChoiceNumber];
}
function playRound(playerSelection, computerSelection) {
  console.log(`${playerSelection} VS. ${computerSelection}`);
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      return console.log("It's a Tie!");
    } else if (computerSelection === 'paper') {
      computerScore++;
      return console.log('You lose! Paper beats Rock');
    } else if (computerSelection === 'scissors') {
      playerScore++;
      return console.log('You win! Rock beats Scissors');
    }
    return 'Incorrect computer Selection!';
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      playerScore++;
      return console.log('You win! Paper beats Rock');
    } else if (computerSelection === 'paper') {
      return console.log("It's a Tie!");
    } else if (computerSelection === 'scissors') {
      computerScore++;
      return console.log('You lose! Scissors beats Paper');
    }
    return 'Incorrect computer Selection!';
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      computerScore++;
      return console.log('You lose! Rock beats Scissors');
    } else if (computerSelection === 'paper') {
      playerScore++;
      return console.log('You win! Scissors beats Paper');
    } else if (computerSelection === 'scissors') {
      return console.log("It's a Tie!");
    }
    return 'Incorrect computer Selection!';
  }
  return 'Incorrect player Selection!';
}
function game() {
  while (playerScore < 5 && computerScore < 5) {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt('Choose: Rock, Paper, Scissors.');
    playRound(computerChoice, playerChoice);
    console.log(`Score:\nPlayer1: ${playerScore}\nComputer: ${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log('player wins!');
  } else {
    console.log('computer wins!');
  }
}
game();
// console.log(playRound('Scissors', 'Scissors'));
// console.log(playRound('SciSSors', 'ROCK'));
// console.log(playRound('sCISSORS', 'paPeR'));
// console.log(playRound('rOCK', 'scissors'));
// console.log(playRound('ROCk', 'Scissors'));
// console.log(playRound('ROCK', 'RoCk'));
// console.log(playRound('PaPeR', 'scissors'));
// console.log(playRound('Paper', 'Rock'));
// console.log(playRound('paper', 'PAPER'));

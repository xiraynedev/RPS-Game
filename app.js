(function (InitApp) {
  // create console.log shorthand for testing purposes
  const l = (value) => console.log(value);

  // create game variables
  const ROCK = 'ROCK';
  const PAPER = 'PAPER';
  const SCISSORS = 'SCISSORS';
  const DEFAULT_CHOICE = 'ROCK';
  const RESULT_DRAW = 'DRAW';
  const RESULT_PLAYER_WINS = 'PLAYER_WINS';
  const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
  let gameIsRunning = false;

  // define functions to play game
  const startGame = () => {
    if (gameIsRunning) {
      return;
    }
    gameIsRunning = true;
    console.log(InitApp);
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    let message = `You picked ${playerChoice}, computer picked ${computerChoice}. `;
    if (winner === RESULT_DRAW) {
      message += 'The result was a draw!';
    } else if (winner === RESULT_PLAYER_WINS) {
      message += 'The player has won!';
    } else {
      message += 'The computer has won!';
    }
    l(message);
    gameIsRunning = false;
  };

  const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
      return ROCK;
    } else if (randomValue < 0.67) {
      return PAPER;
    } else {
      return SCISSORS;
    }
  };

  const getPlayerChoice = () => {
    let selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, '');

    if (selection === null) {
      alert(`Invalid choice! We chose ${DEFAULT_CHOICE} for you!`);
      return DEFAULT_CHOICE;
    }

    selection = selection.toUpperCase();

    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
      alert(`Invalid choice! We chose ${DEFAULT_CHOICE} for you!`);
      return DEFAULT_CHOICE;
    }
    return selection;
  };

  const getWinner = (computerChoice, playerChoice) => {
    if (computerChoice === playerChoice) {
      return RESULT_DRAW;
    } else if (
      (computerChoice === ROCK && playerChoice === PAPER) ||
      (computerChoice === PAPER && playerChoice === SCISSORS) ||
      (computerChoice === SCISSORS && playerChoice === ROCK)
    ) {
      return RESULT_PLAYER_WINS;
    } else {
      return RESULT_COMPUTER_WINS;
    }
  };

  // create references to the dom elements
  const startGameBtn = document.querySelector('#start-game-btn');

  // add event listeners
  startGameBtn.addEventListener('click', startGame);
})('Initializing app now...');

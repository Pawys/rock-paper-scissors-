let gameNumber = 0;

const body = document.querySelector("body");
const container = document.querySelector(".container");
const gameScore = document.querySelector(".gameScore");
const boxes = document.querySelectorAll(".box");
const containers = document.querySelectorAll(".container");
const pScore = document.querySelector(".pScore");
const cScore = document.querySelector(".cScore");
const pChoiceBox = document.querySelector(".pChoice");
const cChoiceBox = document.querySelector(".cChoice");
const nextRoundBtn = document.querySelector(".button");
const gameEndContainer = document.querySelector(".gameEnd");

const playerScoreDiv = document.createElement("div");
playerScoreDiv.setAttribute("id", "score");

const computerScoreDiv = document.createElement("div");
computerScoreDiv.setAttribute("id", "score");

const roundScore = document.querySelector(".roundScore");
roundScore.setAttribute("id", "win");


function getPlayerChoice(element, text) {
  for (let box of boxes) {
    box.style.borderColor = "";
  }
  pChoiceBox.style.borderColor = "#6272a4";
  cChoiceBox.style.borderColor = "#ff5555";
  element.style.borderColor = "#f8f8f2";
  if (text === "rock") {
    pChoiceBox.textContent = "🪨";
  } else if (text === "paper") {
    pChoiceBox.textContent = "📜";
  } else {
    pChoiceBox.textContent = "✂️";
  }
  game(text);
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3); //Get a number from 0 to 2
  switch (
    randomNumber // Return computer choices based on the numbers
  ) {
    case 0:
      cChoiceBox.textContent = "🪨";
      return "rock";
      break;
    case 1:
      cChoiceBox.textContent = "📜";
      return "paper";
      break;
    case 2:
      cChoiceBox.textContent = "✂️";
      return "scissors";
      break;
  }
}

function playRound(playerChoice, computerChoice) {
  switch (computerChoice) {
    case "rock":
      switch (playerChoice) {
        case "rock":
          roundScore.textContent = "It's a tie!";
          return "tie";
          break;
        case "paper":
          roundScore.textContent = "You win! Paper beats rock";
          return "win";
          break;
        case "scissors":
          roundScore.textContent = "You lose! Rock beats scissors";
          return "lose";
          break;
      }
      break;
    case "paper":
      switch (playerChoice) {
        case "rock":
          roundScore.textContent = "You lose! Paper beats rock";
          return "lose";
          break;
        case "paper":
          roundScore.textContent = "It's a tie!";
          return "tie";
          break;
        case "scissors":
          roundScore.textContent = "You win! Scissors beat paper";
          return "win";
          break;
      }
      break;
    case "scissors":
      switch (playerChoice) {
        case "rock":
          roundScore.textContent = "You win! Rock beats scissors";
          return "win";
          break;
        case "paper":
          roundScore.textContent = "You lose! Scissors beat paper";
          return "lose";
          break;
        case "scissors":
          roundScore.textContent = "It's a tie!";
          return "tie";
          break;
      }
      break;
  }
}

let playerScore = 0;
let computerScore = 0;

function game(playerChoice) {
  let computerChoice = getComputerChoice();
  let result = playRound(playerChoice, computerChoice); // Get the result from the playRound function
  gameNumber++;

  if (result === "win") {
    playerScore++;
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
  } else if (result === "lose") {
    computerScore++;
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
  } else {
    playerScore++;
    computerScore++;
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
  }
  if (gameNumber === 5) {
    if (playerScore > computerScore) {
      gameScore.textContent = "You Win";
    } else if (computerScore > playerScore) {
      gameScore.textContent = "The Computer Wins";
    } else {
      gameScore.textContent = "Nobody Wins. It's a tie";
    }
    gameEnd();
  }
}
function gameEnd() {
  for (let container of containers) {
    container.style.display = "none";
  }
  roundScore.textContent = "";
  gameEndContainer.style.display = "flex";
  nextRoundBtn.style.display = "flex";
}
function nextGame() {
  gameEndContainer.style.display = "none";
  pChoiceBox.textContent = "?";
  cChoiceBox.textContent = "?";
  playerScore = 0;
  computerScore = 0;
  gameNumber = 0;
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
  roundScore.textContent = 'Choose one of the icons.';

  for (let container of containers) {
    container.style.display = "flex";
  }
  for (let box of boxes) {
    box.style.borderColor = "";
  }
}

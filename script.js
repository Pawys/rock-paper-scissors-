function getPlayerChoice() {
  let x = prompt("What is your choice? (rock, paper or scissors)");
  x = x.toLowerCase(); //Make x case insenstive
  if (x !== "rock" && x !== "scissors" && x !== "paper") {
    // Check if x is a correct choice
    alert("Invalid choice. Choose again.");
    getPlayerChoice();
  } else {
    return x;
  }
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3); //Get a number from 0 to 2
  switch (
    randomNumber // Return computer choices based on the numbers
  ) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

function playRound(playerChoice, computerChoice) {
  switch (computerChoice) {
    case "rock":
      switch (playerChoice) {
        case "rock":
          console.group("It's a tie!");
          return "tie";
          break;
        case "paper":
          console.group("You win! Paper beats rock");
          return "win";
          break;
        case "scissors":
          console.group("You lose! Rock beats scissors");
          return "lose";
          break;
      }
      break;
    case "paper":
      switch (playerChoice) {
        case "rock":
          console.group("You lose! Paper beats rock");
          return "lose";
          break;
        case "paper":
          console.group("It's a tie!");
          return "tie";
          break;
        case "scissors":
          console.group("You win! Scissors beat paper");
          return "win";
          break;
      }
      break;
    case "scissors":
      switch (playerChoice) {
        case "rock":
          console.group("You win! Rock beats scissors");
          return "win";
          break;
        case "paper":
          console.group("You lose! Scissors beat paper");
          return "lose";
          break;
        case "scissors":
          console.group("It's a tie!");
          return "tie";
          break;
      }
      break;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice); // Get the result from the playRound function

    if (result === "win") {
      playerScore++;
      console.log("The Player score is " + playerScore);
      console.log("The Computer score is " + computerScore);
      console.groupEnd();
    } else if (result === "lose") {
      computerScore++;
      console.log("The Player score is " + playerScore);
      console.log("The Computer score is " + computerScore);
      console.groupEnd();
    } else {
      console.log("The Player score is " + playerScore);
      console.log("The Computer score is " + computerScore);
      console.groupEnd();
    }
  }
  if (playerScore > computerScore) {
    console.log("The Player Wins");
  } else if (computerScore > playerScore) {
    console.log("The Computer Wins");
  } else {
    console.log("Nobody Wins. It's a tie");
  }
}

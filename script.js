"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// When there is no user input
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("You didn't type a number!");
    // When the user guesses the correct number
  } else if (guess === secretNumber) {
    displayMessage("Correct number! You got it! 🎉🌟");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#3fe06a";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // When the user's guess is incorrect
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? "Your guess is too high 😮"
          : "Your guess is too low 🥺"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game 😭");
      document.querySelector(".score").textContent = 0;
    }
  }
});
/* messy obese flaming hot pile of garbage code; keeping for future reference */

// When the user's guess is too high
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent =
//       'Your guess is too high 😮';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game 😭';
//     document.querySelector('.score').textContent = 0;
//   }
//   // When the user's guess is too low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent =
//       'Your guess is too low 🥺';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game 😭';
//     document.querySelector('.score').textContent = 0;
//   }
// }

function resetGame() {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").style.width = "15rem";
  displayMessage("Let's play again!");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  let newSecretNumber = (secretNumber = Math.trunc(Math.random() * 20) + 1);
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = newSecretNumber;
}
document.querySelector(".again").addEventListener("click", resetGame);

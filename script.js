// Game settings
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const MAX_GUESSES = 5;

// Game state
let secretNumber;
let guessesLeft;
let popupOpenedAt = 0;

// Page elements
const form = document.getElementById("guess-form");
const input = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const feedback = document.getElementById("feedback");
const remainingCount = document.getElementById("remaining-count");
const popup = document.getElementById("popup");
const popupBox = document.getElementById("popup-box");
const popupMessage = document.getElementById("popup-message");
const popupButton = document.getElementById("popup-button");

// Pick a new secret number and reset the screen
function startNewGame() {
  secretNumber = Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER;
  guessesLeft = MAX_GUESSES;

  remainingCount.textContent = guessesLeft;
  showFeedback("", "");
  input.value = "";
  input.disabled = false;
  guessButton.disabled = false;
  input.focus();
}

function showFeedback(message, type) {
  feedback.textContent = message;
  feedback.className = "feedback " + type;
}

function handleGuess(event) {
  event.preventDefault();

  const guess = Number(input.value);

  // Check the guess is a whole number from 1 to 100 (doesn't use up a guess)
  if (input.value === "" || !Number.isInteger(guess) || guess < MIN_NUMBER || guess > MAX_NUMBER) {
    showFeedback("Please enter a whole number from 1 to 100.", "warning");
    input.select();
    return;
  }

  guessesLeft--;
  remainingCount.textContent = guessesLeft;

  if (guess === secretNumber) {
    showFeedback("Correct!", "correct");
    showPopup(true);
  } else if (guessesLeft === 0) {
    showFeedback(guess > secretNumber ? "Too high!" : "Too low!", "wrong");
    showPopup(false);
  } else if (guess > secretNumber) {
    showFeedback("Too high! Try a smaller number.", "wrong");
  } else {
    showFeedback("Too low! Try a bigger number.", "wrong");
  }

  input.value = "";
  if (popup.hidden) input.focus();
}

function showPopup(playerWon) {
  input.disabled = true;
  guessButton.disabled = true;

  if (playerWon) {
    popupBox.className = "popup win";
    popupMessage.textContent = "Hooray! Congrats, you guessed correctly!";
    popupButton.textContent = "Play Again";
  } else {
    popupBox.className = "popup lose";
    popupMessage.textContent =
      "Oh, biscuits! Sorry, you did not guess in time. The number was " + secretNumber + ".";
    popupButton.textContent = "Try Again";
  }

  popup.hidden = false;
  popupOpenedAt = Date.now();
  popupButton.focus();
}

// Closing the pop-up starts a new game
function closePopup() {
  // Ignore clicks in the first second so a quick extra Enter press
  // doesn't close the pop-up before the player can read it
  if (Date.now() - popupOpenedAt < 1000) return;

  popup.hidden = true;
  startNewGame();
}

form.addEventListener("submit", handleGuess);
popupButton.addEventListener("click", closePopup);

startNewGame();

const randomNum = Math.floor(Math.random() * 10) + 1;
let attemptsLeft = 5;
let gameOver = false;

function checkGuess()
{
if (gameOver) return;
const guessInput = document.getElementById("num1");
const guess = Number(guessInput.value);
const resultElement = document.getElementById("result");

if (isNaN(guess))
    {
    resultElement.textContent = "Please enter a valid number!";
    return;
    }
if (guess < 1 || guess > 10)
    {
    resultElement.textContent = "Please enter a number between 1 and 10!";
    return;
}
attemptsLeft--;

if (guess === randomNum) {
    resultElement.textContent = `🎉 You Won! The number was ${randomNum}`;
    resultElement.style.color = "green";
    disableGame();
    startConfetti();
} else if (attemptsLeft <= 0) {
    resultElement.textContent = `😢 Game Over! The number was ${randomNum}`;
    resultElement.style.color = "red";
    disableGame();
} else {
    const hint = guess > randomNum ? "greater" : "less";
    resultElement.textContent = `Your guess is ${hint}. ${attemptsLeft} attempts left. Try again!`;
    resultElement.style.color = "#333";
}
}

function disableGame()
{
gameOver = true;
document.getElementById("num1").disabled = true;
document.getElementById("checkBtn").disabled = true;
}
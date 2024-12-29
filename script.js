// Updated script for Rock Paper Scissors UI

// Step 2: Logic to get the computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Step 4: Declare the players' score variables
let humanScore = 0;
let computerScore = 0;

// Step 5: Logic to play a single round
function playRound(humanChoice, computerChoice) {
    const resultDiv = document.getElementById('results');
    let resultMessage = `You chose: ${humanChoice}. Computer chose: ${computerChoice}. `;

    if (humanChoice === computerChoice) {
        resultMessage += "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage += "You win this round!";
        humanScore++;
    } else {
        resultMessage += "Computer wins this round!";
        computerScore++;
    }

    resultMessage += `<br>Scores - You: ${humanScore}, Computer: ${computerScore}`;
    resultDiv.innerHTML = `<p>${resultMessage}</p>`;

    checkWinner();
}

// Check for a winner
function checkWinner() {
    const resultDiv = document.getElementById('results');
    const restartButton = document.getElementById('restart');

    if (humanScore === 5) {
        resultDiv.innerHTML += '<p>Congratulations! You are the overall winner!</p>';
        endGame();
    } else if (computerScore === 5) {
        resultDiv.innerHTML += '<p>The computer wins the game. Better luck next time!</p>';
        endGame();
    }
}

// End the game
function endGame() {
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => button.disabled = true);
    document.getElementById('restart').style.display = 'block';
}

// Restart the game
function restartGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById('results').innerHTML = '<p>Scores - You: 0, Computer: 0</p><p>Game Status: Click a button to start playing!</p>';
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => button.disabled = false);
    document.getElementById('restart').style.display = 'none';
}

// Step 7: Add event listeners
function setupGame() {
    document.getElementById('rock').addEventListener('click', () => playRound('rock', getComputerChoice()));
    document.getElementById('paper').addEventListener('click', () => playRound('paper', getComputerChoice()));
    document.getElementById('scissors').addEventListener('click', () => playRound('scissors', getComputerChoice()));
    document.getElementById('restart').addEventListener('click', restartGame);
}

// Initialize the game
setupGame();

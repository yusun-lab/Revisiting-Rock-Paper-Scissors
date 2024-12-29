// Step 1: Setup the project structure
console.log("Hello Anne");

// Step 2: Write the logic to get the computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Step 3: Write the logic to get the human choice
function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors:").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors.").toLowerCase();
    }
    return choice;    
}

// Step 4: Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// Step 5: Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win this round!");
        humanScore++;
    } else {
        console.log("Computer wins this round!");
        computerScore++;
    }

    console.log(`Scores - You: ${humanScore}, Computer: ${computerScore}`);    
}

// Step 6: Write the logic to play the entire game
function playGame() {
    humanScore = 0;
    computerScore = 0;
    
    console.log("Welcome to Rock Paper Scissors! Best of 5 rounds.");
    
    for (let i = 1; i <= 5; i++) {
        console.log(`\nRound ${i}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(); 
        playRound(humanSelection, computerSelection); 
    }

    console.log("\nFinal Scores:");
    console.log(`You: ${humanScore}, Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (humanScore < computerScore) {
        console.log("The computer wins the game. Better luck next time!");
    } else {
        console.log("The game is a tie!");        
    } 
    
    console.log("\nGame over! Thank you for playing!");
}

// Step 7: Start the game
playGame();

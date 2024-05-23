//console.log("Hello, World!");


// function to randomly select a RPS choice for the computer
function getComputerChoice() {
    // getting a random integer (0, 1, or 2)
    let result = Math.floor(Math.random() * 3 );
    // debug clg
    //console.log(result);
    // determine return value based on randomized result
    if (result === 0) {
        return "rock";
    } else if (result === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
// debug clg
//console.log(getComputerChoice());


// initialize score trackers for user and computer
let humanScore = 0;
let computerScore = 0;

// playRound function plays one round
// function that takes human and computer selections as parameters
function playRound(humanChoice, computerChoice) {
    
    // set up query selectors to target html <p> for textContent changes
    const player = document.querySelector('#player');
    const comp = document.querySelector('#computer');
    const roundResult = document.querySelector('#roundResult');
    const runningScore = document.querySelector('#runningScore');

    player.textContent = "You chose "+ humanChoice + ".";
    comp.textContent = "Your opponent chose "+ computerChoice + ".";

    if (humanChoice === "rock" && computerChoice === "paper") {
        roundResult.textContent = "You lose! Paper beats Rock.";
        computerScore ++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        roundResult.textContent = "You win! Rock beats Scissors.";
        humanScore ++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        roundResult.textContent = "You win! Paper beats Rock.";
        humanScore ++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        roundResult.textContent = "You lose! Scissors beats Paper.";
        computerScore ++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        roundResult.textContent = "You lose! Rock beats Scissors.";
        computerScore ++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        roundResult.textContent = "You win! Scissors beats Paper.";
        humanScore ++;
    } else {
        roundResult.textContent = "This round is a tie! Both opponents receive 1 point."
        humanScore ++;
        computerScore ++;
    }
    // output running total after each round
    runningScore.textContent = "Your score: " + humanScore + ", " + "Computer score: " + computerScore;

    // first to five, send alert to declare a winner or a tie, and refresh page to reset game
    if (humanScore >= 5 && computerScore < 5) {
        setTimeout(() => alert("Congratulations! You win!"), 1);
        window.location.reload();
    } else if (humanScore < 5 && computerScore >= 5) {
        setTimeout(() => alert("Darn, you lose! Better luck next time."), 1);
        window.location.reload();
    } else if (humanScore >= 5 && computerScore >= 5 && humanScore == computerScore) {
        setTimeout(() => alert("Whoa! We have a tie. How about that...!"), 1);
        window.location.reload();
    }
}

// selector and event handler to determine user choice and execute 1 round
const buttons = document.querySelector('.container');

buttons.addEventListener('click', (e) => {
    const selection = e.target.getAttribute('data-type');
    //console.log(selection);
    playRound(selection, getComputerChoice());
});


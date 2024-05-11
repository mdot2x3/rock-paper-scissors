//console.log("Hello, World!");


// function to randomly select a RPS choice for the computer
function getComputerChoice() {
    // getting a random integer (0, 1, or 2)
    let result = Math.floor(Math.random() * 3 );
    // debug clg
    console.log(result);
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


// function to prompt user to make a RPS choice
function getHumanChoice() {
    // create while loop to run until valid input is received by user
    let stillGoing = true;
    while (stillGoing) {
        let userInput = prompt("Please enter your choice (Rock, Paper, or Scissors)?");
        // set user input to lowercase for conditional check
        let userInputLower = userInput.toLowerCase();
        // check if input is valid
        if (userInputLower === "rock" || userInputLower === "paper" || userInputLower === "scissors") {
            return userInputLower
            stillGoing = false;
        // if not valid, prompt user to try again
        } else {
            console.log("That isn't a valid choice. Please try again.");
        }
    }
}
// debug clg
//console.log(getHumanChoice());


// play full game, 5 rounds
// function that calls playRound 5 times, and then declares a winner
function playGame() {

    // initialize score trackers for user and computer
    let humanScore = 0;
    let computerScore = 0;

    // loop through the playRound function 5 times
    for (i = 0; i < 5; i++) {
        // play one round of the game
        // function that takes human and computer selections as parameters
        function playRound(humanChoice, computerChoice) {
            console.log("You chose "+ humanChoice + ".");
            console.log("Your opponent chose "+ computerChoice + ".");

            if (humanChoice === "rock" && computerChoice === "paper") {
                console.log("You lose! Paper beats Rock.");
                computerScore ++;
            } else if (humanChoice === "rock" && computerChoice === "scissors") {
                console.log("You win! Rock beats Scissors.");
                humanScore ++;
            } else if (humanChoice === "paper" && computerChoice === "rock") {
                console.log("You win! Paper beats Rock.");
                humanScore ++;
            } else if (humanChoice === "paper" && computerChoice === "scissors") {
                console.log("You lose! Scissors beats Paper.");
                computerScore ++;
            } else if (humanChoice === "scissors" && computerChoice === "rock") {
                console.log("You lose! Rock beats Scissors.");
                computerScore ++;
            } else if (humanChoice === "scissors" && computerChoice === "paper") {
                console.log("You win! Scissors beats Paper.");
                humanScore ++;
            } else {
                console.log("This round is a tie! Both opponents receive 1 point.")
                humanScore ++;
                computerScore ++;
            }
        }
        // set variables to human and computer choices that will feed into playRound function parameters
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        // call playRound
        playRound(humanSelection, computerSelection);

        // debug clg
        //console.log("H:" + humanScore + ", " + "C: " + computerScore);
    }

    // output scores after each round
    console.log("Your score:" + humanScore + ", " + "Computer score: " + computerScore);
    
    // compare final total scores and declare a winner
    if (humanScore > computerScore) {
        console.log("Congratulations! You win!");
    } else if (humanScore < computerScore) {
        console.log("Darn, you lose! Better luck next time.");
    } else {
        console.log("Whoa! We have a tie. How about that...!");
    }
}

// call function to launch game
playGame();
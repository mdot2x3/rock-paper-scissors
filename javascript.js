console.log("Hello, World!");

// function to randomly select a RPS choice for the computer
function getComputerChoice() {
    // getting a random integer between two values, inclusive
    // return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    let result = Math.floor(Math.random() * (9) + 1);
    // debug clg
    console.log(result);
    // determine return value based on randomized result
    if (result >= 1 && result <=3) {
        return "Rock";
    } else if (result >= 4 && result <=6) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
// debug clg
console.log(getComputerChoice());

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
console.log(getHumanChoice());
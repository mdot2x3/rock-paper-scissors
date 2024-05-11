console.log("Hello, World!");

function getComputerChoice() {
    // Getting a random integer between two values, inclusive
    // return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    const result = Math.floor(Math.random() * (9) + 1);
    //debug clg
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
//debug clg
console.log(getComputerChoice())
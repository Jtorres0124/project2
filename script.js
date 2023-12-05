
var wins = 0;
var ties = 0;
var losses = 0;


function play(userChoice) {
    
    var choices = ["rock", "paper", "scissors"];
    
    
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    
    if (userChoice === computerChoice) {
        ties++;
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        wins++;
    } else {
        losses++;
    }

    
    document.getElementById("wins").textContent = wins;
    document.getElementById("ties").textContent = ties;
    document.getElementById("losses").textContent = losses;
}

const gameValues = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return gameValues[Math.floor(Math.random() * gameValues.length)];
}

console.log(computerPlay());

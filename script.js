const userChoice = document.getElementById("user-choice");
const computerChoice = document.getElementById("computer-choice");
const roundResult = document.getElementById("round-result");
const buttons = document.querySelectorAll('#buttonRpc');
const playerScore = document.getElementById('user-score');
const pcScore = document.getElementById('computer-score');
const finRes = document.getElementById('final-result');
const endRes = document.getElementById('endRes');
const restart = document.querySelector('#restart');






let randomValue = function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return (randomChoice);
    
}



buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', playRound);
  });


let userSelection = "default";
let userScore = 0;
let computerScore = 0;


            
function playRound(event) {
            
    userSelection = event.target.innerText;
    let computerSelection = randomValue();
                
    if(userScore == 5) {
            checkWin();
                      
                
    } else if (computerScore == 5) {
            checkWin();
                    
    } else if(userSelection == computerSelection) {
            roundResult.textContent = "It's a tie, play again.";
                
    } else if  (userSelection == 'rock' && computerSelection == 'paper') {
            roundResult.textContent = "You lost the round.";
            computerScore++;
            pcScore.textContent = computerScore;
    
                
    } else if (userSelection == 'rock' && computerSelection == 'scissors') {
            roundResult.textContent = "You won the round!";
            userScore++;
            playerScore.textContent = userScore;
            
    } else if (userSelection == 'paper' && computerSelection == 'rock') {
            roundResult.textContent = "You won the round!";
            userScore++;
            playerScore.textContent = userScore;
                
    } else if (userSelection == 'paper' && computerSelection == 'scissors') {
            roundResult.textContent = "You lost the round.";
            computerScore++;
            pcScore.textContent = computerScore;
                
    } else if (userSelection == 'scissors' && computerSelection == 'rock') {
            roundResult.textContent = "You lost the round.";
            computerScore++;
            pcScore.textContent = computerScore;
                
    } else if (userSelection == 'scissors' && computerSelection == 'paper') {
                    
            roundResult.textContent = "You won the round!";
            userScore++;
            playerScore.textContent = userScore;
                
    }

            userChoice.textContent = userSelection;
            computerChoice.textContent = computerSelection;
}


function gameStart() {
    playerScore = 0;
    computerScore = 0;
    // I'm not sure why this disables and unables the buttons. What does it have to do with the 
    // variable radonmChoice that stores the result of the random extraction form the randomValue()?
    buttons.forEach(randomChoice => {
        randomChoice.disabled = false;
    });
    userChoice.textContent = "";
    computerChoice.textContent = "";
    roundResult.textContent = "";
    endRes.textContent = "";
}



function gameEnd() {
    buttons.forEach(randomChoice => {
        randomChoice.disabled = true;
    });
}






function checkWin() {
    if (userScore == 5) {
        finRes.textContent = "You won the game :)";
        gameEnd();
    } else if (computerScore == 5) {
        finRes.textContent = "You lost the game :("
        gameEnd();

}

};

























                
        
        
        

                
                

            
            
    



                


                


                

        

    

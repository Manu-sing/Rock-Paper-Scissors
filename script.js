

const forma = document.querySelector('form');
const out0 = document.getElementById('user-choice');
const out1 = document.getElementById('computer-choice');
const out2 = document.getElementById('game-result');
const out3 = document.getElementById('user-score');
const out4 = document.getElementById('computer-score');
const out5 = document.getElementById('final-result');


        // get a ramdom choice between Rock-paper-scissor from Computer

        let choices = ['rock', 'paper', 'scissors'];
        
        let randomValue  = function computerPlay() {

            let randomChoice = choices[Math.floor(Math.random() * choices.length)];
            
            out1.textContent = randomChoice;

            return randomChoice;

        };

       

    function game() {

        let userScore = 0;
        let computerScore = 0;

        // iterate the function playRound 5 times with a for loop
        for (let i = 0; i < 5; i++) {
        // prompt an initial message "Rock, paper, scissor" to ask the user to input one of the 3
        let sign = prompt("Rock, paper or scissors?");

        // use a function to compare the random choice from computer with what the user has input in the prompt and return a result
        function playRound(playerSelection, computerSelection) {
         
            
          if (playerSelection == "rock" && computerSelection == choices[0]) {
            i = i -1;    
            return "It's a tie! Play again!";
                

         } else if (playerSelection  == "rock" && computerSelection == choices[1]) {
                
                computerScore = computerScore + 1;
                out4.textContent = computerScore;
                // this is when the computer wins
                if(computerScore == 3) {
                    i = 5; // so that it practically breaks out of the loop
                    out5.textContent = "Unfortunately you lost the game :("   
                } else return "You lose this round! Paper beats rock.";

            } else if (playerSelection  == "rock" && computerSelection == choices[2]) {
                
                userScore = userScore + 1;
                out3.textContent = userScore;
                if(userScore == 3) {
                    i = 5;
                    out5.textContent = "Congratulations, you won the game!"
                } else return "You win this round! Rock beats scissors.";

            } else if (playerSelection  == "paper" && computerSelection == choices[0]) {
                
                userScore = userScore + 1;
                out3.textContent = userScore;
                if(userScore == 3) {
                    i = 5;
                    out5.textContent = "Congratulations, you won the game!"
                } else return "You win this round! Paper beats rock.";

            } else if (playerSelection  == "paper" && computerSelection == choices[1]) {
                i = i -1; 
                return "It's a tie! Play again!";

            } else if (playerSelection  == "paper" && computerSelection == choices[2]) {
                
                computerScore = computerScore + 1;
                out4.textContent = computerScore;
                if (computerScore == 3) {
                    i = 5;
                    out5.textContent = "Unfortunately you lost the game :("
                } else return "You lose this round! Scissors beat paper.";

            } else if (playerSelection  == "scissors" && computerSelection == choices[0]) {
                
                computerScore = computerScore + 1;
                out4.textContent = computerScore;
                if (computerScore == 3) {
                    i = 5;
                    out5.textContent = "Unfortunately you lost the game :("
                } else return "You lose this round! Rock beats scissors.";

            } else if (playerSelection  == "scissors" && computerSelection == choices[1]) {
                
                userScore = userScore + 1;
                out3.textContent = userScore;
                if(userScore == 3) {
                    i = 5;
                    out5.textContent = "Congratulations, you won the game!"
                } else return "You win this round! Scissors beat paper.";

            } else if (playerSelection  == "scissors" && computerSelection == choices[2]) {
                i = i -1; 
                return "It's a tie! Play again!";
            // this currently doesn't work as it tries to convert the playerSelection toLowerCase, as requested in the let playerSelection = sign.toLowerCase(), but it cannot because the sign is null and so it returns an error that sign is null
            } else if(playerSelection === '' || playerSelection === null) {
                i = 0;
                 
            } else {
                i = i -1; 
                return "I think you forgot how to play this game!"; 
            }    


            }
            // store the playerSelection argument value (equal to user input made lower case) in a variable
            let playerSelection = sign.toLowerCase();
            // store the computerSelection argument value (equal to radom choice determined by function randomValue) in a variable
            let computerSelection = randomValue();

            // print the user input made to lower case in the paragraph tag
            out0.textContent = sign;
            // print the return statement from the function in the out2 tag
            out2.textContent= playRound(playerSelection, computerSelection); 

        }


        }

   // run the function
   game();

   

   

   


        



        
                
        
        
        

                
                

            
            
    



                


                


                

        

        

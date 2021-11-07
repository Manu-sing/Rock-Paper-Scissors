

const forma = document.querySelector('form');
const out1 = document.getElementById('computer-choice');
const out2 = document.getElementById('game-result');
const para = document.querySelector('p');





        let choices = ['rock', 'paper', 'scissors'];
        
        let randomValue  = function computerPlay() {

            let randomChoice = choices[Math.floor(Math.random() * choices.length)];
            
            out1.outerHTML = randomChoice;

            return randomChoice;

        };



        let sign = prompt("Rock, paper or scissors?");


         function playRound(playerSelection, computerSelection) {

                     
                    if (playerSelection == "rock" && computerSelection == choices[0]) {
                        return "It's a tie! Play again!";
                    } else if (playerSelection  == "rock" && computerSelection == choices[1]) {
                        return "You lose! Paper beats rock.";
                    } else if (playerSelection  == "rock" && computerSelection == choices[2]) {
                        return "You win! Rock beats scissors."; 
                    } else if (playerSelection  == "paper" && computerSelection == choices[0]) {
                        return "You win! Paper beats rock.";
                    } else if (playerSelection  == "paper" && computerSelection == choices[1]) {
                        return "It's a tie! Play again!";
                    } else if (playerSelection  == "paper" && computerSelection == choices[2]) {
                        return "You lose! Scissors beat paper.";
                    } else if (playerSelection  == "scissors" && computerSelection == choices[0]) {
                        return "You lose! Rock beats scissors.";
                    } else if (playerSelection  == "scissors" && computerSelection == choices[1]) {
                        return "You win! Scissors beat paper.";
                    } else if (playerSelection  == "scissors" && computerSelection == choices[2]) {
                        return "It's a tie! Play again!";
                    } else return "I think you forgot how to play this game!"; {

                    }

                };
                let playerSelection = sign.toLowerCase();
                let computerSelection = randomValue();

                para.outerHTML = sign.toLowerCase();
                out2.outerHTML= playRound(playerSelection, computerSelection);


                


                

        

        

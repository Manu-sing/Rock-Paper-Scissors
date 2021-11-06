
const forma = document.querySelector('form');
const inp = document.querySelector('input');
const para = document.querySelector('p');




        let choices = ['Rock', 'Paper', 'Scissors'];
        
        let randomValue  = (function computerPlay() {

            let randomChoice = choices[Math.floor(Math.random() * choices.length)];
            
            para.outerHTML += " " + randomChoice;

            return randomChoice;

        }) ();



        function playRound(playerSelection, computerSelection) {
                    if (playerSelection == "rock" && computerSelection == choices[0]) {
                        return "It's a tie! Play again!";
                    } else if (playerSelection == "rock" && computerSelection == choices[1]) {
                        return "You lose! Paper beats rock.";
                    } else if (playerSelection == "rock" && computerSelection == choices[2]) {
                        return "You win! Rock beats scissors."; 
                    } else if (playerSelection == "paper" && computerSelection == choices[0]) {
                        return "You win! Paper beats rock.";
                    } else if (playerSelection == "paper" && computerSelection == choices[1]) {
                        return "It's a tie! Play again!";
                    } else if (playerSelection == "paper" && computerSelection == choices[2]) {
                        return "You lose! Scissors beat paper.";
                    } else if (playerSelection == "scissors" && computerSelection == choices[0]) {
                        return "You lose! Rock beats scissors.";
                    } else if (playerSelection == "scissors" && computerSelection == choices[1]) {
                        return "You win! Scissors beat paper.";
                    } else if (playerSelection == "scissors" && computerSelection == choices[2]) {
                        return "It's a tie! Play again!";
                    } else return "I think you forgot how to play this game!"
        }

        let playerSelection = "rock" /*document.getElementById('user-inp').value.toLowerCase();*/
        let computerSelection = randomValue;

        

        console.log(playRound(playerSelection, computerSelection));

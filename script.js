/*
            HOW THE GAME IS PLAYED
    Possible outcomes
    * Rock
    * Paper
    * Scissors
    
    Rules
    * Rock beats scissors
    * Scissors beat paper
    * Paper beat rock
    
    ALGORITHM
    * Create an array variable possibleOutcomes to hold the set of outcomes
    * The computer generates one of the three outcomes
        - Create a function getComputerChoice that randomly generates and returns one of the possible outcomes
    * Compare what the computer generates and the user's input
        - Create a function compareSelections that takes two parameters playerSelection and computerSelection and returns the winner after the comparison
        - Make sure the user's input is case-insensitive
*/
const possibleOutcomes = ['ROCK', 'PAPER', 'SCISSORS']

function getComputerChoice(){
    let selection = Math.floor(Math.random() * (possibleOutcomes.length));
    return possibleOutcomes[selection];
}
// console.log(getComputerChoice());
// let output = getComputerChoice();
// console.log(output);

function compareSelections(computerSelection, playerSelection){
    let playerSelectionToUpperCase = playerSelection.toUpperCase();
    
    // checking conditions
    if (computerSelection === 'ROCK'){
        if (playerSelectionToUpperCase === 'SCISSORS'){
            return 'You lose! Rock beats Scissors.';
        }
        else if (playerSelectionToUpperCase === 'PAPER'){
            return 'You win! Paper beats Rock.';
        }
        else{
            return 'Its a tie!';
        }
    }
    else if (computerSelection === 'SCISSORS'){
        if (playerSelectionToUpperCase === 'PAPER'){
            return 'You lose! Scissors beats Paper';
        }
        else if (playerSelectionToUpperCase === 'ROCK'){
            return 'You win! Rock beats Scissors';
        }
        else {
            return 'Its a tie!';
        }
    }
    else{
        if (playerSelectionToUpperCase === 'ROCK'){
            return "You lose! Paper beats Rock";
        }
        else if (playerSelectionToUpperCase === 'SCISSORS'){
            return 'You win! Scissors beats Paper';
        }
        else{
            return 'Its a tie!';
        }
    }
    // console.log(playerSelectionToUpperCase);
    
}
// console.log(compareSelections(output, 'rock'))

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
const possibleOutcomes = ['ROCK', 'PAPER', 'SCISSORS'];

let your_scores = 0;
let computer_scores = 0;
let counter = 0;

//Grabbing the scores
let yourCurrentScore = document.querySelector('.your-score');
let computerCurrentScore = document.querySelector('.computer-score');

// Creating images
let createComputerSelectionImg;
let createDiv;

function createStoneImage(){
    createComputerSelectionImg = document.createElement('img');
    createComputerSelectionImg.src = "./images/stone-small-64px.png";
    createDiv.appendChild(createComputerSelectionImg);
}
function createPaperImage(){
    createComputerSelectionImg = document.createElement('img');
    createComputerSelectionImg.src = "./images/paper-small-64px.png";
    createDiv.appendChild(createComputerSelectionImg);
}
function createScissorsImage(){
    createComputerSelectionImg = document.createElement('img');
    createComputerSelectionImg.src = "./images/scissors-small-64px.png";
    createDiv.appendChild(createComputerSelectionImg);
}



function getComputerChoice(){
    let selection = Math.floor(Math.random() * (possibleOutcomes.length));
    return possibleOutcomes[selection];
}

function compareSelections(computerSelection, playerSelection){
    if (counter <= 5){
        let playerSelectionToUpperCase = playerSelection.toUpperCase();
    
        if (computerSelection === 'ROCK'){
            if (playerSelectionToUpperCase === 'SCISSORS'){
                createStoneImage();
                computer_scores++;
                computerCurrentScore.textContent = computer_scores;
                return 'You lose! Rock beats Scissors.';
            }
            else if (playerSelectionToUpperCase === 'PAPER'){
                createStoneImage();
                your_scores++;
                yourCurrentScore.textContent = your_scores;
                return 'You win! Paper beats Rock.';
            }
            else{
                createStoneImage();
                return 'Its a tie!';
            }
        }
        else if (computerSelection === 'SCISSORS'){
            if (playerSelectionToUpperCase === 'PAPER'){
                createScissorsImage();
                computer_scores++;
                computerCurrentScore.textContent = computer_scores;
                return 'You lose! Scissors beats Paper';
            }
            else if (playerSelectionToUpperCase === 'ROCK'){
                createScissorsImage();
                your_scores++;
                yourCurrentScore.textContent = your_scores;
                return 'You win! Rock beats Scissors';
            }
            else {
                createScissorsImage();
                return 'Its a tie!';
            }
        }
        else{
            if (playerSelectionToUpperCase === 'ROCK'){
                createPaperImage();
                computer_scores++;
                computerCurrentScore.textContent = computer_scores;
                return "You lose! Paper beats Rock";
            }
            else if (playerSelectionToUpperCase === 'SCISSORS'){
                createPaperImage();
                your_scores++;
                yourCurrentScore.textContent = your_scores;
                return 'You win! Scissors beats Paper';
            }
            else{
                createPaperImage();
                return 'Its a tie!';
            }
        }    
    }
    
}

// Getting images
let getDiv = document.querySelector('div.images');
let nextRound = document.querySelector('.next-round');

function getImage(e){
    if (counter >= 5 ){
        getDiv.setAttribute('disabled', true);
        document.querySelector('button').textContent = 'Restart';
    }
    else{
        if (e.target.src){
            createDiv = document.createElement('div');
            createDiv.setAttribute('class', 'outcome');
            nextRound.before(createDiv);

            // let declaration = document.createElement('p');
            // declaration.setAttribute('class', 'declare');
            // declaration.textContent = 'gyrfff';
            // nextRound.before(declaration);
            
            let createImage = document.createElement('img');
            createImage.src = `${e.target.src}`;
            createDiv.appendChild(createImage);
            //
            compareSelections(getComputerChoice(), e.target.className);
            counter++;
            console.log(counter);
            if (counter >= 5){
                document.querySelector('button').textContent = 'Restart';
            }
        }
    }
}
function removeOutcome(){
    createDiv.remove();
    declaration.remove();
}
getDiv.addEventListener('click', getImage);
nextRound.addEventListener('click', removeOutcome);
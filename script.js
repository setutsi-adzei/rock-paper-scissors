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
let declaration = document.querySelector('.declare');

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
                declaration.textContent = 'You lose! Rock beats Scissors.'; 
            }
            else if (playerSelectionToUpperCase === 'PAPER'){
                createStoneImage();
                your_scores++;
                yourCurrentScore.textContent = your_scores;
                declaration.textContent = 'You win! Paper beats Rock.';
            }
            else{
                createStoneImage();
                declaration.textContent = 'Its a tie!';
            }
        }
        else if (computerSelection === 'SCISSORS'){
            if (playerSelectionToUpperCase === 'PAPER'){
                createScissorsImage();
                computer_scores++;
                computerCurrentScore.textContent = computer_scores;
                declaration.textContent = 'You lose! Scissors beats Paper';
            }
            else if (playerSelectionToUpperCase === 'ROCK'){
                createScissorsImage();
                your_scores++;
                yourCurrentScore.textContent = your_scores;
                declaration.textContent = 'You win! Rock beats Scissors';
            }
            else {
                createScissorsImage();
                declaration.textContent = 'Its a tie!';
            }
        }
        else{
            if (playerSelectionToUpperCase === 'ROCK'){
                createPaperImage();
                computer_scores++;
                computerCurrentScore.textContent = computer_scores;
                declaration.textContent = "You lose! Paper beats Rock";
            }
            else if (playerSelectionToUpperCase === 'SCISSORS'){
                createPaperImage();
                your_scores++;
                yourCurrentScore.textContent = your_scores;
                declaration.textContent = 'You win! Scissors beats Paper';
            }
            else{
                createPaperImage();
                declaration.textContent = 'Its a tie!';
            }
        }    
    }
    
}

// Getting images
let getDiv = document.querySelector('div.images');

function declareWinner(){
    let declareMessage = document.createElement('p');
    declareMessage.setAttribute('class', 'message');
    declaration.after(declareMessage);

    if (computer_scores > your_scores){
        declareMessage.textContent = 'YOU LOST'
    }
    else if(your_scores > computer_scores){
        declareMessage.textContent = 'YOU WON!';
    }
    else{
        declareMessage.textContent = 'IT WAS A TIE!';
    }
}
function generateResult(e){
    if (counter >= 5 ){
        getDiv.setAttribute('disabled', true);
    }
    else{
        if (e.target.src){
            //Creating a div to house the selected images
            createDiv = document.createElement('div');
            createDiv.setAttribute('class', 'outcome');
            declaration.before(createDiv);

            //Creating the selected images
            let createImage = document.createElement('img');
            createImage.src = `${e.target.src}`;
            createDiv.appendChild(createImage);

            //Creating a div to house the button to reset a round
            let createDivBtn = document.createElement('div');
            createDivBtn.setAttribute('class', 'next-round');
            declaration.after(createDivBtn);

            //Creating the button that resets the current round
            let createButton = document.createElement('button');
            createButton.textContent = 'Next Round';
            createDivBtn.appendChild(createButton);

            //Function to remove certain elements
            function removeOutcome(){
                createDiv.remove();
                declaration.textContent = '';
                nextRound.remove();
            }
            
            //Grabbing the next-round div and adding an event listener
            let nextRound = document.querySelector('.next-round');
            nextRound.addEventListener('click', removeOutcome);

            compareSelections(getComputerChoice(), e.target.className);
            counter++;
            console.log(counter);
            if (counter >= 5){
                createButton.remove();
                declareWinner();
            }
        }
    }
}
getDiv.addEventListener('click', generateResult);
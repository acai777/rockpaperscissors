const WIN = 1;
const LOSE = -1;
const TIE = 0; 

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // the "+ min" enforces the random int to be between min and max, inclusive, and NOT between 0 and (max-1), inclusive. 
}

function computerPlay() {
    game_result = getRandomInt(1, 3);
    if (game_result == 1) {
        return 'Rock';
    } else if (game_result == 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerchoice = playerSelection.toLowerCase(); // string functions do not change original string, only returns the output.
    computerchoice = computerSelection.toLowerCase();

    // if (playerchoice == computerchoice) {
    //     return `Both players chose ${playerchoice}, this is a tie.`
    // } else if (playerchoice == 'rock' && computerchoice == 'paper') {
    //     return 'You lose; paper beats rock.'
    // } else if (playerchoice == 'rock' && computerchoice == 'scissors') {
    //     return 'You win; rock beats scissors.'
    // } else if (playerchoice == 'paper' && computerchoice == 'rock') {
    //     return 'You win; paper beats rock.'
    // } else if (playerchoice == 'paper' && computerchoice == 'scissors') {
    //     return 'You lose; scissors beat paper.'
    // } else if (playerchoice == 'scissors' && computerchoice == 'rock') {
    //     return 'You lose; rock beats scissors.'
    // } else if (playerchoice == 'scissors' && computerchoice == 'paper') {
    //     return 'You win; scissors beat paper.'
    // }

    // 1 means you win, 0 is for a tie, -1 means the computer wins
    if (playerchoice == computerchoice) {
        return TIE;
    } else if (playerchoice == 'rock' && computerchoice == 'paper') {
        return LOSE;
    } else if (playerchoice == 'rock' && computerchoice == 'scissors') {
        return WIN;
    } else if (playerchoice == 'paper' && computerchoice == 'rock') {
        return WIN;
    } else if (playerchoice == 'paper' && computerchoice == 'scissors') {
        return LOSE;
    } else if (playerchoice == 'scissors' && computerchoice == 'rock') {
        return LOSE;
    } else if (playerchoice == 'scissors' && computerchoice == 'paper') {
        return WIN;
    }
}

function game() {
    let user_choice;
    let score=0; 
    let result; 

    for (let i = 0; i <=4; i++) {
        user_choice = prompt("Do you pick rock, paper, or scissors?");
        result = playRound(user_choice, computerPlay()); 
        score += result;
        if (result == 1){
            console.log('You won this round!');
        } else if (result == -1) {
            console.log('You lost this round :(');
        } else {
            console.log('No winners this round! You both chose the same thing.');
        }

    }
    if (score > 0) {
        console.log("You won the best of five game! Congrats!");
    } else if (score < 0) {
        console.log("You lost the best of five game :(");
    } else {
        console.log("Wow, you tied with the computer! What are the odds of that?");
    }
}
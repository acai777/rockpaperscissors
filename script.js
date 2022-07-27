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

    // 1 means you win, 0 is for a tie, -1 means the computer wins
    if (playerchoice == computerchoice) {
        console.log(`Both players chose ${playerchoice}, this is a tie.`);
        return TIE;
    } else if (playerchoice == 'rock' && computerchoice == 'paper') {
        console.log('You lose; paper beats rock.');
        return LOSE;
    } else if (playerchoice == 'rock' && computerchoice == 'scissors') {
        console.log('You win; rock beats scissors.');
        return WIN;
    } else if (playerchoice == 'paper' && computerchoice == 'rock') {
        console.log('You win; paper beats rock.');
        return WIN;
    } else if (playerchoice == 'paper' && computerchoice == 'scissors') {
        console.log('You lose; scissors beat paper.');
        return LOSE;
    } else if (playerchoice == 'scissors' && computerchoice == 'rock') {
        console.log('You lose; rock beats scissors.');
        return LOSE;
    } else if (playerchoice == 'scissors' && computerchoice == 'paper') {
        console.log('You win; scissors beat paper.');
        return WIN;
    }
}

/*
function game() {
    let user_choice;
    let user_score=0; 
    let computer_score=0;
    let round_result; 

    for (let i = 0; i <=4; i++) {
        user_choice = prompt("Do you pick rock, paper, or scissors?");
        computer_choice = computerPlay().toLowerCase()
        round_result = playRound(user_choice, computer_choice); 

        if (round_result == WIN) {
            user_score += WIN;
        } else if (round_result == LOSE) {
            computer_score += WIN;
        } 
        console.log(`You chose ${user_choice}. The computer chose: ${computer_choice}`);
        console.log(`Your score: ${user_score}. Computer score: ${computer_score}`);
    }

    if (user_score > computer_score) {
        console.log("You won the best of five game! Congrats!");
    } else if (user_score < computer_score) {
        console.log("You lost the best of five game :(");
    } else {
        console.log("Wow, you tied with the computer! What are the odds of that?");
    }
}
*/

// Creating the three button's event listeners
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

rock.addEventListener("click", () => {
    playRound('rock', computerPlay())
});
paper.addEventListener("click", () => {
    playRound('paper', computerPlay())
});
scissors.addEventListener("click", () => {
    playRound('scissors', computerPlay())
});
/*
NOTE: 
running "rock.addEventListener("click", playRound('rock', computerPlay()));" does NOT work because you are running the playRound function ight when addEventListener is called, so it is now not a reference/call to a function, but the return value from playRound. Instead, we use an arrow function (because there is no parameter we are inserting, we can use blank parentheses with nothing wrapped inside). 
*/






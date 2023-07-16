/// Adding choices to the program
const playerSelection = userChoice();
const computerSelection = getComputerChoice();

///Adding a way to randomize choices for the computer 
function getComputerChoice() {
    let randomNumber = {1: 'rock', 2: 'paper', 3: 'scissors'}

    return randomNumber[Math.floor(Math.random() * 3) + 1];
    
}

///----------------------------------------------------------------------------
///Adding a choice function for the player and making case insensitive
function userChoice() {
    let userChoice = prompt('WELCOME TO ROCK PAPER SCISSORS! CHOOSE ONE FOR A CHANCE TO WIN!')
    userChoice = userChoice.toLowerCase()
    if(userChoice == 'rock' || userChoice == 'paper' || userChoice == 'scissors') {
        return userChoice;
    }
        
    else {
        alert('Not a valid choice!');
    }

}
    
///Creating rounds for computer and player

function playRound(playerSelection, computerSelection) {
   
    ///player-rock wins
    if (playerSelection === 'rock' && computerSelection === 'scissors' ) {
        return 'YOU WIN';
    }
    ///computer- rock wins
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'COMPUTER WINS! YOU LOSE!';
    }
    ///player-paper wins
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'YOU WIN';
    }
    ///computer- paper wins
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'COMPUTER WINS! YOU LOSE!';
    }
    ///player- scissor wins
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'YOU WIN!';
    }
    ///computer- scissor wins ***
    else if (playerSelection === 'paper' && computerSelection === 'scissors')  {
        return 'COMPUTER WINS! YOU LOSE!';
    }
    ///draw
    else if (playerSelection === computerSelection) {
            return 'draw';
    }


}
    let result = playRound(playerSelection, computerSelection);
    console.log(computerSelection);
    console.log(playerSelection);
    console.log(result);
    
    ///--------------------------------------------------
    //Game function- First to get 5 points wins 

    function game() {
        
    }

   



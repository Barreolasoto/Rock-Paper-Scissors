/// Adding choices to the program
const choices = ['Rock', 'Paper', 'Scissors'];

///Adding a way to randomize choices for the computer 
function getComputerChoice() {
    const randomNumber = (Math.floor(Math.random() * 3));

    return choices[randomNumber];
    
}

console.log(getComputerChoice());

///Creating rounds for computer and player
function playRound(playerSelection, computerSelection) {



}




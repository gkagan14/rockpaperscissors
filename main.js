function getComputerChoice(){
    let rock = 'Rock'
    let paper = 'Paper'
    let scissors = 'Scissors'

    if (Math.random() > .66){
        return rock.toUpperCase()
    } else if (Math.random() >.33 && Math.random()<.66) {
        return paper.toUpperCase()
    } else {
        return scissors.toUpperCase()
    }
     
} /*console.log(getComputerChoice())*/


const computerSelection = getComputerChoice();
const playerSelection = prompt('Rock, Paper or Scissors').toUpperCase();

function playRound(playerSelection, computerSelection){

    if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS'){
         alert(`Player wins with ROCK!. Player Chose ${playerSelection} and Computer selected ${computerSelection}`)
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){
         alert('Player wins with Scissors')
    } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK'){
        alert('Player wins with Paper')
    } else if (playerSelection == computerSelection){
        alert ('You Tied the Computer!')
    }else {

         alert('Computer Wins')
    }
    console.log(playerSelection, computerSelection)
    
} 

console.log(playRound(playerSelection, computerSelection))

let playerWins = 0
let computerWins = 0
function game(){
    for (let i = 0; i < 5; i++){
        if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS'){
            return playerWins + i
        }
        
    }
}console.log(game(playerWins))








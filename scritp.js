const selectionELement = document.querySelectorAll(".selection")
const winnerLabel = document.querySelector(".winner-text")
const playerImage = document.querySelector(".player-image")
const computerImage = document.querySelector(".computer-image")
const winnerBoard = document.querySelector(".winner-board")
const playerShowScore = document.querySelector(".player-score")
const comShowScore = document.querySelector(".computer-score")


//store score in every round
let playerScore = 0
let computerScore = 0



//computer selection represent from random number 0-3 and make condition to assign selection
const computerSelection = function(){
    let comChoice = Math.floor(Math.random() * 4)
    if(comChoice == 0){
        return "rock"
    }else if(comChoice == 1){
        return "paper"
    }else{
        return "scissor"
    }
}


//play function
function play(choice){
    const playerChoice = choice.target.id
    const comChoice = computerSelection()
    const winner = rockPaperScissor(playerChoice, comChoice)
    winnerLabel.innerHTML = winner.winner
    playerShowScore.innerHTML = `Player score : ${playerScore}`
    comShowScore.innerHTML = `Computer score : ${computerScore}`
    playerImage.src = `assets/${playerChoice}.png`
    computerImage.src = `assets/${comChoice}.png`
    winnerBoard.classList.add("active")

    
}

const rockPaperScissor = function(playerSelection, computerSelection){
    player = playerSelection
    com = computerSelection
    if(
        player == "rock" && com == "scissor" ||
        player == "paper" && com == "rock"   ||
        player == "scissor" && com == "paper" 
    ){
        playerScore++
       return {
        winner : "Player",
        playerSelected : player,
        computerSelected : com,

       }
    }else if(
        player == "paper" && com == "scissor" ||
        player == "scissor" && com == "rock"   ||
        player == "rock" && com == "paper" 
    ){
        computerScore++
        return {
            winner : "Computer",
            playerSelected : player,
            computerSelected : com,
        }
    }else{
        return {
            winner : "Draw",
            playerSelected : player,
            computerSelected : com,
        }
    }
}

selectionELement.forEach(choice => choice.addEventListener("click", play))

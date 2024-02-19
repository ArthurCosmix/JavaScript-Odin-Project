//computer selection
const computerSelection = function(){
    let comChoice = Math.floor(Math.random() * 4)
    if(comChoice == 0){
        return "Rock"
    }else if(comChoice == 1){
        return "Paper"
    }else{
        return "Scissor"
    }
}
//computer selection represent from random number 0-3 and make condition to assign selection

//store score in every round
const playerScore = []
const computerScore = []
let playerLastScore = null
let computerLastScore = null

const rockPaperScissor = function(playerSelection, computerSelection){
    const result = {}
    player = playerSelection.toLowerCase()
    com = computerSelection.toLowerCase()
    if(
        player == "rock" && com == "scissor" ||
        player == "paper" && com == "rock"   ||
        player == "scissor" && com == "paper" 
    ){
        playerScore.push(1)
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
        computerScore.push(1)
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

//score

//playe game 5 round
const runGame = function(){
    for(let i = 0; i < 5; i++){
        console.log(rockPaperScissor("rocK", computerSelection()))
    }

    playerLastScore = playerScore.reduce((total, score) => total += score , 0)
    computerLastScore = computerScore.reduce((total, score) => total += score , 0)


    if(playerLastScore > computerLastScore){
        console.log({
            theWinner : "Player",
            comTotalScore : computerLastScore,
            playerTotalScore : playerLastScore,
            text : "Congratulation Player won!!"
        })
    }
    else if( computerLastScore > playerLastScore){
        console.log({
            theWinner : "Computer",
            comTotalScore : computerLastScore,
            playerTotalScore : playerLastScore,
            text : "Congratulation Computer won!!"
        })
    }
    else{
        console.log({
            theWinner : "This competition is Draw",
            comTotalScore : computerLastScore,
            playerTotalScore : playerLastScore,
            text : "Congratulation you two won!!"
        })
    }
}
runGame()
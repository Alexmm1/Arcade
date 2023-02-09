let board = Array.from(document.getElementsByClassName('cell'))
let restart = document.getElementsByTagName('button')
let spaces = Array(9).fill(null)
let x_test = "X"
let o_test = "O"
let currentPlayer = x_test
let playerText = document.getElementById('playerText')
let playername = document.getElementById('player-title')
let playername2 = document.getElementById('player-title2')
const winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
const startGame = () => {
    board.forEach(cell => cell.addEventListener('click', boardClick))
}
function boardClick(e) {
    const id = e.target.id
    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer
        currentPlayer = currentPlayer === x_test ? o_test : x_test

        if(playerHasWon() !==false){
            playerText = `$(currentPlayer) has won`
        }
    }
}

//restart.addEventListener('click', restartBtn)
function restartBtn(){
    spaces.fill(null)

    board.forEach( board => {
        board.innerText = ''
        currentPlayer = x_test
    })
}
function playerHasWon() {
    for (const condition of winningCombo) {
        let [a, b, c] = condition  

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
            return [a,b,c]
        }
    }
    return false
}

startGame()
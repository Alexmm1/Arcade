let board = Array.from(document.getElementsByClassName('cell'))
let restart = document.getElementsByClassName('game-restart')
let spaces = Array(9).fill(null)
let x_test = "X"
let o_test = "O"
let currentPlayer = x_test
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
console.log(spaces)
const startGame = () => {
    board.forEach(board => board.addEventListener('click', boardClick))
}
function boardClick(e) {
    console.log(e.target)
    // const id = e.target.id
    // if(!spaces[id]){
    //     spaces[id] = currentPlayer
    //     e.target.innerText = currentPlayer
    //     currentPlayer = currentPlayer == x_test ? o_test : x_test
    // }
}
// function playerHasWon() {
//     for (const condition of winningCombo) {
//         let [a, b, c] = condition
//     }
// }

startGame()
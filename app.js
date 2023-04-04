let board = Array.from(document.getElementsByClassName('cell'))
let restartBtn = document.getElementById('restart')
let spaces = Array(9).fill(null)
let x_test = "X"
let o_test = "O"
let currentPlayer = x_test
let player1Name = '';
let player2Name = '';
const playerName1Input = document.getElementById('playerName1Input')
const playerName2Input = document.getElementById('playerName2Input')
const playerName1Btn = document.getElementById('playerName1Btn')
const playerName2Btn = document.getElementById('playerName2Btn')
let playerName = document.getElementById('player-title')
let playerName2 = document.getElementById('player-title2')
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
        const winner = playerHasWon();
        if(winner !==false){
            playerText = `${winner} has won!`
            alert(playerText)
            return
        }
        currentPlayer = currentPlayer == x_test ? o_test : x_test
        if (currentPlayer == o_test) {
            setTimeout(() => computerMove(), 1000)
        }
        updatePlayerName()
    } 

}

function computerMove() {
    let id
    do {
        id = Math.floor(Math.random() * 9)
    } while (spaces[id])
    spaces[id] = currentPlayer
    document.getElementById(id).innerText = currentPlayer

    if(playerHasWon() !==false){
        playerText = `${currentPlayer} has won!`
        console.log(playerText)
        alert(playerText)
        return
    }
    currentPlayer = currentPlayer == x_test ? o_test : x_test
    updatePlayerName()
}

restartBtn.addEventListener('click',restart)
function restart(){
    spaces.fill(null)

    board.forEach( board => {
        board.innerText = ''
    })
    currentPlayer = x_test
}

function playerHasWon() {
    for (const condition of winningCombo) {
        let [a, b, c] = condition;

        if (spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]) {
            return currentPlayer === x_test ? player1Name : player2Name;
        }
    }

    return false;
}

function updatePlayerName() {
    if (player1 && player2) {
        if (currentPlayer == x_test) {
            playerName.innerText = player1
            playerName2.innerText = ''
        } else {
            playerName.innerText = ''
            playerName2.innerText = player2
        }
    }
}

playerName1Btn.addEventListener('click', function(evt){
    evt.preventDefault();
    player1Name = document.getElementById('player-title').value;
    playerName.innerText = `${player1Name}: ${x_test}`;
});

playerName2Btn.addEventListener('click', function(evt){
    evt.preventDefault();
    player2Name = document.getElementById('player-title2').value;
    playerName2.innerText = `${player2Name}: ${o_test}`;
});
startGame()
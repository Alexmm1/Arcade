// const 0 = document.getElementById('0')
// const 1 = document.getElementById('1')
// const 2 = document.getElementById('2')
// const 3 = document.getElementById('3')
// const 4 = document.getElementById('4')
// const 5 = document.getElementById('5')
// const 6 = document.getElementById('6')
// const 7 = document.getElementById('7')
// const 8 = document.getElementById('8')
const board = document.getElementsByClassName('board')
const restart = document.getElementsByClassName('game-restart')
let state
function buildInitialState() {
    restart.addEventListener('click'); {

    }
}
function renderState(){

}

function onBoardClick(){
    renderState()
}

board.addEventListener('click', onBoardClick); {

}

const gameState = {
    players: ['x','o'],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
}
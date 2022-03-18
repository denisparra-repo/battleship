function sum(a, b) {
    return a + b;
}
let board = [];
let numberOfPlayers = 0;
function createBoard(n , m) {
   for (let i = 0; i < n; i++) {
       let row = [];
       for (let j = 0; j<m; j++) {
           row.push('-');
       }
       board.push(row)
   }
}

function getRowLength() {
    return board.length;
}

function getColumnLength() {
    return board[0].length;
}

function setShip(...positions) {
    for(let i = 0; i < positions.length; i++) {
        const position = positions[i];
        board[position[0]][position[1]] = 'S';
    }
}
function isShipThere(position) {
    if (board[position[0]][position[1]] === 'S') {
        return true;
    }
}

function createPlayers(players) {
    const player1 = players[0];
    const player2 = players[1];
    numberOfPlayers = 2;
}

function getNumberOfPlayers() {
    return numberOfPlayers;
}

function getBoard() {
    return [...board];
}

module.exports = {
    sum,
    createBoard,
    getRowLength,
    getColumnLength,
    setShip,
    isShipThere,
    createPlayers,
    getNumberOfPlayers,
    getBoard,
};
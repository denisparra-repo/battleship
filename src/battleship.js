function sum(a, b) {
    return a + b;
}
let numberOfPlayers = 0;
function createBoard(n , m) {
    const board = [];
   for (let i = 0; i < n; i++) {
       let row = [];
       for (let j = 0; j<m; j++) {
           row.push('-');
       }
       board.push(row)
   }
   return board;
}

function getRowLength(board) {
    return board.length;
}

function getColumnLength(board) {
    return board[0].length;
}

function setShip(board, positions) {
    for(let i = 0; i < positions.length; i++) {
        const position = positions[i];
        board[position[0]][position[1]] = 'S';
    }
}
function isShipThere(board, position) {
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

function getShipPositions(board) {
   const result = [];
   for (let i = 0; i < board.length; i++) {
       for (let j = 0; j < board[i].length; j++) {
           if (board[i][j] === 'S') {
               result.push([i,j])
           }
       }
   }
   return result;
}

function areThereShips(board) {
    return getShipPositions(board).length > 0;
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
    getShipPositions,
    areThereShips
};
const  {createPlayer} = require("./battleShipPlayer");
const {createBoard, setShip, getShipPositions} = require("./battleship");

let playerOne;
let playerTwo;
let turn;

function initializeGame() {
    playerOne = createPlayer('player 1')
    playerTwo = createPlayer('player 2')
    const boardOne = createBoard(5, 5);
    const boardTwo = createBoard(5, 5);
    playerOne.board = boardOne;
    playerTwo.board = boardTwo;
    turn = 'player 1';
}

function getPlayerTurn() {
    return turn;
}

function getPlayerOne() {
    return {...playerOne}
}

function getPlayerTwo() {
    return {...playerTwo}
}

const assignShips = (playerName, ships) => {
    const playerToAssign = playerOne.firstName === playerName ? playerOne : playerTwo
    ships.forEach(positions => setShip(playerToAssign.board, positions));
};

const shoot = (position) => {
    const affectedPlayer = turn === 'player 1' ? playerTwo : playerOne;
    if (affectedPlayer.board[position[0]][position[1]] === 'S') {
        affectedPlayer.board[position[0]][position[1]] = 'X'
    } else {
        turn = affectedPlayer.firstName;
    }
    return affectedPlayer.board[position[0]][position[1]];
}

module.exports = {
    initializeGame,
    getPlayerOne,
    getPlayerTwo,
    assignShips,
    shoot,
    getPlayerTurn
}
const  {createPlayer} = require("./battleShipPlayer");
const {createBoard, setShip} = require("./battleship");

let playerOne;
let playerTwo;

function initializeGame() {
    playerOne = createPlayer('player 1')
    playerTwo = createPlayer('player 2')
    const boardOne = createBoard(5, 5);
    const boardTwo = createBoard(5, 5);
    playerOne.board = boardOne;
    playerTwo.board = boardTwo;
}

function getPlayerOne() {
    return {...playerOne}
}

function getPlayerTwo() {
    return {...playerTwo}
}

const assignShips = (playerName, ships) => {
    if (playerOne.firstName === playerName) {
        ships.forEach(positions => setShip(playerOne.board, positions ));
    }else {
        ships.forEach(positions => setShip(playerTwo.board, positions ));
    }
};

module.exports = {
    initializeGame,
    getPlayerOne,
    getPlayerTwo,
    assignShips,
}
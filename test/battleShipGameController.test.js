const {initializeGame, getPlayerOne, getPlayerTwo, assignShips, shoot, getPlayerTurn} = require("../src/battleShipGameController");
const {isShipThere} = require("../src/battleship");

beforeEach(() => {
    initializeGame();
    assignShips('player 1',[[[4,0], [3,0], [2,0]],[[1,2], [1,3]]]);
    assignShips('player 2',[[[4,0], [3,0], [2,0]],[[1,2], [1,3]]]);
})

test('initialize game', () => {
    expect(getPlayerOne()).toBeDefined();
    expect(getPlayerTwo()).toBeDefined();
});

test('add ships to board ', () => {
    const player1 = getPlayerOne();
    const player2 = getPlayerOne();
    expect(isShipThere(player1.board, [4,0])).toBeTruthy();
    expect(isShipThere(player2.board, [4,0])).toBeTruthy();
});

test('successful shoot to ship', () => {
    const shootSuccessful = shoot([4,0]);
    expect(shootSuccessful).toEqual('X')
})

test ('failed shoot to ship', () => {
    const shootSuccessful = shoot([1,0]);
    expect(shootSuccessful).toEqual('-')
})

test ('kill a ship', () => {
    let playerTurn = getPlayerTurn();
    expect(playerTurn).toEqual('player 1');
    const shoot1 = shoot([1, 2]);
    playerTurn = getPlayerTurn();
    expect(playerTurn).toEqual('player 1');
    const shoot2 = shoot([1, 3]);
    playerTurn = getPlayerTurn();
    expect(shoot1).toEqual('X');
    expect(shoot2).toEqual('X');
    expect(playerTurn).toEqual('player 1');
})

test( 'win the game', () => {
    shoot([4,0]);
    shoot([1,2]);
    shoot([3,0]);
    shoot([1,3]);
    shoot([2,0]);

})

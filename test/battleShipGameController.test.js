const {initializeGame, getPlayerOne, getPlayerTwo, assignShips} = require("../src/battleShipGameController");
const {isShipThere} = require("../src/battleship");

test('initialize game', () => {
    initializeGame();
    expect(getPlayerOne()).toBeDefined();
    expect(getPlayerTwo()).toBeDefined();
});
test('add ships to board ', () => {
    assignShips('player 1',[[[4,0], [3,0], [2,0]],[[1,2], [1,3]]]);
    const player1 = getPlayerOne();
    expect(isShipThere(player1.board, [4,0] )).toBeTruthy();
});
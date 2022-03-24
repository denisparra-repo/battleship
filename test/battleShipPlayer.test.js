const { createBoard, getRowLength, getColumnLength} = require("../src/battleship");
const { createPlayer } = require("../src/battleShipPlayer");

test('get player', () => {
    const player = createPlayer('player1');
    expect(player['firstName']).toBe('player1');
});

test('assign board to player', () => {
    const board = createBoard(5, 5);
    const player = createPlayer('player1');
    player['board'] = board;
    expect(player.board).toBeDefined();
    expect(getRowLength(player.board)).toBe(5);
    expect(getColumnLength(player.board)).toBe(5);
})
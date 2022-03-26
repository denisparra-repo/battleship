const {sum, createBoard, getColumnLength, getRowLength, setShip, isShipThere, createPlayers,getNumberOfPlayers, getBoard  } = require('../src/battleship')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('create a board 5 * 5', () => {
    const board = createBoard(5,5);
    expect(getRowLength(board)).toBe(5)
    expect(getColumnLength(board)).toBe(5)
});

test('set ship on the board', () => {
    const board = createBoard(5,5);
    setShip(board, [[0,0], [0,1]]);
    setShip(board, [[4,0], [3,0], [2,0]]);
    expect(isShipThere(board,[0,0])).toBeTruthy();
    expect(isShipThere(board, [0,1])).toBeTruthy();
    expect(isShipThere(board, [4,0])).toBeTruthy();
    expect(isShipThere(board,[3,0])).toBeTruthy();
    expect(isShipThere(board,[2,0])).toBeTruthy();
});


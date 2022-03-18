const {sum, createBoard, getColumnLength, getRowLength, setShip, isShipThere, createPlayers,getNumberOfPlayers, getBoard  } = require('../src/battleship')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('create a board 5 * 5', () => {
    createBoard(5,5);
    expect(getRowLength()).toBe(5)
    expect(getColumnLength()).toBe(5)
});

test('set ship on the board', () => {
    createBoard(5,5);
    setShip([0,0], [0,1]);
    setShip([4,0], [3,0], [2,0]);
    expect(isShipThere([0,0])).toBeTruthy();
    expect(isShipThere([0,1])).toBeTruthy();
    expect(isShipThere([4,0])).toBeTruthy();
    expect(isShipThere([3,0])).toBeTruthy();
    expect(isShipThere([2,0])).toBeTruthy();
});

test('get Board', () => {
   createBoard(5, 5);
   const board = getBoard();
   expect(board).toBeDefined();
})

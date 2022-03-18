let numberOfPlayers = 0;

function createPlayer(playerName) {
    const player = {};
    player['firstName'] = playerName;
    player['board'] = [];
    return player
}

function getPlayerByName(playerName) {
    const player = createPlayer(playerName);
    return player;
}

module.exports = {
    createPlayer,
    getPlayerByName,
}
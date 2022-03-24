function createPlayer(playerName) {
    const player = {};
    player['firstName'] = playerName;
    player['board'] = [];
    return player
}

module.exports = {
    createPlayer,
}
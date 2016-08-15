import {fromJS, List} from 'immutable';

// players is an immutable list of players
// returns an immutable list of pair matches
export function Matcher(players) {
    const playerIDs = players.map(player => player.get('id'));
    let array = [];
    for (var i = 0; i < Math.floor(playerIDs.size / 2); i++) {
        array.push([playerIDs.get(2 * i), playerIDs.get(2 * i + 1)]);
    }
    return fromJS(array);
}

// playerID is an int
// players is an immutable list of players
// returns a playerID of the one matched with the specified player
export function PlayerMatcher(playerID, players) {
    const playerIDs = players.map(player => player.get('id'))
        .filter(id => id !== playerID);
    return playerIDs.get(Math.floor(Math.random() * playerIDs.size));
}
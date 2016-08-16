import {fromJS, List} from 'immutable';

// players is an immutable list of players
// returns an immutable list of pair matches
// optional parameter playerID is an int
// if set, returns a immutable list of the playerID and the matched player's id
export default function DummyMatcher(players, playerID) {
    if (players.size === 1) {
        return null;
    }
    if (playerID) {
        const playerIDs = players.map(player => player.get('id'))
            .filter(id => id !== playerID);
        return List.of(List.of(playerID, playerIDs.get(Math.floor(Math.random() * playerIDs.size))));
    } else {
        const playerIDs = players.map(player => player.get('id'));
        let array = [];
        for (var i = 0; i < Math.floor(playerIDs.size / 2); i++) {
            array.push([playerIDs.get(2 * i), playerIDs.get(2 * i + 1)]);
        }
        return fromJS(array);
    }
}
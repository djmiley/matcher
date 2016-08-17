import * as actions from '../constants/actions';

let matcher = null;

export function matcher(setMatcher) {
    if (!setMatcher) {
        return matcher;
    }
    matcher = setMatcher;
}

export function addPlayer(player) {
    return {
        type: actions.ADD_PLAYER,
        player
    }
}

export function match(players, playerID) {
    const matchedPlayers = matcher ? matcher(players, playerID) : null;
    return {
        type: actions.MATCH,
        matchedPlayers
    }
}
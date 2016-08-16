import * as actions from '../constants/actions';

import DummyMatcher from '../logic/DummyMatcher';
import RandomPlayer from '../logic/RandomPlayer';

let matcher = DummyMatcher;

export function matcher(setMatcher) {
    if (!setMatcher) {
        return matcher;
    }
    matcher = setMatcher;
}

export function addPlayer() {
    const player = new RandomPlayer();
    return {
        type: actions.ADD_PLAYER,
        player
    }
}

export function match(players, playerID) {
    const matchedPlayers = matcher(players, playerID);
    return {
        type: actions.MATCH,
        matchedPlayers
    }
}
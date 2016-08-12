import * as actions from '../constants/actions';

import RandomPlayer from '../logic/RandomPlayer';

export function matchPlayer(playerID) {
    return {
        type: actions.MATCH_PLAYER,
        playerID
    }
}

export function addPlayer() {
    const player = new RandomPlayer();
    return {
        type: actions.ADD_PLAYER,
        player
    }
}

export function match() {
    return {
        type: actions.MATCH
    }
}
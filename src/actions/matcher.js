import * as actions from '../constants/actions';

export function matchPlayer(playerID) {
    return {
        type: actions.MATCH_PLAYER,
        playerID
    }
}

export function addPlayer(player) {
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
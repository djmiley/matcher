import * as actions from '../constants/actions';

export function matchPlayer(playerID) {
    return {
        type: actions.MATCH_PLAYER,
        playerID
    }
}

export function generatePlayer() {
    return {
        type: actions.GENERATE_PLAYER
    }
}

export function match() {
    return {
        type: actions.MATCH
    }
}
import * as actions from '../constants/actions';

import {Matcher, PlayerMatcher} from '../logic/Algorithm';
import RandomPlayer from '../logic/RandomPlayer';

export function matchPlayer(playerID, players) {
    const matchedPlayerID = PlayerMatcher(playerID, players);
    return {
        type: actions.MATCH_PLAYER,
        playerID,
        matchedPlayerID
    }
}

export function addPlayer() {
    const player = new RandomPlayer();
    return {
        type: actions.ADD_PLAYER,
        player
    }
}

export function match(players) {
    const matches = Matcher(players);
    return {
        type: actions.MATCH,
        matches
    }
}
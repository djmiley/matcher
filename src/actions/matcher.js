import * as actions from '../constants/actions';

import MatchingAlgorithm from '../logic/MatchingAlgorithm';
import PlayerMatcher from '../logic/PlayerMatcher';
import RandomPlayer from '../logic/RandomPlayer';

export function matchPlayer(playerID, players) {
    console.log(players);
    console.log(playerID);
    const match = PlayerMatcher(playerID, players);
    return {
        type: actions.MATCH_PLAYER,
        match
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
    console.log(players);
    const matches = MatchingAlgorithm(players);
    return {
        type: actions.MATCH,
        matches
    }
}
import {Map} from 'immutable';

import * as actions from '../constants/actions';

function setState(state, newState) {
    return state.mergeDeep(newState);
}

function matchPlayer(state, match) {
    return state;
}

function addPlayer(state, player) {
    const nextId = state.get('players').map(
        (item) => item.get('id')
    ).max() + 1;
    let newPlayer = player;
    newPlayer.id = nextId;
    return state.update('players', players => players.push(Map(newPlayer)));
}

function match(state, matches) {
    return state;
}

export default function(state = Map(), action) {
    switch (action.type) {
        case actions.SET_STATE:
            return setState(state, action.state);
        case actions.MATCH_PLAYER:
            return matchPlayer(state, action.match);
        case actions.ADD_PLAYER:
            return addPlayer(state, action.player);
        case actions.MATCH:
            return match(state, action.matches);
        default:
            return state;
    }
    return state;
}
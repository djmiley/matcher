import {Map} from 'immutable';

import * as actions from '../constants/actions';

function setState(state, newState) {
    return state.mergeDeep(newState);
}

function matchPlayer(state, playerID) {
    console.log('attempting to match playerID ' + playerID);
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

function match(state) {
    console.log('attempting to match players');
    return state;
}

export default function(state = Map(), action) {
    switch (action.type) {
        case actions.SET_STATE:
            return setState(state, action.state);
        case actions.MATCH_PLAYER:
            return matchPlayer(state, action.playerID);
        case actions.ADD_PLAYER:
            return addPlayer(state, action.player);
        case actions.MATCH:
            return match(state);
        default:
            return state;
    }
    return state;
}
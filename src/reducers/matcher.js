import {Map} from 'immutable';

import * as actions from '../constants/actions';

function setState(state, newState) {
    return state.mergeDeep(newState);
}

function matchPlayer(state, playerID) {
    console.log('attempting to match playerID ' + playerID);
    return state;
}

function generatePlayer(state) {
    console.log('player generated');
    return state;
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
        case actions.GENERATE_PLAYER:
            return generatePlayer(state);
        case actions.MATCH:
            return match(state);
        default:
            return state;
    }
    return state;
}
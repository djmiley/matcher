import {Map} from 'immutable';

import * as actions from '../constants/actions';

function setState(state, newState) {
    return state.mergeDeep(newState);
}

function matchPlayer(state, playerID, matchedPlayerID) {
    const matchedIDs = [playerID, matchedPlayerID];
    return state.update('players', players => players.filter(player => !matchedIDs.includes(player.get('id'))));
}

function addPlayer(state, player) {
    let nextId = 1;
    if (state.get('players').size > 0) {
        nextId += state.get('players').map((item) => item.get('id')).max();
    }
    let newPlayer = player;
    newPlayer.id = nextId;
    return state.update('players', players => players.push(Map(newPlayer)));
}

function match(state, matchedPlayers) {
    const matchedIDs = [].concat.apply([], matchedPlayers.toJS());
    return state.update('players', players => players.filter(player => !matchedIDs.includes(player.get('id'))));
}

export default function(state = Map(), action) {
    switch (action.type) {
        case actions.SET_STATE:
            return setState(state, action.state);
        case actions.MATCH_PLAYER:
            return matchPlayer(state, action.playerID, action.matchedPlayerID);
        case actions.ADD_PLAYER:
            return addPlayer(state, action.player);
        case actions.MATCH:
            return match(state, action.matchedPlayers);
        default:
            return state;
    }
    return state;
}
import {List, Map} from 'immutable';

import * as actions from '../constants/actions';

import Match from '../logic/Match';

function getNextID(state, accessor, initialValue) {
    let nextId = initialValue === parseInt(initialValue, 10) ? initialValue : 0;
    if (state.get(accessor).size > 0 && nextId <= state.get(accessor).map(item => item.get('id')).max()) {
        nextId = state.get(accessor).map(item => item.get('id')).max() + 1;
    } else {
        nextId++;
    }
    return nextId;
}

function setState(state, newState) {
    return state.mergeDeep(newState);
}

function matchPlayer(state, playerID, matchedPlayerID) {
    const player = state.get('players').find(
        player => player.get('id') === playerID
    );
    const matchedPlayer = state.get('players').find(
        player => player.get('id') === matchedPlayerID
    );
    const nextId = getNextID(state, 'matches');
    const newMatch = new Match(nextId, player, matchedPlayer, true);

    return state.update('players', players => players.filter(player => !List.of(playerID, matchedPlayerID).includes(player.get('id'))))
        .update('matches', matches => matches.push(newMatch));
}

function addPlayer(state, player) {
    const nextId = getNextID(state, 'players');
    let newPlayer = player;
    newPlayer.id = nextId;
    return state.update('players', players => players.push(Map(newPlayer)));
}

function match(state, matchedPlayers) {
    let nextId;

    const newMatches = matchedPlayers.map(match => {
        let player = state.get('players').find(
            player => player.get('id') === match.get(0)
        );
        let matchedPlayer = state.get('players').find(
            player => player.get('id') === match.get(1)
        );
        nextId = getNextID(state, 'matches', nextId);

        return new Match(nextId, player, matchedPlayer, true);
    });

    return state.update('players', players => players.filter(player => !matchedPlayers.flatten().includes(player.get('id'))))
        .update('matches', matches => matches.concat(newMatches));
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
import {Map} from 'immutable';

import * as actions from '../constants/actions';

import Match from '../logic/Match';

function setState(state, newState) {
    return state.mergeDeep(newState);
}

function matchPlayer(state, playerID, matchedPlayerID) {
    // TODO - refactor
    const matchedIDs = [playerID, matchedPlayerID];
    
    const playerIndex = state.get('players').findIndex(
        (player) => player.get('id') === playerID
    );
    const player = state.get('players')
        .get(playerIndex);

    const matchedPlayerIndex = state.get('players').findIndex(
        (player) => player.get('id') === matchedPlayerID
    );
    const matchedPlayer = state.get('players')
        .get(matchedPlayerIndex);
    
    let nextId = 1;
    if (state.get('matches').size > 0) {
        nextId += state.get('matches').map((item) => item.get('id')).max();
    }
    
    const newMatch = new Match(nextId, player, matchedPlayer, true);
    return state.update('players', players => players.filter(player => !matchedIDs.includes(player.get('id'))))
        .update('matches', matches => matches.push(newMatch));
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
    // TODO - refactor
    const matchedIDs = [].concat.apply([], matchedPlayers.toJS());

    let nextId = 0;
    if (state.get('matches').size > 0) {
        nextId += state.get('matches').map((item) => item.get('id')).max();
    }

    const newMatches = matchedPlayers.map(match => {
        let playerIndex = state.get('players').findIndex(
            (player) => player.get('id') === match.get(0)
        );
        let player = state.get('players')
            .get(playerIndex);

        let matchedPlayerIndex = state.get('players').findIndex(
            (player) => player.get('id') === match.get(1)
        );
        let matchedPlayer = state.get('players')
            .get(matchedPlayerIndex);

        nextId ++;

        return new Match(nextId, player, matchedPlayer, true);
    });

    return state.update('players', players => players.filter(player => !matchedIDs.includes(player.get('id'))))
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
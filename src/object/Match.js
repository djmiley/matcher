import {List, Map} from 'immutable';

export default function Player(id, playerOne, playerTwo, immutable) {
    const players = immutable ? List.of(playerOne, playerTwo) : [playerOne, playerTwo];
    const match = {id, players};
    return immutable ? Map(match) : match;
}
import {Map} from 'immutable';

export default function Player(id, name, rating, map) {
    const player = {id, name, rating};
    return map ? Map(player) : player;
}
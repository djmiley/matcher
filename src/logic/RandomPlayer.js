import {Map} from 'immutable';

export default function RandomPlayer(map) {
    const player = {
        name: Math.round((Math.pow(36, 11) - Math.random() * Math.pow(36, 10))).toString(36).slice(1),
        rating: Math.ceil(1000 * Math.random())
    };
    return map ? Map(player) : player;
}
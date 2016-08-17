import Match from './object/Match';
import Player from './object/Player';

import DummyMatcher from './logic/DummyMatcher';
import RandomPlayer from './logic/RandomPlayer';
import RandomPlayerFeed from './logic/RandomPlayerFeed';

const identifyingAccessor = 'id';
const displayAccessor = 'name';
const valueAccessor = 'rating';

export const initialState = {
    players: [new Player(1, 'Drew', 10),
        new Player(2, 'James', 20),
        new Player(3, 'Miley', 30)],
    matches: [new Match(1, new Player(4, 'One', 50), new Player(5, 'Two', 60))]
};

export const matcher = DummyMatcher;

export const playerFeed = RandomPlayerFeed;
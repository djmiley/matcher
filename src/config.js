import DummyMatcher from './logic/DummyMatcher';
import RandomPlayer from './logic/RandomPlayer';
import RandomPlayerFeed from './logic/RandomPlayerFeed';

const identifyingAccessor = 'id';
const displayAccessor = 'name';
const valueAccessor = 'rating';

export const matcher = DummyMatcher;

export const playerFeed = RandomPlayerFeed;

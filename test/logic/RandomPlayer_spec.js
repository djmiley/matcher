import {assert, expect} from 'chai';
import {Map} from 'immutable';

import RandomPlayer from '../../src/logic/RandomPlayer';

describe('RandomPlayer', () => {

    it('should return a plain JS random player by default', () => {
        const randomPlayer = new RandomPlayer();

        assert.ok(randomPlayer.name);
        assert.ok(randomPlayer.rating);
    });

    it('should return an immutable map if passing a parameter of true', () => {
        const randomPlayer = new RandomPlayer(true);

        assert.ok(randomPlayer.get('name'));
        assert.ok(randomPlayer.get('rating'));
    });

    it('should return a name string of length 10 - plain js', () => {
        const randomPlayer = new RandomPlayer();

        expect(randomPlayer.name.length).to.equal(10);
    });

    it('should return a name string of length 10 - immutable map', () => {
        const randomPlayer = new RandomPlayer(true);

        expect(randomPlayer.get('name').length).to.equal(10);
    });

    it('should return a rating value between 1 and 1000 inclusive', () => {
        const randomPlayer = new RandomPlayer();

        expect(randomPlayer.rating).to.be.within(1, 1000);
    });

    it('should return a name string of length 10 - immutable map', () => {
        const randomPlayer = new RandomPlayer(true);

        expect(randomPlayer.get('rating')).to.be.within(1, 1000);
    });

});
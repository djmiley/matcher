import {assert, expect} from 'chai';
import {Map} from 'immutable';

import RandomPlayer from '../../src/logic/RandomPlayer';

describe('RandomPlayer', () => {

    let randomPlayer;

    describe('Plain JS', () => {

        before(() => {
            randomPlayer = new RandomPlayer();
        });

        it('should return a plain JS random player by default', () => {
            assert.ok(randomPlayer.name);
            assert.ok(randomPlayer.rating);
        });

        it('should return a name string of length 10', () => {
            expect(randomPlayer.name.length).to.equal(10);
        });

        it('should return a rating value between 1 and 1000 inclusive', () => {
            expect(randomPlayer.rating).to.be.within(1, 1000);
        });

    });

    describe('Immutable Map', () => {

        before(() => {
            randomPlayer = new RandomPlayer(true);
        });

        it('should return an immutable map if passing a parameter of true', () => {
            assert.ok(randomPlayer.get('name'));
            assert.ok(randomPlayer.get('rating'));
        });

        it('should return a name string of length 10', () => {
            expect(randomPlayer.get('name').length).to.equal(10);
        });

        it('should return a name string of length 10', () => {
            expect(randomPlayer.get('rating')).to.be.within(1, 1000);
        });

    });

});
import {expect} from 'chai';

import sinon from 'sinon';

import RandomPlayerFeed from '../../src/logic/RandomPlayerFeed';

describe('RandomPlayerFeed', () => {

    let addPlayerSpy;
    let clock;

    beforeEach(() => {
        addPlayerSpy = sinon.spy();
        clock = sinon.useFakeTimers();
        RandomPlayerFeed(addPlayerSpy);
        clock.tick(10000);
    });

    afterEach(() => {
        clock.restore();
    });

    it('should call the addPlayer function every second', () => {
        expect(addPlayerSpy.callCount).to.equal(10);
    });

    it('should call the addPlayer function with a random player name each time', () => {
        let playerName;
        addPlayerSpy.args.forEach(player => {
            expect(player[0].name).to.not.equal(playerName, 'This failure is probably due to random strings being selected consecutively; please re-run');
            playerName = player[0].name;
        });
    });

    it('should call the addPlayer function with a random player rating each time', () => {
        let playerRating;
        addPlayerSpy.args.forEach(player => {
            expect(player[0].rating).to.not.equal(playerRating, 'This failure is probably due to random numbers being selected consecutively; please re-run');
            playerRating = player[0].rating;
        });
    })

});
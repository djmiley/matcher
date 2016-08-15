import {assert, expect} from 'chai';
import {List, Map} from 'immutable';

import {Matcher, PlayerMatcher} from '../../src/logic/Algorithm';
import Player from '../../src/logic/Player';

describe('Matcher', () => {

    it('should return an immutable list of pairwise array', () => {
        const players = List.of(
            new Player(1, 'Drew', 10, true),
            new Player(2, 'James', 20, true),
            new Player(3, 'Miley', 30, true),
            new Player(4, 'Player', 40, true)
        );

        const matches = Matcher(players);

        expect(List.isList(matches)).to.be.true;
        expect(matches.get(0).size).to.equal(2);
        expect(matches.get(1).size).to.equal(2);
    });

    it('should have a size of the number of players divided by two floored', () => {
        const players1 = List.of(
            new Player(1, 'Drew', 10, true),
            new Player(2, 'James', 20, true),
            new Player(3, 'Miley', 30, true),
            new Player(4, 'Player', 40, true)
        );

        const matches1 = Matcher(players1);

        expect(matches1.size).to.equal(2);

        const players2 = List.of(
            new Player(1, 'Drew', 10, true),
            new Player(2, 'James', 20, true),
            new Player(3, 'Miley', 30, true)
        );

        const matches2 = Matcher(players2);

        expect(matches2.size).to.equal(1);
    });

});

describe('PlayerMatcher', () => {

    it('should return a single integer not equal to the inputted playerID', () => {
        const players = List.of(
            new Player(1, 'Drew', 10, true),
            new Player(2, 'James', 20, true),
            new Player(3, 'Miley', 30, true),
            new Player(4, 'Player', 40, true)
        );

        const matchedPlayerID = PlayerMatcher(2, players);

        expect(matchedPlayerID).to.not.equal(2);
        expect(matchedPlayerID).to.be.within(1, 4);
    });

});
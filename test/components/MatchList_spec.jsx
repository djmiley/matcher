import {expect} from 'chai';
import {List} from 'immutable';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const {renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate} = TestUtils;

import MatchList from '../../src/components/MatchList';

import Match from '../../src/logic/Match';
import Player from '../../src/logic/Player';

describe('PlayerList', () => {

    describe('Rendering', () => {

        it('should render a list of all the matches', () => {
            const matches = List.of(
                new Match(1, new Player(1, 'Drew', 10, true), new Player(2, 'James', 20, true), true),
                new Match(2, new Player(3, 'Miley', 30, true), new Player(4, 'Test', 40, true), true)
            );

            const component = renderIntoDocument(
                <MatchList matches={matches} />
            );
            const matchList = scryRenderedDOMComponentsWithTag(component, 'li');

            expect(matchList.length).to.equal(matches.size);
        });

    });

});
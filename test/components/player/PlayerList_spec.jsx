import {expect} from 'chai';
import {List} from 'immutable';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const {renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate} = TestUtils;

import PlayerList from '../../../src/components/player/PlayerList';

import Player from '../../../src/object/Player';

describe('PlayerList', () => {

    describe('Rendering', () => {

        it('renders a list of the players', () => {
            const players = List.of(
                new Player(1, 'Drew', 10, true),
                new Player(2, 'James', 20, true),
                new Player(3, 'Miley', 30, true)
            );
            const component = renderIntoDocument(
                <PlayerList players={players} />
            );
            const playerList = scryRenderedDOMComponentsWithTag(component, 'li');

            expect(playerList.length).to.equal(players.size);
        });

    });

});
import {expect} from 'chai';
import {List, Map} from 'immutable';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const {renderIntoDocument,
    scryRenderedDOMComponentsWithClass,
    scryRenderedDOMComponentsWithTag} = TestUtils;

import MatchView from '../../src/components/MatchView';

describe('MatchView', () => {


    describe('Rendering', () => {

        let matchPlayers;
        let component;

        before(() => {
            matchPlayers = List.of(
                Map({name: 'One'}),
                Map({name: 'Two'})
            );

            component = renderIntoDocument(
                <MatchView matchPlayers={matchPlayers} />
            );
        });

        it('should display the name of the first player', () => {
            const firstPlayerNameLabel = scryRenderedDOMComponentsWithClass(component, 'matcher-match-view-player-one');

            expect(firstPlayerNameLabel.length).to.equal(1);
            expect(firstPlayerNameLabel[0].textContent).to.equal('One');
        });

        it('should display the name of the second player', () => {
            const secondPlayerNameLabel = scryRenderedDOMComponentsWithClass(component, 'matcher-match-view-player-two');

            expect(secondPlayerNameLabel.length).to.equal(1);
            expect(secondPlayerNameLabel[0].textContent).to.equal('Two');
        });

        it('should display a Versus label between the two player names', () => {
            const versusLabel = scryRenderedDOMComponentsWithClass(component, 'matcher-versus-label');

            expect(versusLabel.length).to.equal(1);
            expect(versusLabel[0].textContent).to.contain('Versus');
        });

    });

});
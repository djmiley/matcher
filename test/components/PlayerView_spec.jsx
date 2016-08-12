import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const {renderIntoDocument,
    scryRenderedDOMComponentsWithClass,
    scryRenderedDOMComponentsWithTag,
    Simulate} = TestUtils;

import PlayerView from '../../src/components/PlayerView';

describe('PlayerView', () => {

    describe('Rendering', () => {

        it('renders an item', () => {
            const component = renderIntoDocument(
                <PlayerView />
            );

            const playerView = scryRenderedDOMComponentsWithTag(component, 'li');

            expect(playerView.length).to.equal(1);

        });

        it('renders an item with a name label', () => {
            const name = 'Test';

            const component = renderIntoDocument(
                <PlayerView name={name} />
            );

            const playerViewNameLabel = scryRenderedDOMComponentsWithClass(component, 'matcher-player-view-name');

            expect(playerViewNameLabel[0].textContent).to.equal(name);
        });

        it('renders an item with a rating label', () => {
            const rating = 1.2;

            const component = renderIntoDocument(
                <PlayerView rating={rating} />
            );

            const playerViewRatingLabel = scryRenderedDOMComponentsWithClass(component, 'matcher-player-view-rating');

            expect(playerViewRatingLabel[0].textContent).to.equal(rating + '');
        });

        it('renders an button labelled Match', () => {
            const component = renderIntoDocument(
                <PlayerView />
            );

            const playerViewButton = scryRenderedDOMComponentsWithTag(component, 'button');

            expect(playerViewButton.length).to.equal(1);
            expect(playerViewButton[0].textContent).to.equal('Match');
        });

    });

    describe('Function Callback', () => {

        it('invokes callback when match button is clicked', () => {
            var matched = false;
            const matchPlayer = () => matched = true;
            const component = renderIntoDocument(
                <PlayerView matchPlayer={matchPlayer} />
            );

            const playerViewButton = scryRenderedDOMComponentsWithTag(component, 'button');

            Simulate.click(playerViewButton[0]);

            expect(matched).to.be.true;
        });

    });

});
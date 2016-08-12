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

        it('renders an button labelled Edit', () => {
            const component = renderIntoDocument(
                <PlayerView />
            );

            const playerViewEditButton = scryRenderedDOMComponentsWithClass(component, 'matcher-player-view-edit-button');

            expect(playerViewEditButton[0].textContent).to.equal('Edit');
        });

        it('renders a button labelled Delete', () => {
            const component = renderIntoDocument(
                <PlayerView />
            );

            const playerViewDeleteButton = scryRenderedDOMComponentsWithClass(component, 'matcher-player-view-delete-button');

            expect(playerViewDeleteButton[0].textContent).to.equal('Delete');
        });

    });

    describe('Function Callback', () => {

        it('invokes callback when edit button is clicked', () => {
            var edited = false;
            const editPlayer = () => edited = true;
            const component = renderIntoDocument(
                <PlayerView editPlayer={editPlayer} />
            );

            const playerViewEditButton = scryRenderedDOMComponentsWithClass(component, 'matcher-player-view-edit-button');

            Simulate.click(playerViewEditButton[0]);

            expect(edited).to.be.true;
        });

        it('invokes callback when delete button is clicked', () => {
            var deleted = false;
            const deletePlayer = () => deleted = true;
            const component = renderIntoDocument(
                <PlayerView deletePlayer={deletePlayer} />
            );

            const playerViewDeleteButton = scryRenderedDOMComponentsWithClass(component, 'matcher-player-view-delete-button');

            Simulate.click(playerViewDeleteButton[0]);

            expect(deleted).to.be.true;
        });

    });

});
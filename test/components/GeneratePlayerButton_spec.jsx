import {expect} from 'chai';
import {List} from 'immutable';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const {renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate} = TestUtils;

import GeneratePlayerButton from '../../src/components/GeneratePlayerButton';

describe('GeneratePlayerButton', () => {

    describe('Rendering', () => {

        it('renders an button labelled Generate Player', () => {
            const component = renderIntoDocument(
                <GeneratePlayerButton />
            );

            const generatePlayerButton = scryRenderedDOMComponentsWithTag(component, 'button');

            expect(generatePlayerButton.length).to.equal(1);
            expect(generatePlayerButton[0].textContent).to.equal('Generate Player');
        });

    });

    describe('Function Callback', () => {

        it('invokes callback when generate player button is clicked', () => {
            var playerGenerated = false;
            const addPlayer = () => playerGenerated = true;
            const component = renderIntoDocument(
                <GeneratePlayerButton addPlayer={addPlayer} />
            );

            const generatePlayerButton = scryRenderedDOMComponentsWithTag(component, 'button');

            Simulate.click(generatePlayerButton[0]);

            expect(playerGenerated).to.be.true;
        });

    });

});
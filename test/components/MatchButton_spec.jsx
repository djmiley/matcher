import {expect} from 'chai';
import {List} from 'immutable';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const {renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate} = TestUtils;

import MatchButton from '../../src/components/MatchButton';

describe('MatchButton', () => {

    describe('Rendering', () => {

        it('renders an button labelled Generate Player', () => {
            const component = renderIntoDocument(
                <MatchButton />
            );

            const matchButton = scryRenderedDOMComponentsWithTag(component, 'button');

            expect(matchButton.length).to.equal(1);
            expect(matchButton[0].textContent).to.equal('Match');
        });

    });

    describe('Function Callback', () => {

        it('invokes callback when match button is clicked', () => {
            var matched = false;
            const match = () => matched = true;
            const component = renderIntoDocument(
                <MatchButton match={match} />
            );

            const matchButton = scryRenderedDOMComponentsWithTag(component, 'button');

            Simulate.click(matchButton[0]);

            expect(matched).to.be.true;
        });

    });

});
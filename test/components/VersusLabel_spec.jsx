import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const {renderIntoDocument,
    scryRenderedDOMComponentsWithTag} = TestUtils;

import VersusLabel from '../../src/components/VersusLabel';

describe('VersusLabel', () => {

    describe('Rendering', () => {

        let component;

        before(() => {
            component = renderIntoDocument(
                <VersusLabel />
            );            
        })

        it('should be a label', () => {
            const label = scryRenderedDOMComponentsWithTag(component, 'label');

            expect(label.length).to.equal(1);
        });

        it('should display the text Versus with a space either side', () => {
            const label = scryRenderedDOMComponentsWithTag(component, 'label');

            expect(label[0].textContent).to.equal(' Versus ');
        });

    });

});
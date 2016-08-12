import {expect} from 'chai';
import {List, Map, fromJS} from 'immutable';

import Player from '../../src/algorithm/Player';

import * as actions from '../../src/constants/actions';

import reducer from '../../src/reducers/matcher';

describe('reducer', () => {

    describe('SET_STATE', () => {

        it('handles SET_STATE', () => {
            const initialState = Map();
            const action = {
                type: actions.SET_STATE,
                state: Map({
                    players: List.of(
                        new Player(1, 'Drew', 10, true),
                        new Player(2, 'James', 20, true),
                        new Player(3, 'Miley', 30, true)
                    )
                })
            };

            const nextState = reducer(initialState, action);

            expect(nextState).to.equal(fromJS({
                players: [new Player(1, 'Drew', 10),
                    new Player(2, 'James', 20),
                    new Player(3, 'Miley', 30)]
            }));
        });

        it('handles SET_STATE without initial state', () => {
            const action = {
                type: actions.SET_STATE,
                state: Map({
                    players: List.of(
                        new Player(1, 'Drew', 10, true),
                        new Player(2, 'James', 20, true),
                        new Player(3, 'Miley', 30, true)
                    )
                })
            };

            const nextState = reducer(undefined, action);

            expect(nextState).to.equal(fromJS({
                players: [new Player(1, 'Drew', 10),
                    new Player(2, 'James', 20),
                    new Player(3, 'Miley', 30)]
            }));
        });

        it('handles SET_STATE with plain js payload', () => {
            const initialState = Map();
            const action = {
                type: actions.SET_STATE,
                state: {
                    players: [new Player(1, 'Drew', 10),
                        new Player(2, 'James', 20),
                        new Player(3, 'Miley', 30)]
                }
            };

            const nextState = reducer(initialState, action);

            expect(nextState).to.equal(fromJS({
                players: [new Player(1, 'Drew', 10),
                    new Player(2, 'James', 20),
                    new Player(3, 'Miley', 30)]
            }));
        });

        it('handles SET_STATE with plain js payload and without initial state', () => {
            const action = {
                type: actions.SET_STATE,
                state: {
                    players: [new Player(1, 'Drew', 10),
                        new Player(2, 'James', 20),
                        new Player(3, 'Miley', 30)]
                }
            };

            const nextState = reducer(undefined, action);

            expect(nextState).to.equal(fromJS({
                players: [new Player(1, 'Drew', 10),
                    new Player(2, 'James', 20),
                    new Player(3, 'Miley', 30)]
            }));
        });

    });

});
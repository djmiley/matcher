import {List, Map} from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {compose, createStore} from 'redux';

import * as actions from './constants/actions';

import {AppContainer} from './containers/App';

import Match from './logic/Match';
import Player from './logic/Player';

import reducer from './reducers/matcher';

const createStoreDevTools = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreDevTools(reducer);

store.dispatch({
    type: actions.SET_STATE,
    state: {
        players: [new Player(1, 'Drew', 10),
            new Player(2, 'James', 20),
            new Player(3, 'Miley', 30)],
        matches: [new Match(1, new Player(4, 'One', 50), new Player(5, 'Two', 60))]
    }
})

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);
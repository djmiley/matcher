import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';

import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';

import * as actions from './constants/actions';

import reducer from './reducers/matcher';

import {AppContainer} from './containers/App';

const createStoreDevTools = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreDevTools(reducer);

store.dispatch({
    type: actions.SET_STATE,
    state: {}
})

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);
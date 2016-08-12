import React from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../actions/matcher';

export default class App extends React.Component {
    render() {
        return <div>
            <section className="matcher-appcontainer">
            </section>
        </div>
    }
};

function mapStateToProps(state) {
    return {};
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App);
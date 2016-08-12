import React from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../actions/matcher';

import GeneratePlayerButton from '../components/GeneratePlayerButton';
import MatchButton from '../components/MatchButton';
import PlayerList from '../components/PlayerList';

export default class App extends React.Component {
    render() {
        return <div>
            <section className="matcher-app-container">
                <PlayerList {...this.props} />
                <GeneratePlayerButton {...this.props} />
                <MatchButton {...this.props} />
            </section>
        </div>
    }
};

function mapStateToProps(state) {
    return {
        players: state.get('players')
    };
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App);
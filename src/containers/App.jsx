import React from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../actions/matcher';

import GeneratePlayerButton from '../components/buttons/GeneratePlayerButton';
import MatchButton from '../components/buttons/MatchButton';
import MatchList from '../components/match/MatchList';
import PlayerList from '../components/player/PlayerList';

export default class App extends React.Component {
    render() {
        return <div>
            <section className="matcher-app-container">
                <PlayerList {...this.props} />
                <GeneratePlayerButton {...this.props} />
                <MatchButton {...this.props} />
                <MatchList {...this.props} />
            </section>
        </div>
    }
};

function mapStateToProps(state) {
    return {
        matches: state.get('matches'),
        players: state.get('players')
    };
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App);
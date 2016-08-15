import React from 'react';

import VersusLabel from './VersusLabel';

export default class MatchView extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = function(nextProps, nextState) {
            return this.props.matchPlayers !== nextProps.matchPlayers;
        };
    }
    render() {
        return <li className='matcher-match-view'>
            <label className='matcher-match-view-player-one' ref='player-one'>
                {this.props.matchPlayers.get(0).get('name')}
            </label>
            <VersusLabel />
            <label className='matcher-match-view-player-two' ref='player-two'>
                {this.props.matchPlayers.get(1).get('name')}
            </label>
        </li>
    }
};
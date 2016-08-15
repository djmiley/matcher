import React from 'react';

export default class PlayerView extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = false;
    }
    render() {
        return <li className='matcher-player-view'>
            <label className='matcher-player-view-name' ref='name'>
                {this.props.name}
            </label>
            <label> </label>
            <label className='matcher-player-view-rating' ref='rating'>
                {this.props.rating}
            </label>
            <button className='matcher-player-view-match-button' onClick={() => this.props.matchPlayer(this.props.id, this.props.players)}>Match</button>
        </li>
    }
};
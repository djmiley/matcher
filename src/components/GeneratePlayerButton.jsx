import React from 'react';

import RandomPlayer from '../logic/RandomPlayer';

export default class GeneratePlayerButton extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = false;
    }
    generatePlayer() {
        const newPlayer = new RandomPlayer();
        this.props.addPlayer(newPlayer);
    }
    render() {
        return <button className='matcher-generate-player-button' onClick={() => this.generatePlayer()}>Generate Player</button>
    }
};
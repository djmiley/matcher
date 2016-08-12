import React from 'react';

export default class GeneratePlayerButton extends React.Component {
    constructor(props) {
        super(props);
        // Analyse state correctly
        this.shouldComponentUpdate = true;
    }
    render() {
        return <button className='matcher-generate-player-button' onClick={() => this.props.generatePlayer()}>Generate Player</button>
    }
};
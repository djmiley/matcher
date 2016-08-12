import React from 'react';

export default class GeneratePlayerButton extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = false;
    }
    render() {
        return <button className='matcher-generate-player-button' onClick={() => this.props.generatePlayer()}>Generate Player</button>
    }
};
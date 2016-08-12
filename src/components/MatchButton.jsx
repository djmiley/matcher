import React from 'react';

export default class MatchButton extends React.Component {
    constructor(props) {
        super(props);
        // Analyse state correctly
        this.shouldComponentUpdate = true;
    }
    render() {
        return <button className='matcher-match-button' onClick={() => this.props.match()}>Match</button>
    }
};
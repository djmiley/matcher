import React from 'react';

export default class MatchButton extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = function(nextProps, nextState) {
            return this.props.players !== nextProps.players;
        };
    }
    render() {
        return <button className='matcher-match-button' onClick={() => this.props.match(this.props.players)}>Match</button>
    }
};
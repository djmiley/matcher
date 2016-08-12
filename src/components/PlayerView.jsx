import React from 'react';

export default class PlayerView extends React.Component {
    constructor(props) {
        super(props);
        // Analyse state correctly
        this.shouldComponentUpdate = true;
    }
    render() {
        return <li className='matcher-player-view'>
            <label className='matcher-player-view-name' ref='name'>
                {this.props.name}
            </label>
            <label className='matcher-player-view-rating' ref='rating'>
                {this.props.rating}
            </label>
            <button className='matcher-player-view-edit-button' onClick={() => this.props.editPlayer(this.props.id)}>Edit</button>
            <button className='matcher-player-view-delete-button' onClick={() => this.props.deletePlayer(this.props.id)}>Delete</button>
        </li>
    }
};
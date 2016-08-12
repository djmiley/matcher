import React from 'react';

export default class PlayerView extends React.Component {
    constructor(props) {
        super(props);
        // Analyse state correctly
        this.shouldComponentUpdate = true;
    }
    deleteItem(id) {
        console.log('deleting ' + id);
    }
    editItem(id) {
        console.log('editing ' + id);
    }
    render() {
        return <li className='matcher-player-view'>
            <label ref='name'>
                {this.props.name}
            </label>
            <label ref='rating'>
                {this.props.rating}
            </label>
            <button className='matcher-player-view-edit-button' onClick={() => this.editItem(this.props.id)}>Edit</button>
            <button className='matcher-player-view-delete-button' onClick={() => this.deleteItem(this.props.id)}>Delete</button>
        </li>
    }
};
import React from 'react';

import PlayerView from './PlayerView';

export default class PlayerList extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = function(nextProps, nextState) {
            return this.props.players !== nextProps.players;
        };
    }
    render() {
        return <div>
            <ul className="matcher-player-list">
                {this.props.players.map(player =>
                    <PlayerView key={player.get('id')}
                        // How to bind player properties simpler?
                        id={player.get('id')}
                        name={player.get('name')}
                        rating={player.get('rating')}
                        {...this.props} />
                )}
            </ul>
        </div>
    }
};
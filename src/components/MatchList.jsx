import React from 'react';

import MatchView from './MatchView';

export default class MatchList extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = function(nextProps, nextState) {
            return this.props.matches !== nextProps.matches;
        };
    }
    render() {
        return <div>
            <ul className="matcher-match-list">
                {this.props.matches.map(match =>
                    <MatchView key={match.get('id')}
                        id={match.get('id')}
                        matchPlayers={match.get('players')}
                        {...this.props} />
                )}
            </ul>
        </div>
    }
};
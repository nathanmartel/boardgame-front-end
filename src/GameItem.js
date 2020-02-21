import React, { Component } from 'react';
import GameDetails from './GameDetails.js';

export default class List extends Component {
    render() {
        const { games } = this.props;
        return (<div>
            {games.map(game => <GameDetails game={game} />)}
        </div>)
    }
}
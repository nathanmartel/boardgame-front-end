import React, { Component } from 'react';
import GameItem from './GameItem.js';

export default class List extends Component {
    render() {
        const { games } = this.props;
        return (<ul>
            {games.map(game => <GameDetail game={game} />)}
        </ul>)
    }
}
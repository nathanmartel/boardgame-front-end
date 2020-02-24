import React, { Component } from 'react';

export default class GameDetailsDelete extends Component {
    render() {
        const { game } = this.props;
        return <tr key={game.id}>
            <td>{game.id}</td>
            <td>{game.name}</td>
            <td onClick={this.state.props.deleteGame}>DELETE</td>
            </tr>
    }
}
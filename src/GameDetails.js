import React, { Component } from 'react';

export default class Details
 extends Component {
    render() {
        const { game } = this.props;
        return <li key={game.name}>
            <div>
            <h3>{game.name}</h3>
            <p>{game.year}</p>
            <img src={game.image_url} alt={game.name} />
            <p>{game.price}</p>
            <p>{game.publisher}</p>
            <p>{game.categories}</p>
            <p>From {game.min_players} to {game.max_players} players.</p>
            </div>
        </li>
    }

}
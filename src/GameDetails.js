import React, { Component } from 'react';

export default class GameDetails extends Component {
    render() {
        const { game } = this.props;
        console.log('In GameDetails, game:', game);
        return <li key={game.name}>
            <div className="card-image">
                <img src={game.image_url} alt={game.name} />
            </div>
            <div className="card-text">
                <h2>{game.name}</h2>
            <p>{game.year}</p>
            <p>${game.price}</p>
            <p>{game.publisher}</p>
            <p>{game.categories}</p>
            <p>From {game.min_players} to {game.max_players} players.</p>
            </div>
        </li>
    }

}
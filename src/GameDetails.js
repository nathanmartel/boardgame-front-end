import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class GameDetails extends Component {
    render() {
        const { game } = this.props;
        const { allPublishers } = this.props;
        console.log('In GameDetails, game:', game);
        console.log('allPublishers is:', allPublishers);

        // const publisherName = allPublishers.forEach(publisher => {
        //     if (publisher.id === game.publisher_id) {
        //          return publisher.name;
        //     }                 
        // })
        // game.setState({ publisher : publisherName });



    return <li key={game.name}>
            <div className="card-image">
                <img src={game.image_url} alt={game.name} />
            </div>
            <div className="card-text">
                <h2>{game.name}</h2>
            <p>{game.year}</p>
            <p>${game.price}</p>
            <p>Publisher ID: {game.publisher_id}</p>
            <p>Category: {game.categories}</p>
            <p>From {game.min_players} to {game.max_players} players.</p>
            <Link key={game.id} to={`/edit/${game.id}`}>Edit this game</Link>
            </div>
        </li>
    }

}
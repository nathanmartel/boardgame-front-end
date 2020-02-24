import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GameDetails from './GameDetails.js';
// import CreateGame from './CreateGame.js';
import request from 'superagent';

export default class Home extends Component {
    state = {
        games: []
    }

    async getGames() {
        const URL = 'https://sheltered-ridge-05699.herokuapp.com/api/games';
        const gameData = await request.get(URL);
        return gameData;
    }

    async componentDidMount() {
        console.log('Home mounted');
        const gameData = await this.getGames();
        this.setState({ games: gameData.body });
    }

    render() {
        return (<div>
            <ul class="data-list">
                {this.state.games.map(game => 
                    <Link key={game.name} to={`/game/${game.name}`}>
                    <GameDetails game={game} />
                    </Link>)}
            </ul>
        </div>)
    }
}
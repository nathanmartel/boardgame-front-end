import React, { Component } from 'react';
import Link from 'react-router-dom';
import GameDetails from './GameDetails.js';
import request from 'superagent';

export default class Home extends Component {
    state = {
        games: [],
    }

    async getGames() {
        const URL = 'https://sheltered-ridge-05699.herokuapp.com/api/data';
        const gameData = await request.get(URL);
        return gameData;
    }

    async componentDidMount() {
        const gameData = await this.getGames();
        this.state.games = gameData;
    }

    render() {
        return (<div>
            <ul>
                {this.state.games.map(game => 
                    <Link key={game.name} to={`/game/${game.name}`}>
                    <GameDetails game={game} />
                    </Link>)}
            </ul>
            <p>Create new item come</p>
            <p>Search to come</p>
        </div>)
    }
}
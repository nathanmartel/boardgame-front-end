import React, { Component } from 'react'
import GameDetailsDelete from './GameDetailsDelete.js';
import request from 'superagent';

export default class DeleteGame extends Component {
    state = {
        games: [],
        id: 0,
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

    async deleteGame() {
        const oldGame = {
            id: this.state.id,
        }
        const URL = 'https://sheltered-ridge-05699.herokuapp.com/api/deletegame';
        await request.post(URL, oldGame);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <table class="data-table">
                    {this.state.games.map(game => 
                        <GameDetailsDelete game={game} deleteGame={this.deleteGame} />)};
                </table>
            </div>
        )
    }
}

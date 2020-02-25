import React, { Component } from 'react';
import GameDetails from './GameDetails.js';
import request from 'superagent';


export default class List extends Component {
    state = {
        game: [],
        allPublishers: []
    }

    async getPublishers() {
        const URL = `https://sheltered-ridge-05699.herokuapp.com/api/publishers/`;
        const publishersData = await request.get(URL);
        return publishersData;
    }

    async getGames() {
        const URL = `https://sheltered-ridge-05699.herokuapp.com/api/games/${this.props.match.params.id}`;
        const gameData = await request.get(URL);
        return gameData;
    }

    async componentDidMount() {
        console.log('Item mounted');
        const gameData = await this.getGames();
        this.setState({ game: gameData.body[0] });

        const publishersData = await this.getPublishers();
        this.setState({ allPublishers: publishersData.body });
    }

    render() {
        const { game } = this.state;
        const { allPublishers } = this.state;
        return (<div>
            <GameDetails game={game} allPublishers={allPublishers} />
        </div>)
    }
}
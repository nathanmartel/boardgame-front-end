import React, { Component } from 'react'
import request from 'superagent';

export default class CreateGame extends Component {

    state = {
        name: '',
        year: null,
        image_url: 'https://placekitten.com/200/300',
        price: null,
        publisher: null,
        allCategories: ['strategy', 'cooperative'],
        categories: null,
        min_players: null,
        max_players: null,
        have_played: null,
        havePlayed: true,
    }

    async setNewGame(newGame) {
        const URL = 'https://sheltered-ridge-05699.herokuapp.com/api/games';
        await request.post(URL, newGame);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const newGame = {
            name: this.state.name,
            year: this.state.year,
            image_url: this.state.image_url,
            price: this.state.price,
            publisher_id: this.state.publisher_id,
            categories: this.state.categories,
            min_players: this.state.min_players,
            max_players: this.state.max_players,
            have_played: this.state.have_played
        }
        this.setNewGame(newGame);
        this.props.history.push('/');
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handleYearChange = (e) => {
        this.setState({ year: Number(e.target.value) });
    }

    handleImageUrlChange = (e) => {
        this.setState({ image_url: e.target.value });
    }
    
    handlePriceChange = (e) => {
        this.setState({ price: Number(e.target.value) });
    }
    
    handlePublisherIdChange = (e) => {
        // Publisher will have its own table and joined to the games table
        this.setState({ publisher_id: Number(e.target.value) });
    }

    handleCategoryChange = (e) => {
        this.setState({ categories: e.target.value });
    }

    handleMinPlayersChange = (e) => {
        this.setState({ min_players: e.target.value });
    }
    
    handleMaxPlayersChange = (e) => {
        this.setState({ max_players: e.target.value });
    }

    handleHavePlayedChange = (e) => {
        const havePlayed = (e.target.value === 'false') ? false : true;
        this.setState({ have_played: havePlayed });
    }

    render() {

        

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label forhtml='gameName'><span>Name:</span>
                        <input id='gameName' type='text' onChange={this.handleNameChange}></input>
                    </label>
                    <label forhtml='gameYear'><span>Year:</span>
                        <input id='gameYear' type='number' onChange={this.handleYearChange}></input>
                    </label>
                    <label forhtml='gameImageUrl'><span>Image URL:</span>
                        <input id='gameImageUrl' type='text' onChange={this.handleImageUrlChange}></input>
                    </label>
                    <label forhtml='gamePrice'><span>Price:</span>
                        <input id='gamePrice' type='type' onChange={this.handlePriceChange}></input>
                    </label>
                    <label forhtml='gamePublisherId'><span>Publisher ID:</span>
                        <input id='gamePublisherId' type='number' onChange={this.handlePublisherIdChange}></input>
                    </label>
                    <label forhtml='gameCategory'><span>Category:</span>
                        <select id='gameCategory' onChange={this.handleCategoryChange}>
                            {this.state.allCategories.map(category => <option value={category}>{category}</option>)}
                        </select>
                    </label>
                    <label forhtml='gameMinPlayers'><span>Min. players:</span>
                        <input id='gameMinPlayers' type='number' onChange={this.handleMinPlayersChange}></input>
                    </label>
                    <label forhtml='gameMaxPlayers'><span>Max. players:</span>
                        <input id='gameMaxPlayers' type='number' onChange={this.handleMaxPlayersChange}></input>
                    </label>
                    <label class="have-played" forhtml='gameHavePlayed'><span>Have you played it?:</span>
                        <select onChange={this.handleHavePlayedChange}>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </label>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

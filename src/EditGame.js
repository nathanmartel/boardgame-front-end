import React, { Component } from 'react'
import request from 'superagent';

export default class EditGame extends Component {

    state = {
        name: '',
        year: null,
        image_url: 'https://placekitten.com/200/300',
        price: null,
        publisher_id: null,
        allPublishers: [],
        allCategories: ['strategy', 'cooperative'],
        categories: null,
        min_players: null,
        max_players: null,
        have_played: null,
        havePlayed: true,
    }

    async getPublishers() {
        const URL = `https://sheltered-ridge-05699.herokuapp.com/api/publishers/`;
        const publishersData = await request.get(URL);
        return publishersData;
    }

    async getGames() {
        // const URL = `https://stark-river-39620.herokuapp.com/api/games/2`;
        const URL = `https://sheltered-ridge-05699.herokuapp.com/api/games/${this.props.match.params.id}`;
        console.log('Requesting', URL);
        const gameData = await request.get(URL);
        return gameData;
    }

    async componentDidMount() {
        console.log('EditGame mounted');
        const gameData = await this.getGames();
        const gameToEdit = gameData.body[0];
        this.setState({ 
            name: gameToEdit.name,
            year: gameToEdit.year,
            image_url: gameToEdit.image_url,
            price: gameToEdit.price,
            publisher_id: gameToEdit.publisher_id,
            categories: gameToEdit.categories,
            min_players: gameToEdit.min_players,
            max_players: gameToEdit.max_players,
            have_played: gameToEdit.have_played,
        });

        const publishersData = await this.getPublishers();
        const publishersFromData = publishersData.body;
        this.setState({ 
            allPublishers: publishersFromData,
        });
    }

    async setNewGame(updatedGame) {
        const URL = `https://sheltered-ridge-05699.herokuapp.com/api/games/${this.props.match.params.id}`;
        console.log('Putting ', updatedGame, ' to ', URL);
        await request.put(URL, updatedGame);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const updatedGame = {
            id: Number(this.props.match.params.id),
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
        this.setNewGame(updatedGame);
        this.props.history.push('/');
    }

    handleDelete = async (e) => {
        const URL = `https://sheltered-ridge-05699.herokuapp.com/api/games/${this.props.match.params.id}`;
        await request.delete(URL);
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

    handlePublisherObjChange = (e) => {
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
                        <input id='gameName' type='text' onChange={this.handleNameChange} value={this.state.name}></input>
                    </label>
                    <label forhtml='gameYear'><span>Year:</span>
                        <input id='gameYear' type='number' onChange={this.handleYearChange} value={this.state.year}></input>
                    </label>
                    <label forhtml='gameImageUrl'><span>Image URL:</span>
                        <input id='gameImageUrl' type='text' onChange={this.handleImageUrlChange} value={this.state.image_url}></input>
                    </label>
                    <label forhtml='gamePrice'><span>Price:</span>
                        <input id='gamePrice' type='type' onChange={this.handlePriceChange} value={this.state.price}></input>
                    </label>
                    {/* <label forhtml='gamePublisherId'><span>Publisher ID:</span>
                        <input id='gamePublisherId' type='number' onChange={this.handlePublisherIdChange} value={this.state.publisher_id}></input>
                    </label> */}

                    <label forhtml='gamePublisherId'><span>Publisher:</span>
                        <select id='gamePublisherId' onChange={this.handlePublisherObjChange} value={this.state.publisher}>
                            {this.state.allPublishers.map(publisher => <option value={publisher.id}>{publisher.name}</option>)}
                        </select>
                    </label>

                    <label forhtml='gameCategory'><span>Category:</span>
                        <select id='gameCategory' onChange={this.handleCategoryChange} value={this.state.categories}>
                            {this.state.allCategories.map(category => <option value={category}>{category}</option>)}
                        </select>
                    </label>
                    <label forhtml='gameMinPlayers'><span>Min. players:</span>
                        <input id='gameMinPlayers' type='number' onChange={this.handleMinPlayersChange} value={this.state.min_players}></input>
                    </label>
                    <label forhtml='gameMaxPlayers'><span>Max. players:</span>
                        <input id='gameMaxPlayers' type='number' onChange={this.handleMaxPlayersChange} value={this.state.max_players}></input>
                    </label>
                    <label className="have-played" forhtml='gameHavePlayed' value={this.state.have_played}><span>Have you played it?:</span>
                        <select onChange={this.handleHavePlayedChange}>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </label>
                <button type="submit">Submit</button>
                </form>
                <div className="deleteButtonContainer">
                    <button onClick={this.handleDelete}>Delete Game</button>
                </div>
            </div>
        )
    }
}

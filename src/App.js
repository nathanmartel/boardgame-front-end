import React, { Component } from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home.js';
import CreateGame from './CreateGame.js';
import GameDetails from './GameDetails.js';

import './bootstrap-reboot.min.css';
import './style.css';
import './list.css';
import './create.css';


export default class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <header className="App-header">
          Hello! Welcome to our games.
        </header>
        <Link to='/create'>Create a new game entry</Link>
        <Switch>
          <Route exact path='/create' component={CreateGame} />
          {/* <Route exact path='/list' component={List} /> */}
          <Route exact path='/game/:gameName' component={GameDetails} />
          <Route exact path='/:name?' component={Home} />
          {/* <Route exact path='/create' component={Create} /> */}
        </Switch>
      </div>
    </Router>
    );
  }
}
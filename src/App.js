import React, { Component } from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './Home.js';
import { List } from './List.js';
import { GameDetail } from './GameDetail.js';

import './style.css';

export default class App extends Component {
  render() {

    

    return (
    <Router>
      <div className="App">
        <header className="App-header">
          Hello! Welcome to our games.
        </header>
        <Switch>
          <Route exact path='/:name?' component={Home} />
          <Route exact path='/list' component={List} />
          <Route exact path='/game/:gameName' component={GameDetail} />
          {/* <Route exact path='/create' component={Create} /> */}
        </Switch>
      </div>
    </Router>
  );
}
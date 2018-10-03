import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../App.css';
import Home from './homepage/homepage';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Switch>
            <Route path="/" component={ Home } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

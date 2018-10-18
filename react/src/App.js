import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavigationBar from './components/navigation-bar/NavigationBar';

import Home from './components/home/Home';
import Login from './components/connection/login/Login';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Route exact path="/" component={ Home } />
        <Route exact={true} path="/login" component={ Login } />
      </div>
    );
  }
}

export default App;

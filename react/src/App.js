import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './util/guard/PrivateRoute'

import NavigationBar from './components/navigation-bar/NavigationBar';
import Home from './components/home/Home';
import Login from './components/connection/login/Login';
import RidePage from './components/ride/RidePage';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Route exact path="/" component={ Home } />
        <Route exact={true} path="/login" component={ Login } />
        <PrivateRoute exact={true} path='/rides' component={ RidePage } />
      </div>
    );
  }
}

export default App;

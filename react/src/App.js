import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './util/guard/PrivateRoute'

import NavigationBar from './components/navigation-bar/NavigationBar';
import Home from './components/home/Home';
import Registration from './components/connection/registration/Registration';
import Login from './components/connection/login/Login';
import RidePage from './components/ride/RidePage';
import Map from './components/map/Map';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />

        <Route exact path="/" component={ Home } />
        <Route exact={true} path="/login" component={ Login } />
        <Route exact={true} path="/registration" component={ Registration } />

        <PrivateRoute exact={true} path='/rides' component={ RidePage } />

        <PrivateRoute exact={true} path='/map' component={ Map } />
        <PrivateRoute exact={true} path='/map/:id' component={ Map } />
      </div>
    );
  }
}

export default App;

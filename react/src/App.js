import React, { Component } from 'react';

import NavigationBar from './components/navigation-bar/NavigationBar';
import Banner from './components/banner/Banner';
import HomeBoard from './components/home-board/HomeBoard';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Banner />
        <div className="container">
          <HomeBoard />
        </div>
      </div>
    );
  }
}

export default App;

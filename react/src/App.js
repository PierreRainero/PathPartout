import React, { Component } from 'react';

import NavigationBar from './components/navigation-bar/NavigationBar';
import Banner from './components/banner/Banner';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <Banner/>
      </div>
    );
  }
}

export default App;

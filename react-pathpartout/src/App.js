import React, { Component } from 'react';

import NavigationBar from './components/navigation-bar/NavigationBar';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
      </div>
    );
  }
}

export default App;

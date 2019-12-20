import React, { Component } from 'react';
import './App';
import './modules/gameBoard/Game';
import Game from './modules/gameBoard/Game';

class App extends Component {
  render() {
    const headerText = "Let's play Tic-Tac-Toe"
    return (
      <div className="App">
        <div className="App-header">
          <h2>{ headerText }</h2>
        </div>
        <Game></Game>
      </div>
    );
  }
}

export default App;

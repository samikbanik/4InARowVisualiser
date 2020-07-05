import React, { Component } from 'react';
import './App.css';
import { getRows, getColumns, getInitialGameState } from './Config';
import { getDiscStyle, getContainerStyle, getResetButtonStyle, getGameOverBannerStyle } from './Styles';
import { fetchGameState, registerMove, resetGame } from './Services';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: getRows(),
      columns: getColumns(),
      gameState: getInitialGameState(),
      nextPlayer: 0,
      isWon: false,
      winner: null
    };
  }

  componentDidMount() {
    setInterval(() => {
      fetchGameState().then(gameStateResponseJson => {
        console.log('Game state', gameStateResponseJson);
        this.setGameState(gameStateResponseJson);
      });
    }, 4000);
  }

  registerMove(move) {
    registerMove(move, this.state.nextPlayer).then(registerMoveResponseJson => {
      console.log('Register move', registerMoveResponseJson);
      this.setGameState(registerMoveResponseJson);
    });
  }

  resetGame() {
    resetGame().then(resetGameResponseJson => {
      console.log('Reset game', resetGameResponseJson);
      this.setGameState(resetGameResponseJson);
    });
  }

  setGameState(stateJson) {
    this.setState({
      ...this.state,
      gameState: stateJson.board,
      nextPlayer: stateJson.nextPlayer,
      isWon: stateJson.isWon,
      winner: stateJson.winner
    })
  }

  render() {
    let rows = this.state.rows;
    let columns = this.state.columns;
    let gameState = this.state.gameState;
    return (
      <div className="App">
        <header className="Page-container">
          <p>
            4 in a row visualiser
          </p>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'inline-block', flex: 1 }}>
              <p>Player 0</p>
              <div style={getDiscStyle(0)} />
              <p>Player 1</p>
              <div style={getDiscStyle(1)} />
              <p>Next Player</p>
              <div style={getDiscStyle(this.state.nextPlayer)} />
            </div>
            <div style={{ display: 'inline-block', flex: 1 }}>
              <div style={getContainerStyle(rows, columns)}>
                {gameState.map((_, rowIndex) =>
                  <div key={Math.random()} style={{ flexDirection: 'row' }}>
                    <div onClick={() => this.registerMove(1)} style={getDiscStyle(gameState[rowIndex][0])} />
                    <div onClick={() => this.registerMove(2)} style={getDiscStyle(gameState[rowIndex][1])} />
                    <div onClick={() => this.registerMove(3)} style={getDiscStyle(gameState[rowIndex][2])} />
                    <div onClick={() => this.registerMove(4)} style={getDiscStyle(gameState[rowIndex][3])} />
                    <div onClick={() => this.registerMove(5)} style={getDiscStyle(gameState[rowIndex][4])} />
                    <div onClick={() => this.registerMove(6)} style={getDiscStyle(gameState[rowIndex][5])} />
                    <div onClick={() => this.registerMove(7)} style={getDiscStyle(gameState[rowIndex][6])} />
                    <div onClick={() => this.registerMove(8)} style={getDiscStyle(gameState[rowIndex][7])} />
                    <div onClick={() => this.registerMove(9)} style={getDiscStyle(gameState[rowIndex][8])} />
                    <div onClick={() => this.registerMove(10)} style={getDiscStyle(gameState[rowIndex][9])} />
                  </div>
                )}
                {this.state.isWon ?
                  <p style={getGameOverBannerStyle()}>Game Over !!!</p>
                  : null
                }
              </div>
            </div>
            <div style={{ display: 'inline-block', flex: 1 }}>
              <p>Winner</p>
              <div style={getDiscStyle(this.state.winner)} />
              <div>
              <button style={getResetButtonStyle()} onClick={() => this.resetGame()}>
                Reset
              </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

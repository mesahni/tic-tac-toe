import React from 'react';
import CheckerBox from '../../modules/checkerBox/CheckerBox.js';
import './Game.css'

class Game extends React.Component {
  constructor(){
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0,
    };

    const calculateWinner = this.calculateWinner.bind(this);
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }

  handleClick(i) {
    const { history, stepNumber, xIsNext } = this.state;
    const turn = history.slice(0, stepNumber+1)
    const current = turn[turn.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    this.setState({
      history: turn.concat([{
        squares: squares
      }]),
      xIsNext: !xIsNext,
      stepNumber: turn.length,
    });
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    lines.forEach((line, i) => {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    })

    return null;
  }

  render() {
    const { history, stepNumber } = this.state;
    const currentStepNumber = history[stepNumber];
    const winner = this.calculateWinner(currentStepNumber.squares);
    let status;
    if(winner){
      status = `Winner: ${winner}`;
    }else{
        const playerTurn = this.state.xIsNext ? 'X' : 'O';
      status = `Next player to Play: ${playerTurn}`;
    }
    const moves = history.map((step, move) => {
      const desc = move ? `Move # ${move}` : 'Game start';
      return (
        <li key={move}>
          <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <CheckerBox squares={currentStepNumber.squares} onClick={(i)=>this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}
export default Game;
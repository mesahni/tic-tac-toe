import React from 'react';

import Square from '../../modules/square/Square.js';

class CheckerBox extends React.Component {

  renderGrid(i) {
    const { squares, onClick } = this.props;
    return <Square value={squares[i]} onClick={() => onClick(i)}/>;
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderGrid(0)}
          {this.renderGrid(1)}
          {this.renderGrid(2)}
        </div>
        <div className="board-row">
          {this.renderGrid(3)}
          {this.renderGrid(4)}
          {this.renderGrid(5)}
        </div>
        <div className="board-row">
          {this.renderGrid(6)}
          {this.renderGrid(7)}
          {this.renderGrid(8)}
        </div>
      </div>
    );
  }
}
export default CheckerBox;
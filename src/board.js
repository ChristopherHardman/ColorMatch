import React, { Component } from 'react';
import './App.css';

class Board extends Component {
  render() {
    let width = this.props.hCells * 51;
    let height = this.props.vCells * 51;
    let res = this.props.board.map((el,idx) => {
      return <div
                className="boardSquare"
                style={{backgroundColor:el ===1 ? "#fc8505" : "white"}}
                key={idx}
                onClick={()=>this.props.click(idx)}
              >
              </div>
    })

    return (
      <div id="boardHolder">
        <div id="alert" style={{display: this.props.alert ? "flex" : "none"}}>
          <div>{this.props.alert}</div>
          <button onClick={this.props.close}>Close</button>
        </div>
        <div
          id="board"
          style={{width:`${width}px`, height:`${height}px`}}
        >
          {res}
        </div>
        <button onClick={this.props.optionsSubmit}>
          Change Rules
        </button>
      </div>
    );
  }
}

export default Board;

import React, { Component } from 'react';
import './App.css';

class Options extends Component {
  render() {
    return (
      <div id="optionsHolder" onChange={this.props.inputHandler}>
        <h2>Options</h2>
        <div className="option">
          <label >Horizontal Cells:</label>
          <input type="text" id="hCells"/>
        </div>
        <div className="option">
          <label >Vertical Cells:</label>
          <input type="text" id="vCells"/>
        </div>
        <div className="option">
          <label >Allowed Time (in seconds):</label>
          <input type="text" id="time"/>
        </div>
        <button onClick={this.props.optionsSubmit}>Start Game</button>
      </div>
    );
  }
}

export default Options;

import React, { Component } from 'react';
import './App.css';
import Options from './options';
import Board from './board';
import Timer from './timer';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      viewBoard: false,
      warning: null,
      board: null,
      time: 300,
      alertMessage: null
    }
  }

  inputHandler = (e) => {
    e.preventDefault();
    this.setState({[e.target.id]: parseInt(e.target.value, 10)})
  }

  click = (idx) => {
    let plus = Number(idx)+Number(this.state.hCells);
    let newBoard = this.state.board;
    newBoard[idx] = newBoard[idx] === 0 ? 1 : 0;
    if ((idx+1) % this.state.hCells !==0) {
      newBoard[idx+1] = newBoard[idx+1] === 0 ? 1 : 0;
    }
    if (idx % this.state.hCells !==0) {
      newBoard[idx-1] = newBoard[idx-1] === 0 ? 1 : 0;
    }
      newBoard[idx-this.state.hCells] = newBoard[idx-this.state.hCells] === 0 ? 1 : 0;
    if(newBoard[plus] < this.state.board.length) {
      newBoard[plus] = newBoard[plus] === 0 ? 1 : 0;
    }
    this.setState({board: newBoard})
    if (!this.state.board.includes(0) || !this.state.board.includes(1)) this.setState({alertMessage:'You Win!'});
  }

  close = e => {
    e.preventDefault();
    this.setState({alertMessage: null})
  }

  timeUp = (time) => {
    if (time===0) {
      this.setState({alertMessage: "Time is up!"})
    }
  }

  optionsSubmit = (e) => {
    e.preventDefault();
    if (this.state.viewBoard) {
      this.setState({viewBoard: false})
      return;
    }
    if (isNaN(this.state.hCells) || isNaN(this.state.vCells) || isNaN(this.state.time))  {
      this.setState({warning: 'There was a problem with one of your inputs - please try again'})
      return;
    }
    if (this.state.hCells && this.state.vCells) {
      let temp = [];
      let size = this.state.hCells * this.state.vCells;
      for  (let i=0; i< size; i++) {
        let a = Math.round(Math.random());
        temp.push(a);
      }
      this.setState({viewBoard: true, board: temp, warning: null})
    }
  }

  render() {
    return (
      <div id="app">
        <h1>React ColorMatch</h1>
        { !this.state.viewBoard &&
          <Options
            inputHandler={this.inputHandler}
            optionsSubmit={this.optionsSubmit}
          />
        }
        { this.state.viewBoard &&
          <div>
            <Timer
              time={this.state.time}
              timeUp={this.timeUp}
            />
            <Board
              alert={this.state.alertMessage}
              board={this.state.board}
              click={this.click}
              close={this.close}
              hCells={this.state.hCells}
              optionsSubmit={this.optionsSubmit}
              time={this.state.time}
              vCells={this.state.vCells}
            />
          </div>
        }
        <div id="warningHolder">{this.state.warning}</div>
      </div>
    );
  }
}

export default App;

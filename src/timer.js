import React, { Component } from 'react';
import './App.css';

class Timer extends Component {

  constructor(props){
    super(props);
    this.state = {
      time: this.props.time
    }
    this.props.timeUp(this.state.time);
  }

  componentDidMount () {
    setInterval(()=>{if (this.state.time >0) this.setState({time: this.state.time-1})}, 1000)
  }

  componentDidUpdate() {
    if (this.state.time === 0) {
      this.props.timeUp(this.state.time);
      this.setState({time:null});
    }
  }


  render() {
    let minutes = Math.floor(this.state.time / 60);
    let seconds = this.state.time % 60;
    return (
      <div
        id="timer"
        style={{color: seconds > 10 ? "#26d6d6" : "red" }}
      >
        Time Left: {minutes}:{seconds}
      </div>
    );
  }
}

export default Timer;

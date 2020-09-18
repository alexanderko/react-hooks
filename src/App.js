import React, { Component } from 'react';
import './App.css';
import { Timer } from './Timer';

class App extends Component {

  constructor() {
    super();
    this.state = { counter: 0, seconds: 0 }
  }

  componentDidMount() {
    setInterval(() => {
      this.tick()
    }, 1000);
  }

  tick() {
    this.setState({seconds: this.state.seconds + 1})
  }

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={() => this.setState({counter: this.state.counter + 1})}>Add</button>
        <p>Seconds since start: {this.state.seconds}</p>
        <Timer name={'Torn off gas'} duration={5 * 60}/>
        <Timer name={'Workout'} duration={15 * 60}/>
      </div>
    );
  }
}

export default App;

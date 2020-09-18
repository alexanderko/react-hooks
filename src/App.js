import React, { Component } from 'react';
import './App.css';
import { Timer } from './Timer';

class App extends Component {

  constructor() {
    super();
    this.state = { 
      counter: 0,
      seconds: 0,
      timers: [
        {
          name: 'Torn off gas',
          duration: 5 * 60
        },
        {
          name: 'Workout',
          duration: 15 * 60
        },
      ]
    }
    this.removeTimer = this.removeTimer.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.tick()
    }, 1000);
  }

  tick() {
    this.setState({seconds: this.state.seconds + 1})
  }

  removeTimer() {
    const { timers } = this.state;
    timers.pop();
    this.setState({ timers });
  }

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={() => this.setState({counter: this.state.counter + 1})}>Add</button>
        <p>Seconds since start: {this.state.seconds}</p>
        {
          this.state.timers.map(
            timer => <Timer key={timer.name} name={timer.name} duration={timer.duration}/>
          )
        }

        <button onClick={this.removeTimer}>Remove timer</button>
      </div>
    );
  }
}

export default App;

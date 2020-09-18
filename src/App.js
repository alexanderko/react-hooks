import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { counter: 0 }
  }

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={() => this.setState({counter: this.state.counter + 1})}>Add</button>
      </div>
    );
  }
}

export default App;

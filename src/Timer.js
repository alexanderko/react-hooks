import React, { Component } from 'react';

export class Timer extends Component {

  constructor(props) {
      super();
      this.state = { secondsLeft: props.duration }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.count(this.props.name);
      this.setState({secondsLeft: this.state.secondsLeft - 1});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { name } = this.props;
    const { secondsLeft } = this.state;
    const time = `${Math.floor(secondsLeft / 60)}:${secondsLeft % 60}`
    return (
        <div>Timer {name}: {time}</div>
    )
  }
}
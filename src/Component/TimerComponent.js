import React, { Component } from "react";

class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // Set up a timer that increments count every second
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clean up the timer
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default TimerComponent;

import React, { useState, useEffect } from 'react';

const TickTockClockArrow = () => {
  let timer_id = null;
  const [current_time, set_current_time] = useState(new Date());

  useEffect(() => {
    if (!timer_id) {
      timer_id = setInterval(() => set_current_time(new Date()), 1000);
      return () => clearInterval(timer_id); // Return cleanup function
    }
  });

  return (
    <>
      <h2>Clock -- as Arrow</h2>
      <p>{current_time.toLocaleTimeString()}</p>
    </>
  );
};

function TickTockClockFunction() {
  const [current_time, set_current_time] = useState(new Date());

  const tick = function () {
    set_current_time(new Date());
  };

  useEffect(() => {
    this.timer_id = setInterval(() => tick(), 1000);
    return () => clearInterval(this.timer_id);
  });

  return (
    <>
      <h2>Clock -- as Function</h2>
      <p>{current_time.toLocaleTimeString()}</p>
    </>
  );
}

class TickTockClockClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current_time: new Date() };
  }

  tick() {
    this.setState({ current_time: new Date() });
  }

  componentDidMount() {
    // Invoked immediately after a component is mounted (inserted into the tree)
    this.timer_id = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // Invoked immediately before a component is unmounted and destroyed
    clearInterval(this.timer_id);
  }

  render() {
    return (
      <>
        <h2>Clock -- as Class</h2>
        <p>{this.state.current_time.toLocaleTimeString()}</p>
      </>
    );
  }
}

export { TickTockClockArrow, TickTockClockFunction, TickTockClockClass };

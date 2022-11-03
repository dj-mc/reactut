import React from 'react';

const Form = () => {
  const handle_submit = (e) => {
    e.preventDefault();
    console.log('Sumbitting...');
  };

  return (
    <form onSubmit={handle_submit}>
      <button type="submit">Submit</button>
    </form>
  );
};

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { is_toggled_on: true };
    // Bind callback so that rendered element is aware of 'this'
    this.handle_toggle_click = this.handle_toggle_click.bind(this);
  }

  handle_toggle_click() {
    this.setState((previous_state) => ({
      is_toggled_on: !previous_state.is_toggled_on
    }));
  }

  render() {
    return (
      <button onClick={this.handle_toggle_click}>
        Toggled: {this.state.is_toggled_on ? 'On' : 'Off'}
      </button>
    );
  }
}

class LogThisButton extends React.Component {
  handle_button_click = () => {
    // - Public class field syntax
    console.log(this);
  };

  render() {
    return <button onClick={this.handle_button_click}>Log This</button>;
  }
}

export { Form, Toggle, LogThisButton };

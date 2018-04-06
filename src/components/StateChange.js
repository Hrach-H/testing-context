import React, { Component } from 'react';
import { Wrapper } from 'src/styled';

class StateChange extends Component {
  state = {
    value: 'default value'
  };

  toggleStateValue = () => {
    this.setState({
      value: this.state.value === 'default value' ? 'changed value' : 'default value'
    });
  };

  render() {
    return (
      <Wrapper>
        <p>
          This is the state of the component: <b>{this.state.value}</b>
        </p>
        <button className="ui primary button" onClick={this.toggleStateValue}>
          Toggle state
        </button>
        <span className="ui label">
          Changing the state will re-render the parts of this component where it is used
        </span>
      </Wrapper>
    );
  }
}

export default StateChange;

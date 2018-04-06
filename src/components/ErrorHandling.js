import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class ErrorHandling extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.warn(info);
  }

  render() {
    if (this.state.hasError) {
      return <Title>Oops... Something went wrong</Title>;
    }
    return this.props.children;
  }
}

export default ErrorHandling;

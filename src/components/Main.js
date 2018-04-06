import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AppContext } from 'src/App';

const Wrapper = styled.section`
  padding: 4em;
  background: lightgrey;
`;

const P = styled.p`
  font-weight: bold;
`;

const Main = (props) => {
  return (
    <Wrapper>
      <AppContext.Consumer>{(context) => <P>This is the default context: {context}</P>}</AppContext.Consumer>
      <button className="ui primary button" onClick={props.changeContext}>
        Change context
      </button>
    </Wrapper>
  );
};

Main.propTypes = {
  changeContext: PropTypes.func.isRequired
};

export default Main;

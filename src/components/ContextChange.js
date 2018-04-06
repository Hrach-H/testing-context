import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from 'src/styled';
import { AppContext } from 'src/App';

const ContextChange = (props) => {
  return (
    <Wrapper>
      <AppContext.Consumer>
        {(context) => (
          <p>
            This is the context: <b>{context}</b>
          </p>
        )}
      </AppContext.Consumer>
      <button className="ui primary button" onClick={props.changeContext}>
        Toggle context
      </button>
      <span className="ui red basic label">
        Changing the context will re-render the whole App, because it changes its state
      </span>
    </Wrapper>
  );
};

ContextChange.propTypes = {
  changeContext: PropTypes.func.isRequired
};

export default ContextChange;

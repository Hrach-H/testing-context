import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper } from 'src/styled';
import { toggleGlobalState } from '../redux/actionCreators';

const ReduxStateChange = (props) => {
  return (
    <Wrapper>
      <p>
        This is the global redux state: <b>{props.mainReducer}</b>
      </p>
      <button className="ui primary button" onClick={props.changeGlobalState}>
        Toggle state
      </button>
      <span className="ui label">
        Changing the redux state will re-render the parts of this component where it is used
      </span>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    mainReducer: state.mainReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeGlobalState() {
      dispatch(toggleGlobalState());
    }
  };
};

ReduxStateChange.propTypes = {
  mainReducer: PropTypes.string,
  changeGlobalState: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxStateChange);

import { combineReducers } from 'redux';
import { TOGGLE_GLOBAL_STATE_VALUE } from './actions';

const mainReducer = (state = 'default state', action) => {
  if (action.type === TOGGLE_GLOBAL_STATE_VALUE) {
    return state === 'default state' ? 'changed state' : 'default state';
  }
  return state;
};

const rootReducer = combineReducers({
  mainReducer
});

export default rootReducer;
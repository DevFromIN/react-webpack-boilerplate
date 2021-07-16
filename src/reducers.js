import { combineReducers } from 'redux';

const sampleReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      break;
  }

  return state;
};

const createReducer = (injectedReducers = {}) => {
  const reducer = combineReducers({
    ...injectedReducers,
    sample: sampleReducer,
  });

  return reducer;
};

export default createReducer;

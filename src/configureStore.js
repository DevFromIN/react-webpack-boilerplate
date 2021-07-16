import { applyMiddleware, compose, createStore } from 'redux';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';

import createReducer from './reducers';

const configureStore = (initialState = {}) => {
  const composeEnhancers = compose;

  const sagaMiddleware = createSagaMiddleware();
  const runSaga = sagaMiddleware.run;

  const injectorEnhancer = createInjectorsEnhancer({
    createReducer,
    runSaga,
  });

  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares), injectorEnhancer];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers)
  );

  return store;
};

export default configureStore;

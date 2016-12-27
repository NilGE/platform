import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import * as config from '../../config/config';

const composeEnhancer =
  config.nodeEnv != 'production' &&
  typeof window == 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify here name, actionsBlacklist, actionsCreators and other options
      }) : compose;

const enhancer = composeEnhancer (
  applyMiddleware(thunk)
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}

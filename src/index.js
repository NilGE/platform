import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import * as bookActions from './actions/bookActions';

const store = configureStore();
store.dispatch(bookActions.fetchBooks());
// store.dispatch(userActions.fetchUsers());

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

import '../scss/main.scss';

import reducer from './reducers';
import AppContainer from './containers/AppContainer';

// For use with Redux DevTools: https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById('root')
);

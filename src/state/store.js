import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';

import rootReducer from 'state/rootReducer';

export const history = createHistory();

const composeParams = [
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(history)),
  persistState(['parties']),
];

/* eslint-disable */
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  composeParams.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}
/* eslint-enable */

export const store = createStore(
  rootReducer,
  compose(...composeParams),
);

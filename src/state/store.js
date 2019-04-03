import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';

import rootReducer from 'state/rootReducer';

const composeParams = [
  applyMiddleware(thunk),
  persistState(['parties', 'encounters', 'savedEncounters']),
];

/* eslint-disable */
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  composeParams.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}
/* eslint-enable */

const store = createStore(
  rootReducer,
  compose(...composeParams),
);

export default store;

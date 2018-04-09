import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from 'state/rootReducer';

import List from 'parties/List';
import Add from 'parties/Add';
import registerServiceWorker from 'registerServiceWorker';
import 'index.css';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  applyMiddleware(middleware),
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/parties/add" component={Add} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import { store, history } from 'state/store';
import Router from 'router';
import registerServiceWorker from 'registerServiceWorker';
import 'index.css';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

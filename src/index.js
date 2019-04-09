import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router as BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import store from 'state/store';
import history from 'app-init/history';
import Router from 'router';

import 'app-init/fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

// import registerServiceWorker from 'registerServiceWorker';
import 'sass/index.scss';

render(
  <div>
    <ToastContainer />
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Router />
      </BrowserRouter>
    </Provider>
  </div>,
  document.getElementById('root'),
);
// registerServiceWorker();

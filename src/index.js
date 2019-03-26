import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router as BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import fontawesome from '@fortawesome/fontawesome';
import regular from '@fortawesome/fontawesome-free-regular';
import solid from '@fortawesome/fontawesome-free-solid';
import brand from '@fortawesome/fontawesome-free-brands';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import store from 'state/store';
import history from 'utils/history';
import Router from 'router';
// import registerServiceWorker from 'registerServiceWorker';
import 'index.css';

fontawesome.library.add(regular, solid, brand);

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

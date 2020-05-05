import React from 'react';
import Routes from './routes';
import { Router } from 'react-router-dom';
// import Menu from './page/Menu';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import history from './services/history';

import { store, persistor } from './store';

import GlobalStyle from './globalStyle';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyle />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

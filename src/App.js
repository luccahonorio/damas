import React from 'react';
import Dashboard from './page/Dashboard';
import Menu from './page/Menu';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import { store, persistor } from './store';

import GlobalStyle from './globalStyle';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <Dashboard />
      </PersistGate>
    </Provider>
  );
}

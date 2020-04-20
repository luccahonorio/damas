import React from 'react';
import Page from './page';
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
        <Page />
      </PersistGate>
    </Provider>
  );
}

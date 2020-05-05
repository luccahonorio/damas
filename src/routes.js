import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './page/Dashboard';

function Routes() {
  return (
    <Switch>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default Routes;

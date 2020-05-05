import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './page/Dashboard';
import Menu from './page/Menu';

function Routes() {
  return (
    <Switch>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/">
        <Menu />
      </Route>
    </Switch>
  );
}

export default Routes;

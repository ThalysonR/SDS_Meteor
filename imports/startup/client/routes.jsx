import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import App from '../../ui/App.jsx';
import Teste from '../../ui/Teste.jsx';
import Navbar from '../../ui/Navbar.jsx';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Navbar />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/teste" component={Teste} />
    </Switch>
  </Router>
);

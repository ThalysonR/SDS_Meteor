import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import App from '../../ui/App.jsx';
import SignIn from '../../ui/pages/SignIn.jsx';
import AppContainer from '../../ui/containers/AppContainer.jsx';
import Teste from '../../ui/Teste.jsx';
import Navbar from '../../ui/Navbar.jsx';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Navbar />
    <Switch>
      <Route exact path="/teste" component={Teste} />
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/" component={AppContainer} />
    </Switch>
  </Router>
);

import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import App from '../../ui/App.jsx';
import AuthGuard from '../../ui/containers/AuthGuard.jsx';
import BlogContainer from '../../ui/containers/BlogContainer.jsx';
import SignIn from '../../ui/pages/SignIn.jsx';
import SignUp from '../../ui/pages/SignUp.jsx';
import AppContainer from '../../ui/containers/AppContainer.jsx';
import Teste from '../../ui/Teste.jsx';
import NavbarContainer from '../../ui/containers/NavbarContainer.jsx';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <NavbarContainer />
    <Switch>
      <Route exact path="/teste" component={Teste} />
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <AuthGuard path="/blog" component={BlogContainer} />
      <Route exact path="/" component={AppContainer} />
    </Switch>
  </Router>
);

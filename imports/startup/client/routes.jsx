import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import AuthGuard from '../../ui/containers/AuthGuard.jsx';
import BlogContainer from '../../ui/containers/BlogContainer.jsx';
import PostDetailContainer from '../../ui/containers/PostDetailContainer.jsx';
import UsersContainer from '../../ui/containers/UsersContiainer.jsx';
import SignIn from '../../ui/pages/SignIn.jsx';
import SignUp from '../../ui/pages/SignUp.jsx';
import AppContainer from '../../ui/containers/AppContainer.jsx';
import NavbarContainer from '../../ui/containers/NavbarContainer.jsx';
import CssBaseline from '@material-ui/core/CssBaseline';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <CssBaseline />
    <NavbarContainer />
    <Switch>
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <AuthGuard exact path="/blog/:id" component={PostDetailContainer} />
      <AuthGuard exact path="/blog" component={BlogContainer} />
      <AuthGuard exact path="/admin/users" component={UsersContainer} />
      <Route exact path="/" component={AppContainer} />
    </Switch>
  </Router>
);

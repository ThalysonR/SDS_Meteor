import React, { Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

const Unauthorized = () => <div>Unauthorized</div>;

export default withTracker(() => {
  const user = Meteor.user();
  return { user };
})(AuthGuard);

function AuthGuard({ component, path, user, exact }) {
  const Component = component;
  return <Fragment>{user ? <Component path={path} exact={exact} /> : <Unauthorized />}</Fragment>;
}

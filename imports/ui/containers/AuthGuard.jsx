import React, { Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

const Unauthorized = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90%' }}>
    <img src="/unauthorized.png" />
  </div>
);

function checkRoles(id, roles) {
  if (roles == null || roles.length == 0) {
    return true;
  } else {
    return Roles.userIsInRole(id, roles);
  }
}

function AuthGuard(props) {
  const Component = props.component;
  return (
    <Fragment>
      {props.user && checkRoles(props.user._id, props.roles) ? (
        <Component {...props} />
      ) : (
        <Unauthorized />
      )}
    </Fragment>
  );
}

export default withTracker(() => {
  const user = Meteor.user();
  return { user };
})(AuthGuard);

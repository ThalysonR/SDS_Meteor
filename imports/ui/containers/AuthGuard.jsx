import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withTracker } from 'meteor/react-meteor-data';

const Unauthorized = () => (
  <Paper>
    <Typography variant="h1">Unauthorized</Typography>
  </Paper>
);

export default withTracker(() => {
  const user = Meteor.user();
  return { user };
})(AuthGuard);

function AuthGuard({ component, path, user, exact, computedMatch }) {
  const Component = component;
  return (
    <Fragment>
      {user ? (
        <Component path={path} exact={exact} user={user} computedMatch={computedMatch} />
      ) : (
        <Unauthorized />
      )}
    </Fragment>
  );
}

import { withTracker } from 'meteor/react-meteor-data';

import Users from '../../ui/pages/Users.jsx';

const UsersContainer = withTracker(() => {
  Meteor.subscribe('userList');
  return { users: Meteor.users.find({}).fetch() };
})(Users);

export default UsersContainer;

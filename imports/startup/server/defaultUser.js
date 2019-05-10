import { Meteor } from 'meteor/meteor';

if (Meteor.users.find({ username: 'admin' }).count() === 0) {
  const adminId = Accounts.createUser({
    username: 'admin',
    email: 'admin@admin',
    password: 'admin',
  });
  Roles.addUsersToRoles(adminId, 'admin', Roles.GLOBAL_GROUP);
}

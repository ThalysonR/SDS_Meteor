import { Meteor } from 'meteor/meteor';

if (!Meteor.users.findOne({ email: 'admin@admin' })) {
  // Meteor.users.insert({})
}

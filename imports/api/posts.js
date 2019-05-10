import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Posts = new Mongo.Collection('posts');

if (Meteor.isServer) {
  Meteor.publish('posts', function postsPublication() {
    return Posts.find();
  });
}

Meteor.methods({
  'posts.insert'(title, description, author) {
    Posts.insert({
      title,
      description,
      author,
      createdAt: new Date(),
    });
  },
  'posts.remove'(postId) {
    check(postId, String);

    Posts.remove(postId);
  },
  'posts.update'(post) {
    check(post._id, String);

    Posts.update(post._id, { $set: { title: post.title, description: post.description } });
  },
});

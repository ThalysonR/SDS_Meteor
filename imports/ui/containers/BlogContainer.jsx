import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../../api/posts.js';

import Blog from '../pages/Blog.jsx';

function insertPost(title, description, author) {
  Meteor.call('posts.insert', title, description, author);
}

function editPost(post) {
  Meteor.call('posts.update', post);
}

function deletePost(postId) {
  Meteor.call('posts.remove', postId);
}

const BlogContainer = withTracker(() => {
  const posts = Meteor.subscribe('posts');
  return {
    posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch(),
    insertPost,
    deletePost,
    editPost,
  };
})(Blog);

export default BlogContainer;

import { withTracker } from 'meteor/react-meteor-data';

import Blog from '../pages/Blog.jsx';

const BlogContainer = withTracker(() => {
  const posts = Meteor.subscribe('posts');
  return { posts };
})(Blog);

export default BlogContainer;

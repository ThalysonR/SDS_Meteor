import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../../api/posts.js';

import PostDetail from '../pages/PostDetail.jsx';

const PostDetailContainer = withTracker(({ computedMatch }) => {
  Meteor.subscribe('posts');
  return {
    post: Posts.find({ _id: computedMatch.params.id })
      .fetch()
      .pop(),
  };
})(PostDetail);

export default PostDetailContainer;

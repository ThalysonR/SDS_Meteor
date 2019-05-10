import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

import { withStyles } from '@material-ui/core/styles';
import Post from './Post';
import PostUC from './PostUC';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 700,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  posts: {
    marginTop: theme.spacing.unit * 5,
  },
});

class Blog extends Component {
  constructor(props) {
    super(props);
    this.insertPost = this.insertPost.bind(this);
    this.editClick = this.editClick.bind(this);
    this.editPost = this.editPost.bind(this);
    this.state = {
      editPost: { title: '', description: '' },
      submitFn: this.insertPost,
    };
  }

  insertPost(post) {
    this.props.insertPost(post.title, post.description, this.props.user.username);
  }

  editPost(post) {
    this.props.editPost(post);
    this.setState({
      editPost: { title: '', description: '' },
      submitFn: this.insertPost,
    });
  }

  editClick(post) {
    this.setState({
      editPost: post,
      submitFn: this.editPost,
    });
  }

  render() {
    return (
      <main className={this.props.classes.main}>
        {Roles.userIsInRole(this.props.user._id, ['admin']) ? (
          <PostUC
            editPost={this.state.editPost}
            submitFn={this.state.submitFn}
            key={this.state.editPost._id || ''}
          />
        ) : null}
        <Paper className={this.props.classes.posts}>
          {this.props.posts.map(post => (
            <Post
              key={post._id}
              post={post}
              user={this.props.user}
              deletePost={this.props.deletePost}
              editClick={this.editClick}
            />
          ))}
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Blog);

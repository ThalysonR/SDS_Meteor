import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Person, Visibility, Delete } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';

const styles = theme => ({
  flexRow: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  action: {
    cursor: 'pointer',
    marginLeft: '10px',
  },
});

function viewPost(id, history) {
  history.push(`/blog/${id}`);
}

function Post({ post, user, classes, history, deletePost }) {
  return (
    <Card>
      <CardContent>
        <div className={classes.flexRow}>
          <span className={classes.flexRow}>
            <Person />
            <Typography variant="caption" color="inherit">
              {post.author}
            </Typography>
          </span>
          <span>
            <Visibility className={classes.action} onClick={() => viewPost(post._id, history)} />
            {Roles.userIsInRole(user._id, ['admin']) ? (
              <Delete className={classes.action} onClick={() => deletePost(post._id)} />
            ) : null}
          </span>
        </div>
        <Typography variant="title">{post.title}</Typography>
        <Typography variant="body1">{post.description}</Typography>
      </CardContent>
    </Card>
  );
}

export default withRouter(withStyles(styles)(Post));

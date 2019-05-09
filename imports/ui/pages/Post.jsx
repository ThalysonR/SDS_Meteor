import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Person } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  author: {
    display: 'flex',
    alignItems: 'center',
  },
});

function Post({ post, classes }) {
  return (
    <Card>
      <CardContent>
        <div className={classes.author}>
          <Person />
          <Typography variant="caption" color="inherit">
            {post.author}
          </Typography>
        </div>
        <Typography variant="title">{post.description}</Typography>
        <Typography variant="body1">{post.description}</Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(Post);

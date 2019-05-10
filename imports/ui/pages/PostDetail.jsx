import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Person } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  flexRow: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  action: {
    cursor: 'pointer',
  },
});

function PostDetail({ post, classes }) {
  return (
    <Fragment>
      {post ? (
        <Card>
          <CardContent>
            <div className={classes.flexRow}>
              <span className={classes.flexRow}>
                <Person />
                <Typography variant="caption" color="inherit">
                  {post.author}
                </Typography>
              </span>
            </div>
            <Typography variant="title">{post.description}</Typography>
            <Typography variant="body1">{post.description}</Typography>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent>
            <Typography variant="h5">Not Found</Typography>
          </CardContent>
        </Card>
      )}
    </Fragment>
  );
}

export default withStyles(styles)(PostDetail);

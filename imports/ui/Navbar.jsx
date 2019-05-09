import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Meteor } from 'meteor/meteor';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
});

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: Meteor.user(),
    };
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={this.props.classes.grow}>
              SDS Private Blog
            </Typography>
            {this.state.user ? (
              <div>this.state.user.username</div>
            ) : (
              <Button color="inherit">Sign Up</Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);

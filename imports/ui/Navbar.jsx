import React, { Component, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Person from '@material-ui/icons/Person';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
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
    this.logout = this.logout.bind(this);
  }

  logout() {
    Meteor.logout();
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={this.props.classes.grow}>
              SDS Private Blog
            </Typography>
            {this.props.user ? (
              <Fragment>
                <Person />
                <Typography variant="h6" color="inherit">
                  {this.props.user.username.toUpperCase()}
                </Typography>
                <Button color="inherit" onClick={this.logout}>
                  Logout
                </Button>
              </Fragment>
            ) : (
              <Fragment>
                <Button color="inherit" onClick={() => this.props.history.push('/signup')}>
                  Sign Up
                </Button>
                <Button color="inherit" onClick={() => this.props.history.push('/login')}>
                  Sign In
                </Button>
              </Fragment>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Navbar));

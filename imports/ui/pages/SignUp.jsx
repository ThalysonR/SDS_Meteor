import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  main: {
    main: {
      width: 'auto',
      display: 'block',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  },
  paper: {
    opacity: 0.7,
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    Accounts.createUser(
      { email: this.state.email, username: this.state.username, password: this.state.password },
      err => {
        if (err) {
          console.log(err);
        } else {
          this.props.history.push('/blog');
        }
      },
    );
  }

  render() {
    return (
      <div>
        <main className={this.props.classes.main}>
          <Paper className={this.props.classes.paper}>
            <Typography component="h1" variant="h6">
              Register
            </Typography>
            <form onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input id="username" name="username" autoFocus onChange={this.onChange} />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input id="email" name="email" onChange={this.onChange} />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" id="password" onChange={this.onChange} />
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={this.props.classes.submit}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </main>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(SignUp));

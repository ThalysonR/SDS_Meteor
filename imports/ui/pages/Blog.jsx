import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import Post from './Post';

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
  newPost: {
    marginTop: theme.spacing.unit * 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  submit: {
    alignSelf: 'start',
    marginTop: theme.spacing.unit * 2,
  },
  posts: {
    marginTop: theme.spacing.unit * 5,
  },
});

class Blog extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: '',
      description: '',
    };
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.insertPost(this.state.title, this.state.description, this.props.user.username);
  }

  render() {
    return (
      <main className={this.props.classes.main}>
        {Roles.userIsInRole(this.props.user._id, ['admin']) ? (
          <Paper className={this.props.classes.newPost}>
            <Typography variant="h6">New Post</Typography>
            <form onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="title">Post Title</InputLabel>
                <Input id="title" name="title" autoFocus onChange={this.onChange} />
              </FormControl>
              <TextField
                multiline={true}
                rows="4"
                variant="outlined"
                fullWidth
                name="description"
                onChange={this.onChange}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                className={this.props.classes.submit}
              >
                Submit
              </Button>
            </form>
          </Paper>
        ) : null}
        <Paper className={this.props.classes.posts}>
          {/* <Post post={{ author: 'Thalyson', title: 'Teste', description: 'Testeeeeeeee' }} /> */}
          {this.props.posts.map(post => (
            <Post
              key={post._id}
              post={post}
              user={this.props.user}
              deletePost={this.props.deletePost}
            />
          ))}
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Blog);

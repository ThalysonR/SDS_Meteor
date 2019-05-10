import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
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
});

class PostUC extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      post: props.editPost,
    };
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ post: { ...this.state.post, [e.target.name]: e.target.value } });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ post: { description: '', title: '' } });
    this.props.submitFn(this.state.post);
  }

  render() {
    return (
      <Paper className={this.props.classes.newPost}>
        <Typography variant="h6">
          {this.props.editPost._id ? `Edit ${this.props.editPost.title}` : 'New Post'}
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="title">Post Title</InputLabel>
            <Input
              id="title"
              name="title"
              autoFocus
              value={this.state.post.title}
              inputProps={{ onChange: this.onChange }}
            />
          </FormControl>
          <TextField
            multiline={true}
            rows="4"
            variant="outlined"
            fullWidth
            name="description"
            value={this.state.post.description}
            inputProps={{ onChange: this.onChange }}
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
    );
  }
}

export default withStyles(styles)(PostUC);

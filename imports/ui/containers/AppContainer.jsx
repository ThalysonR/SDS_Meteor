import React, { Component } from 'react';
import { withRouter } from 'react-router';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: Meteor.userId() !== null,
    };
    if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  componentDidUpdate() {
    if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
  }
  render() {
    return <div>APP</div>;
  }
}

export default withRouter(AppContainer);

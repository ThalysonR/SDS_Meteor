import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Task component - represents a single todo item

export default class Task extends Component {
  render() {
    return <Card><CardContent>
        <Typography color="textSecondary">{this.props.task.text}</Typography>
      </CardContent></Card>;
  }
}

import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function Users({ users }) {
  return (
    <Paper>
      <List component="ul">
        {users.map(user => (
          <ListItem key={user._id}>
            <ListItemText primary={user.username} secondary={user.emails[0].address} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

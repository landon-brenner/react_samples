// Presentational component handling items in the side nav panel
import React from 'react';
import { Link } from 'react-router-dom';

// MUI imports
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import TimelineIcon from '@material-ui/icons/Timeline';
import StoreIcon from '@material-ui/icons/Store';


const DashItems = () => {
  return (
    <div>
      <ListItem
        button
        component={Link}
        to='/twitch'
      >
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary="Twitch API Demo" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to='/charts'
      >
        <ListItemIcon>
          <TimelineIcon />
        </ListItemIcon>
        <ListItemText primary="Recharts Examples" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to='/state'
      >
        <ListItemIcon>
          <StoreIcon />
        </ListItemIcon>
        <ListItemText primary="Store Management" />
      </ListItem>
    </div>
  );
}

export default DashItems

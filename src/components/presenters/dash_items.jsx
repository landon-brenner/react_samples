// Presentational component handling items in the side nav panel
import React from 'react';
import { Link } from 'react-router-dom';

// MUI imports
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';


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
    </div>
  );
}

export default DashItems

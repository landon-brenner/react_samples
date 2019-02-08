import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//import FaceIcon from '@material-ui/icons/Face';
// FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
//import ScheduleIcon from '@material-ui/icons/Schedule';

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

DashItems.propTypes = {
  isAdmin: PropTypes.bool,
}

export default DashItems

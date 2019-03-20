// Dashboard style navigational component, powered by Material-UI
// and with some example routing done with react-router
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Switch, Route } from 'react-router-dom';

// Material UI core components
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

// Material UI icon components
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

// Import styles
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/dash_styles'

import DashItems from '../presenters/dash_items';
import Twitch from '../twitch_demo/';
import HeartChart from '../presenters/heart_chart';
import StateSamples from '../state_samples';

class Dashboard extends Component {
  state = {
    open: false,
  };


  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
          >
            <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.menuButtonHidden,
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap className={classes.title}>
                React Samples
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <DashItems
                isAdmin
              />
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Switch>
              <Route
                path='/twitch'
                render={ props => (<Twitch {...props} classes={classes}/>)}
              />
              <Route
                path='/charts'
                render={ props => (<HeartChart {...props} classes={classes}/>)}
              />
              <Route
                path='/state'
                render={ props => (<StateSamples {...props} classes={classes}/>)}
              />
            </Switch>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

// Prop Type Checking
Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);

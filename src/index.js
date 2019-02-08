import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

// MUI imports
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import blueGrey from '@material-ui/core/colors/blueGrey';

const rootEl = document.getElementById('root')

// Entire color palette can be controlled from here!
// Drop theme into <MuiThemeProvider> wrapper around app component
const blueTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: blueGrey,
  },
  typography: { useNextVariants: true },
})

// Place root component in Theme Provider wrapper
function ThemedApp() {
  return (
    <MuiThemeProvider theme={blueTheme}>
      <App />
    </MuiThemeProvider>
  )
}

// Wrap the themed app in Router
function RoutedApp() {
  return (
    <Router>
      <ThemedApp />
    </Router>
  )
}

ReactDOM.render(<RoutedApp/>, rootEl);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

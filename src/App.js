import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//import Sandbox from './components/sandbox';
//import Autocomplete from './components/autocomplete';
import Dashboard from './components/containers/dashboard';


class App extends Component {

  render() {
    /*
    const suggestions = [
      "Cornelius",
      "Ethel",
      "Fred",
      "George",
      "Harriet"
    ]
    */

    return (
      <>
        <Dashboard />
      </>
    )
  }
}

export default App;

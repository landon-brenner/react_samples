/*
  A simple component for searching Twitch.tv's v5 (Kraken) API.
  This component returns the current top 10 games by default, or if no results are returned.
  Built to demonstrate async API calls using axios, component lifecycle methods,
  event handling and passing props to child components.
  A refresh of a previous example posted showing MUI and css-in-js implementation.
*/
import React, { Component } from 'react';
import axios from 'axios'
import Search from './search.jsx';

// MUI imports
import Grid from '@material-ui/core/Grid';

// Local imports
import Games from './games';

// API Client ID key in <project>/.env
const CLIENT_ID = process.env.REACT_APP_TWITCH_CLIENT_ID

// Format URL and header for Twitch v5 (kraken) API
const API_URL = 'https://api.twitch.tv/kraken/'
const API_HEAD = {
  headers: {
    'Accept': 'application/vnd.twitchtv.v5+json',
    'Client-ID': CLIENT_ID
  }
}

class Twitch extends Component {

  state = {
    query: '',
    games:[]
  }

  // Get list of top 10 games by default when app loads
  componentDidMount(){
    this.getTopGames()
  }

  // Search Twitch API for string in query
  // If query is empty, return top games instead
  getSearch = () => {
    if (this.state.query.length > 0) {
      axios.get(
        `${API_URL}search/games?query=${this.state.query}`, API_HEAD
      )
      .then(({ data }) => {
        if (data.games) {
          this.setState({
            games: data.games
          })
        } else {
          alert('No results...showing top 10 games')
          this.getTopGames()
        }
      })
      .catch( error => {
        console.log(error)
      })
    } else {
      this.getTopGames()
    }
  }

  // This API call returns the top 10 games being streamed
  getTopGames = () => {
    axios.get(
      `${API_URL}games/top`, API_HEAD
    )
    .then(({ data }) => {
      this.setState({
        games: data.top.map(g => g.game)
      })
    })
    .catch( error => {
      console.log(error)
    })
  }

  handleInputChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  // Perform search if enter is pressed
  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.getSearch()
    }
  }

  handleClearSearch = () => {
    this.setState({
      query: '',
    })
  }

  render() {

    const {
      query,
      games
    } = this.state

    const {
      getTopGames,
      getSearch,
      handleInputChange,
      handleKeyPress,
      handleClearSearch
    } = this

    return (
      <>
        <Search
          input={query}
          getTopGames={getTopGames}
          handleInputChange={handleInputChange}
          handleKeyPress={handleKeyPress}
          handleSearchClick={getSearch}
          handleClearSearch={handleClearSearch}
        />
        <Grid container>
          <Games
            games={games}
          />
        </Grid>
      </>
    );
  }
}

export default Twitch;

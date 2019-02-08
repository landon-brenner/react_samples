// Stateless, functional search bar component
import React from 'react';
import PropTypes from 'prop-types';

// MUI imports
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';

// ES6 destructuring makes it easy to see props consumed by this component
const Search = ({
  input,
  handleInputChange,
  handleKeyPress,
  handleSearchClick,
  handleClearSearch
}) => {

  return (
    <>
      <Grid container>
        <Grid item style={{ flexGrow: 1 }}>
          <TextField
            placeholder='Search popular games on Twitch!'
            label='Search'
            fullWidth
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  {input && <Tooltip title='Clear Filter'>
                    <IconButton
                      aria-label='Clear input'
                      onClick={handleClearSearch}
                    >
                      <ClearIcon />
                    </IconButton>
                  </Tooltip>}
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <IconButton
            onClick={handleSearchClick}
          >
            <SearchIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  )
}

// Prop type checking - destructured props can be copy/pasted right here
Search.propTypes = {
  input: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
  handleClearSearch: PropTypes.func.isRequired,
}

export default Search

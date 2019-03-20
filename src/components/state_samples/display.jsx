// Reusable presentation component
import React from 'react';
import PropTypes from 'prop-types';

// Some MUI imports for style
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const Display = ({
  addOne,
  subOne,
  resetCount,
  count,
  title
}) => {
  return (
    <Grid container alignItems='center' justify='flex-start'>
      <Grid item style={{paddingRight: 24, paddingTop: 4}}>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <Grid item>
        <Grid container alignItems='center'>
          <IconButton onClick={subOne}><RemoveCircleIcon /></IconButton>
          <Typography>{count}</Typography>
          <IconButton onClick={addOne}><AddCircleIcon /></IconButton>
          <IconButton onClick={resetCount}><CancelIcon /></IconButton>
        </Grid>
      </Grid>
    </Grid>
  )
}

Display.propTypes = {
  addOne: PropTypes.func.isRequired,
  resetCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default Display

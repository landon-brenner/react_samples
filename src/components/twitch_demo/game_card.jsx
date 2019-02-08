// Functional component representing a single game tile
import React from 'react';
import PropTypes from 'prop-types';

// MUI imports
import { withStyles } from '@material-ui/core/styles';

// Let's inject some css-in-js styling with MUI's HOC
const styles = theme => ({
  gameBox: {
    position: 'relative',
    margin: '20px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  }
})

const GameCard = ({game, classes}) => {
	return (
		<div className='game-cards'>
			<img
				className={classes.gameBox}
				src={game.box.medium}
				title={game.localized_name}
				alt={game.name}
			/>
		</div>
	);
}

// Prop Type Checking
GameCard.propTypes = {
  game: PropTypes.object.isRequired,
}

export default withStyles(styles)(GameCard)

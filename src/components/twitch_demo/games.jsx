// Functional component representing the 'games' grid
import React from 'react';
import PropTypes from 'prop-types';

// MUI imports
import { withStyles } from '@material-ui/core/styles';

// Local imports
import GameCard from './game_card';

// css-in-js styling handled with MUI's HOC
const styles = theme => ({
  gameCards: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Games = ({games, classes}) => {
	return (
		<div className={classes.gameCards}>
			{ games.map(game => (
				<GameCard
					key={game._id}
					game={game}
				/>
			))}
		</div>
	);
}

Games.propTypes = {
  games: PropTypes.array.isRequired,
}

export default withStyles(styles)(Games)

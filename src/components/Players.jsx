import PropTypes from 'prop-types';
import Player from './Player';

const Players = ({ players, onPlayerSelect }) => {
    return (
        <div className="mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {players.map(player => (
                <Player key={player.id} player={player} onSelect={onPlayerSelect} />
            ))}
        </div>
    );
};

Players.propTypes = {
    players: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            role: PropTypes.string.isRequired,
            team: PropTypes.string.isRequired,
            battingHand: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
    onPlayerSelect: PropTypes.func.isRequired,
};

export default Players;

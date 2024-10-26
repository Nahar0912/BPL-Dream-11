import PropTypes from 'prop-types';

const Player = ({ player }) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-4 pt-4">
                    <img className="rounded-xl" 
                    src={player.image}
                    alt={player.name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {player.name}</h2>
                    <p>Team: {player.team}</p>
                    <p>Rating: {player.rating}</p>
                    <p>Batting Style: {player.battingHand}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Price: ${player.price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// PropTypes validation
Player.propTypes = {
    player: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        team: PropTypes.string.isRequired,
        battingHand: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default Player;

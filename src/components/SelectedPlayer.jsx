import PropTypes from 'prop-types';

const SelectedPlayer = ({ players, onDelete }) => {
    return (
        <div className="mx-20 my-24">
            <div className="flex flex-col md:flex-row justify-between items-center mt-7 mb-2">
                <h1 className="font-bold text-xl">Selected Players</h1>
            </div>
            {players.length > 0 ? (
                players.map(player => (
                    <div key={player.id} className="mb-2 flex border border-slate-400 rounded-lg shadow-xl">
                        <figure className="px-4 pt-4">
                            <img className="rounded-xl h-20 w-20" src={player.image} alt={player.name} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Name: {player.name}</h2>
                            <p>Batting Style: {player.battingHand}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-danger"
                                onClick={() => onDelete(player.id)}
                                >Delete
                                </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No players selected.</p>
            )}
        </div>
    );
};

SelectedPlayer.propTypes = {
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
    onDelete: PropTypes.func.isRequired,
};

export default SelectedPlayer;

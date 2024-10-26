import PropTypes from 'prop-types';

const SelectedPlayer = ({ players, onDelete, onAddMore }) => {
    return (
        <div className="mx-20 my-20">
            {players.length > 0 ? (
                players.map(player => (
                    <div key={player.id} className="flex items-center justify-center border border-slate-400 rounded-lg shadow-xl">
                        <figure className="px-5">
                            <img className="rounded-xl h-24 w-24" src={player.image} alt={player.name} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Name: {player.name}</h2>
                            <p>Role: {player.role}</p>
                            <p>Price: {player.price}</p>
                        </div>
                        <div className="card-actions items-center mr-5">
                            <button className="btn btn-danger"
                                onClick={() => onDelete(player.id)}
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>                         
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No players selected.</p>
            )}
            <div className="mt-4">
                <button 
                    className="btn outline outline-1 outline-offset-4 outline-yellow-300 bg-yellow-300 text-black mt-4" 
                    onClick={onAddMore}
                >
                    Add More Players
                </button>
            </div>
        </div>
    );
};

SelectedPlayer.propTypes = {
    players: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            role: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
    onAddMore: PropTypes.func.isRequired,
};

export default SelectedPlayer;

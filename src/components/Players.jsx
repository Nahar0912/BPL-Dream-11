import Player from './Player';
const Players = () => {
    return (
        <div className='mx-20'>
            <div className="flex flex-col md:flex-row justify-between items-center mt-7 mb-2">
                <h1 className="font-bold text-xl">Available Players </h1>
                <button id="sort-price-btn" className="btn bg-teal-800 text-white mt-4 md:mt-0 w-full md:w-auto">Sort by Price</button>
            </div>
            <Player />
        </div>
    );
};

export default Players;
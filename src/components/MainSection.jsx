import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SelectedPlayer from './SelectedPlayer';
import Players from './Players';
import { toast } from 'react-toastify'; 

const MainSection = ({ coinBalance, setCoinBalance }) => {
    const [playersData, setPlayersData] = useState([]);
    const [activeTab, setActiveTab] = useState('available'); 
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    useEffect(() => {
        fetch('PlayersData.json')
            .then(res => res.json())
            .then(data => setPlayersData(data));
    }, []);

    const handlePlayerSelect = (player) => {
        if (selectedPlayers.length >= 6) {
            toast.error("You cannot choose more than 6 players");
            return;
        }
        if (selectedPlayers.some(selected => selected.id === player.id)) {
            toast.error("The player is already selected");
            return;
        }
        if (coinBalance < player.price) {
            toast.error("Not enough coin to buy player");
            return;
        }
        setCoinBalance(coinBalance - player.price);
        setSelectedPlayers([...selectedPlayers, player]);
        toast.success("The player is selected successfully");
    };

    const handlePlayerDelete = (id) => {
        const playerToDelete = selectedPlayers.find(player => player.id === id);
        if (playerToDelete) {
            setCoinBalance(coinBalance + playerToDelete.price); 
        }
        setSelectedPlayers(selectedPlayers.filter(player => player.id !== id));
    };

    const handleAddMore = () => {
        setActiveTab('available');
    };

    return (
        <div className="relative">
            <div className="flex flex-col md:flex-row justify-end mx-20 mt-7 mb-2">
                <div dir="ltr" className="mr-2">
                    <button
                        className={`btn mt-4 md:mt-0 w-full md:w-auto rounded-s-full ${activeTab === 'available' ? 'bg-yellow-300' : ''}`}
                        onClick={() => setActiveTab('available')}
                    >
                        Available
                    </button>
                </div>
                <div dir="rtl">
                    <button
                        className={`btn mt-4 md:mt-0 w-full md:w-auto rounded-s-full ${activeTab === 'selected' ? 'bg-yellow-300' : ''}`}
                        onClick={() => setActiveTab('selected')}
                    >
                        Selected ({selectedPlayers.length}/6)
                    </button>
                </div>
            </div>
            {activeTab === 'available' ? (
                <Players players={playersData} onPlayerSelect={handlePlayerSelect} />
            ) : (
                <SelectedPlayer 
                    players={selectedPlayers} 
                    onDelete={handlePlayerDelete} 
                    onAddMore={handleAddMore}
                />
            )}
        </div>
    );
};

MainSection.propTypes = {
    coinBalance: PropTypes.number.isRequired,
    setCoinBalance: PropTypes.func.isRequired,
};

export default MainSection;

import { useEffect, useState } from 'react';
import SelectedPlayer from './SelectedPlayer';
import Players from './Players';

const MainSection = () => {
    const [playersData, setPlayersData] = useState([]);
    const [activeTab, setActiveTab] = useState('available'); 

    useEffect(() => {
        fetch('PlayersData.json')
            .then(res => res.json())
            .then(data => setPlayersData(data))
    }, []);

    return (
        <div className="relative">
            <div className="flex flex-col md:flex-row justify-end mx-20 mt-7 mb-2">
                <div dir="ltr" className="mr-2">
                    <button
                        className={`btn mt-4 md:mt-0 w-full md:w-auto rounded-s-full ${
                            activeTab === 'available' ? 'bg-yellow-300' : ''
                        }`}
                        onClick={() => setActiveTab('available')}
                    >
                        Available
                    </button>
                </div>
                <div dir="rtl">
                    <button
                        className={`btn mt-4 md:mt-0 w-full md:w-auto rounded-s-full ${
                            activeTab === 'selected' ? 'bg-yellow-300' : ''
                        }`}
                        onClick={() => setActiveTab('selected')}
                    >
                        Selected
                    </button>
                </div>
            </div>
            {activeTab === 'available' ? <Players players={playersData} /> : <SelectedPlayer />}
        </div>
    );
};

export default MainSection;

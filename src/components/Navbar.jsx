// components/Navbar.jsx
import PropTypes from 'prop-types';

const Navbar = ({ initialBalance = 0 }) => {
    return (
        <div 
            className="navbar bg-base-100 p-5 px-20 sticky top-0 z-50"
        >
            <div className="flex-1">
                <img src="/src/assets/logo.png" alt="Site Logo" />
            </div>
            <div className="flex-none">
                <nav>
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#fixture">Fixture</a></li>
                        <li><a href="#teams">Teams</a></li>
                        <li><a href="#schedules">Schedules</a></li>
                    </ul>
                </nav>
                <button 
                    className="btn ml-4 flex items-center"
                    aria-label="Coin Balance"
                >
                    <span id="total-balance" className="mr-2">{initialBalance}</span> Coin
                    <img src="/src/assets/coin.png" alt="Coin Icon" className="ml-2" />
                </button>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    initialBalance: PropTypes.number
};

export default Navbar;

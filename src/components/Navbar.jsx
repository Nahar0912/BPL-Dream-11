const Navbar = () => {
    return (
        <div className="navbar bg-base-100 p-5 px-20">
            <div className="flex-1">
                <img src="/src/assets/logo.png" alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                </ul>
                <button className="btn"><span id="total-balance">0</span>Coin<img src="/src/assets/coin.png" alt="" /></button>
            </div>
        </div>
    );
};

export default Navbar;
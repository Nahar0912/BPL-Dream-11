import PropTypes from 'prop-types';

const Banner = ({ onClaimCreditBtn }) => {
    return (
        <div className="mx-20 rounded-3xl bg-[url('/src/assets/bg-shadow.png')] h-full p-14 bg-cover bg-black text-white text-center flex flex-col justify-center items-center">
            <img className="mx-auto block mb-5" src="/src/assets/banner-main.png" alt="Banner Image" />
            <h1 className="text-3xl font-bold mt-4">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h3 className="text-xl mt-2">Beyond Boundaries Beyond Limits</h3>
            <button 
                className="btn outline outline-1 outline-offset-4 outline-yellow-300 bg-yellow-300 text-black mt-4" 
                onClick={onClaimCreditBtn}
                aria-label="Claim Free Credit"
            >
                Claim Free Credit
            </button>
        </div>
    );
};

Banner.propTypes = {
    onClaimCreditBtn: PropTypes.func.isRequired
};

export default Banner;

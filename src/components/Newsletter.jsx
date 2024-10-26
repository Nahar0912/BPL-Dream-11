const Newsletter = () => {
    return (
        <div className="mt-20 outline outline-white outline-offset-8 outline-1 mx-20 rounded-3xl bg-[url('/src/assets/bg-shadow.png')] bg-white p-14 bg-cover text-center flex flex-col justify-center items-center -mb-32 relative z-10">
            <h1 className="text-3xl font-bold mt-4">Subscribe to our Newsletter</h1>
            <h3 className="mt-2">Get the latest updates and news right in your inbox!</h3>
            <br />
            <div className="join">
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;

const Footer = () => {
    return (
        <div className="bg-slate-950 text-white py-5 flex flex-col items-center">
            <img className="mb-8" src="/src/assets/logo-footer.png" alt="Footer Logo" />
            <footer className="mb-10 footer flex flex-col sm:flex-row justify-between w-full max-w-6xl">
                <nav className="text-center sm:text-left">
                    <h6 className="footer-title">About Us</h6>
                    <p className="max-w-xs mx-auto sm:mx-0">
                        We are a passionate team dedicated to providing the best
                        services to our customers.
                    </p>
                </nav>
                <nav className="ml-0 sm:ml-10 text-center sm:text-left">
                    <h6 className="footer-title">Quick Links</h6>
                    <ul>
                        <li><a className="link link-hover">About us</a></li>
                        <li><a className="link link-hover">Contact</a></li>
                        <li><a className="link link-hover">Jobs</a></li>
                        <li><a className="link link-hover">Press kit</a></li>
                    </ul>
                </nav>
                <form className="ml-0 sm:ml-10 text-center sm:text-left">
                    <h6 className="footer-title">Subscribe</h6>
                    <fieldset className="form-control w-80 mx-auto sm:mx-0">
                        <label className="label">
                            <span className="label-text">Subscribe to our newsletter for the latest updates.</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer><br />
            <footer className="footer footer-center border-base-300 border-t px-10 py-4">
                <aside>
                    <p>© {new Date().getFullYear()} Your Company All Rights Reserved.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;

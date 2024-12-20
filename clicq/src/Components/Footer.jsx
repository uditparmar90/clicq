const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
            {/* Social Media Section */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section>

            {/* Main Footer Section */}
            <section>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        {/* About Section */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-shopping-cart me-3"></i>amazon+clicq
                            </h6>
                            <p>
                                Your one-stop shop for electronics, fashion, home essentials, and more. We offer top-quality products from trusted brands.
                            </p>
                        </div>

                        {/* Categories Section */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Categories</h6>
                            <p><a href="#!" className="text-reset">Electronics</a></p>
                            <p><a href="#!" className="text-reset">Fashion</a></p>
                            <p><a href="#!" className="text-reset">Home & Kitchen</a></p>
                            <p><a href="#!" className="text-reset">Sports</a></p>
                        </div>

                        {/* Useful Links Section */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
                            <p><a href="#!" className="text-reset">Your Account</a></p>
                            <p><a href="#!" className="text-reset">Affiliate Program</a></p>
                            <p><a href="#!" className="text-reset">Shipping Rates</a></p>
                            <p><a href="#!" className="text-reset">Help Center</a></p>
                        </div>

                        {/* Contact Section */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3"></i> 123 E-Commerce St, WebCity, WC 45678, US</p>
                            <p><i className="fas fa-envelope me-3"></i> support@amazon-clicq.com</p>
                            <p><i className="fas fa-phone me-3"></i> +01 800 123 456</p>
                            <p><i className="fas fa-print me-3"></i> +01 800 123 457</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Bottom Section */}
            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2024 Copyright:
                <a className="text-reset fw-bold" href="https://amazon-clicq.com/">amazon+clicq</a>
            </div>
        </footer>
    );
};

export default Footer;

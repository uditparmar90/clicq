import 'bootstrap/dist/css/bootstrap.css';
const CardDetail = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img
                        className="img-fluid"
                        src="https://via.placeholder.com/400x400"
                        alt="Product"
                        style={{ borderRadius: '10px' }}
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="my-3">Product Name</h2>
                    <p className="text-muted">$99.99</p>
                    <p>
                        This is a great product with some amazing features.
                        Here you can provide a detailed description of the product.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                        Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    </p>
                    <div className="d-flex">
                        <button className="btn btn-primary me-2">Add to Cart</button>
                        <button className="btn btn-outline-secondary me-2">Add to Wishlist</button>
                        <button className="btn btn-info">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetail;

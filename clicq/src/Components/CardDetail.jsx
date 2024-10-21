import 'bootstrap/dist/css/bootstrap.css';
import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { addToCart } from '../redux/ShoppingCart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const CardDetail = ({ selectedProductId, setSelectedProductId }) => {
    const shoppingCartIds = useSelector((state) => state.cart.shoppingCartIds);
    console.log(shoppingCartIds);

    // Use shoppingCartIds length instead of value from Redux state
    const cartItemCount = useSelector((state) => state.cart.shoppingCartIds.length);
    console.log('shopping card length' + cartItemCount)
    const dispatch = useDispatch();

    const [findProduct, setFindProduct] = useState(null);
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track error state
    const [relatedproduct, setrelatedproduct] = useState([]);

    const getProduct = async () => {
        try {
            const resp = await fetch(`https://fakestoreapi.com/products/${selectedProductId}`);
            const product = await resp.json();
            if (!resp.ok) {
                throw new Error('Failed to fetch product');
            }
            setFindProduct(product);
        } catch (err) {
            console.error('Error fetching product:', err);
            setError('Failed to load product details. Please try again later.');
        } finally {
            setLoading(false); // Stop loading regardless of success or failure
        }
    };

    const getReletedProduct = async () => {
        //..if product is not selected || category of product is not available..
        if (!findProduct || !findProduct.category) return;
        try {
            const respReletedProducts = await fetch(`https://fakestoreapi.com/products/category/${findProduct.category}`);
            const reletedProducts = await respReletedProducts.json();

            if (!respReletedProducts.ok) {
                throw new Error('Response is not ok');
            }
            setrelatedproduct(reletedProducts);
            console.log(reletedProducts);
            selectSimilarProduct
        } catch (err) {
            console.error('Error fetching related products:', err);
        }

    }
    const selectSimilarProduct = (similarProductId) => {
        setSelectedProductId(null);
        setSelectedProductId(similarProductId);
        console.log(similarProductId);

    }




    useEffect(() => {
        if (selectedProductId) {
            getProduct();
        }
    }, [selectedProductId]);

    // Generate stars for product rating
    const renderStars = (rate) => {
        const fullStars = Math.floor(rate);
        const halfStar = rate % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        return (
            <div className="d-flex mb-2">
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={i} className="text-warning" />
                ))}
                {halfStar && <FaStarHalfAlt className="text-warning" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <FaRegStar key={i} className="text-warning" />
                ))}
            </div>
        );
    };


    // Render UI
    return (
        <>
            <div className="container my-5">
                <p>Cart Items: {cartItemCount}</p>
                {loading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-3">Loading product details...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-5">
                        <p className="text-danger">{error}</p>
                    </div>
                ) : findProduct ? (
                    <div className="row">
                        <div className="col-md-6 text-center mb-4">
                            <img
                                className="img-fluid"
                                src={findProduct.image}
                                alt={findProduct.title}
                                style={{
                                    maxWidth: '400px',
                                    maxHeight: '400px',
                                    height: 'auto',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                }}
                            />
                        </div>
                        <div className="col-md-6">
                            <h2 className="my-3">{findProduct.title}</h2>
                            <p className="text-muted fw-bold fs-5">Category: {findProduct.category}</p>
                            <p className="text-muted fw-bold fs-4 mb-2">${findProduct.price.toFixed(2)}</p>
                            <div className="d-flex align-items-center">
                                {renderStars(findProduct.rating.rate)}
                                <span className="ms-2 text-muted">({findProduct.rating.count} reviews)</span>
                            </div>
                            <p className="mt-3">{findProduct.description}</p>
                            <div className="d-flex mt-4">
                                <button
                                    className="btn btn-primary me-3 shadow-sm"
                                    onClick={() => dispatch(addToCart(findProduct.id))}
                                >
                                    Add to Cart
                                </button>
                                <button className="btn btn-outline-secondary me-3 shadow-sm">
                                    Add to Wishlist
                                </button>
                                <button className="btn btn-info shadow-sm">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-5">
                        <p>Product not found</p>
                    </div>
                )}
                <button onClick={getReletedProduct}>related product</button>
            </div>

            {/* ..................Similar Products........................ */}
            <div className="container my-4" style={{ background: "rgb(241,241,241)" }}>
                <div className="text-center mb-4">
                    <h1 className="display-8">Similar Products</h1>
                    {/* <p className="lead">Up to 50% off</p> */}
                </div>

                <div className="row">
                    {relatedproduct.map((product, index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="card h-100">
                                <img
                                    className="card-img-top"
                                    src={product.image}
                                    alt={product.title}
                                    style={{
                                        height: "200px",
                                        objectFit: "contain",
                                    }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p
                                        className="card-text"
                                        style={{
                                            flexGrow: 1,
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: "vertical",
                                        }}
                                    >
                                        {product.description}
                                    </p>
                                    <p className="card-text font-weight-bold">${product.price}</p>
                                    <a href="#" className="btn btn-primary mt-auto" onClick={(e) => { e.preventDefault(); selectSimilarProduct(product.id); }}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* {
                    productLength > limit && (
                        <div className="text-center" style={{
                            height: "50px",
                        }}>
                            <button className="btn btn-success" onClick={loadMoreHandle}>
                                Load more...
                            </button>
                        </div>
                    )
                } */}
            </div >
        </>
    );
};

CardDetail.propTypes = {
    selectedProductId: propTypes.number.isRequired,
};
// CardDetail.propTypes = {
//     setSelectedProductId: propTypes.number.isRequired,
// }

export default CardDetail;

import 'bootstrap/dist/css/bootstrap.css';
import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import ShoppingCart from './ShoppingCart';
import { decrement, increment } from '../redux/ShoppingCart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const CardDetail = ({ selectedProductId }) => {
    // ..............sample redux.............
    const count = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();

    // .....................................

    const [findProduct, setFindProduct] = useState(null);

    const getProduct = async () => {
        try {
            const resp = await fetch(`https://fakestoreapi.com/products/${selectedProductId}`);
            const product = await resp.json();
            setFindProduct(product);
        } catch (err) {
            console.error('Error fetching product:', err);
        }
    };

    useEffect(() => {
        if (selectedProductId) {
            getProduct();
        }
    }, [selectedProductId]);

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

    //add product in in queue for Shopping cart 
    const [shoopingCartId, setShoopingCartId] = useState([]);
    const handleShoppingCart = (id) => {
        console.log(id);
        if (!shoopingCartId.includes(id)) {
            setShoopingCartId(prevCart => [...prevCart, id]);
            console.log("product added : ", id)

        } else {
            console.log("product already present in cart ")
        }

    }
    console.log("total list of shopping cart : " + shoopingCartId);

    return (
        <>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>

            <div className="container my-5">
                {findProduct ? (
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
                                <button className="btn btn-primary me-3 shadow-sm" onClick={() => handleShoppingCart(findProduct.id)}>
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
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-3">Loading product details...</p>
                    </div>
                )}
            </div>
        </>
    );
};

CardDetail.propTypes = {
    selectedProductId: propTypes.number.isRequired,
};

export default CardDetail;

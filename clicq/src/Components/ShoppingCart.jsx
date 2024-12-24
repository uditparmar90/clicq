import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
    const shoppingCartIds = useSelector((state) => state.cart.shoppingCartIds);
    console.log(`shopping card ids : ${shoppingCartIds}`);
    const [cartId, setCartId] = useState([]);
    const newCart = [...cartId, shoppingCartIds];
    console.log(`new cart itens ids : ${newCart}`)
    setCartId(newCart);
    const [cartItems, setCartItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise(
                    shoppingCartIds.map((id) =>
                        fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
                    )
                );
                setCartItems(responses);
            } catch (err) {
                setError("Failed to fetch cart items.");
                console.error(err);
            }
        };

        if (shoppingCartIds?.length) {
            fetchData();
        }
    }, [shoppingCartIds]);

    return (
        <div className="card">
            <div className="row">
                {/* Cart Items Section */}
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col">
                                <h4><b>Shopping Cart</b></h4>
                            </div>
                            <div className="col align-self-center text-right text-muted">
                                {cartItems.length} items
                            </div>
                        </div>
                    </div>
                    {error ? (
                        <p className="text-danger">{error}</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="row border-top border-bottom">
                                <div className="row main align-items-center">
                                    <div className="col-2">
                                        <img className="img-fluid" src={item.image} alt={item.title} />
                                    </div>
                                    <div className="col">
                                        <div className="row text-muted">{item.category}</div>
                                        <div className="row">{item.title}</div>
                                    </div>
                                    <div className="col">
                                        <a href="#">-</a>
                                        <a href="#" className="border">1</a>
                                        <a href="#">+</a>
                                    </div>
                                    <div className="col">
                                        &euro; {item.price}{" "}
                                        <span className="close">&#10005;</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                    <div className="back-to-shop">
                        <a href="/">&larr;</a>
                        <span className="text-muted">Back to shop</span>
                    </div>
                </div>

                {/* Summary Section */}
                <div className="col-md-4 summary">
                    <div>
                        <h5><b>Summary</b></h5>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col" style={{ paddingLeft: 0 }}>ITEMS {cartItems.length}</div>
                        <div className="col text-right">
                            &euro; {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
                        </div>
                    </div>
                    <form>
                        <p>SHIPPING</p>
                        <select>
                            <option className="text-muted">Standard-Delivery- &euro;5.00</option>
                        </select>
                        <p>GIVE CODE</p>
                        <input id="code" placeholder="Enter your code" />
                    </form>
                    <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">
                            &euro; {(cartItems.reduce((total, item) => total + item.price, 0) + 5).toFixed(2)}
                        </div>
                    </div>
                    <button className="btn">CHECKOUT</button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;

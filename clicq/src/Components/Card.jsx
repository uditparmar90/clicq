import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Card = ({ handleProductBuy }) => {
    const [productList, setProductList] = useState([]);
    const [limit, setLimit] = useState(4);
    const [productLength, setProductLength] = useState(0);

    const getProductList = async () => {
        try {
            const resp = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
            const data = await resp.json();
            setProductList(data);
            const totalResp = await fetch('https://fakestoreapi.com/products');
            const totalData = await totalResp.json();
            setProductLength(totalData.length);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProductList();
    }, [limit]);

    const loadMoreHandle = () => {
        setLimit((prevLimit) => prevLimit + 4);
    };

    return (
        <div className="container my-4" style={{ background: "rgb(241,241,241)" }}>
            <div className="text-center mb-4">
                <h1 className="display-4">Featured Products</h1>
                <p className="lead">Up to 50% off</p>
            </div>

            <div className="row">
                {productList.map((product, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card h-100 shadow-sm">
                            {/* Responsive Image */}
                            <img
                                className="card-img-top"
                                src={product.image}
                                alt={product.title}
                                style={{
                                    height: "250px", // Increased height for better visibility
                                    objectFit: "contain", // Ensures image doesn't overflow
                                    padding: "10px", // Adds space around the image
                                    borderRadius: '8px', // Softens the image corners
                                }}
                            />
                            <div className="card-body d-flex flex-column">
                                {/* Product Title */}
                                <h5 className="card-title text-center text-truncate" title={product.title} style={{ fontWeight: "bold" }}>
                                    {product.title}
                                </h5>

                                {/* Product Description */}
                                <p
                                    className="card-text"
                                    style={{
                                        flexGrow: 1,
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 3, // Limit description to 3 lines
                                        WebkitBoxOrient: "vertical",
                                        fontSize: "14px", // Adjust font for readability
                                        color: "#6c757d", // Use muted color for description
                                    }}
                                >
                                    {product.description}
                                </p>

                                {/* Product Price */}
                                <p className="card-text text-primary font-weight-bold fs-5">${product.price.toFixed(2)}</p>

                                {/* Buy Button */}
                                <a
                                    href="#"
                                    className="btn btn-primary mt-auto shadow-sm"
                                    onClick={() => handleProductBuy(product.id)}
                                    style={{
                                        minHeight: "40px", // Ensures button is large enough for touch devices
                                        fontSize: "14px", // Adapts text size to various screen sizes
                                        padding: "10px", // Comfortable touch area
                                    }}
                                >
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {
                productLength > limit && (
                    <div className="text-center" style={{
                        height: "50px",
                    }}>
                        <button className="btn btn-success" onClick={loadMoreHandle}>
                            Load more...
                        </button>
                    </div>
                )
            }
        </div >
    );
};

export default Card;

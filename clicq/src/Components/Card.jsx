import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = () => {
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
                                <a href="#" className="btn btn-primary mt-auto" onClick={() => console.log(product.id)}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {console.log(productLength)}
            {console.log(limit)}
            {
                productLength > limit && (
                    <div className="text-center" style={{
                        height: "50px",
                        // objectFit: "contain"
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

import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {
    const [productList, setProductList] = useState([]);

    const getProductList = async () => {
        try {
            const resp = await fetch('https://fakestoreapi.com/products');
            const data = await resp.json();
            // console.log(data);
            setProductList(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProductList();
    }, []);

    return (
        <div className="container my-4" style={{ background: 'rgb(241,241,241)' }}>
            <div className="text-center mb-4">
                <h1 className="display-4">Featured Products</h1>
                <p className="lead">Up to 50% off</p>
            </div>

            <div className="row">
                {productList.map((product, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card h-100">
                            <img className="card-img-top" src={product.image} alt={product.title} style={{ height: '200px', objectFit: 'contain' }} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text" style={{
                                    flexGrow: 1,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical'
                                }}>{product.description}</p>
                                <p className="card-text font-weight-bold">${product.price}</p>
                                <a href="#" className="btn btn-primary mt-auto">Buy Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;

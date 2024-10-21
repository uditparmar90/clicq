import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Footer from "./Footer";
// import Product_page from "./Product_page";
// import Registration from "./Registration";
import React, { Suspense, useState } from "react";
import CardDetail from "./CardDetail";

const Home = () => {
    const [selectedProductId, setSelectedProductId] = useState(null);
    selectedProductId ? console.log("selectedProductId " + selectedProductId) : console.log("Null");
    const handleProductBuy = (productId) => {
        setSelectedProductId(productId);
    };

    const LazyLoadProduct = React.lazy(
        () =>
            new Promise((resolve) =>
                setTimeout(() => resolve(import("./Card")), 2000)
            )
    );
    return (
        <>
            <Navbar />
            {selectedProductId != null ? <CardDetail selectedProductId={selectedProductId} setSelectedProductId={setSelectedProductId} /> : <><Carousel /> <Suspense
                fallback={
                    <div
                        className="container my-4"
                        style={{ background: "rgb(241,241,241)" }}
                    >
                        <div className="text-center mb-4">
                            <h1 className="display-4">Featured Products</h1>
                            <p className="lead">Up to 50% off</p>
                            <b className="lead fw-bold">
                                <div className="spinner-border text-secondary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </b>
                        </div>
                    </div>
                }
            >
                <LazyLoadProduct handleProductBuy={handleProductBuy} />
            </Suspense>
            </>
            }
            <Footer />
        </>
    )
}

export default Home

import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Registration from "./Registration";
import React, { Suspense } from "react";

const Home = () => {
    const LazyLoadProduct = React.lazy(
        () =>
            new Promise((resolve) =>
                setTimeout(() => resolve(import("./Card")), 2000)
            )
    );
    return (
        <>
            <Navbar />
            <Carousel />
            <Suspense
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
                <LazyLoadProduct />
            </Suspense>
            <Registration />
            <Footer />
        </>
    )
}

export default Home

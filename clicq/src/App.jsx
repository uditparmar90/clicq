import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import CardDetail from "./Components/CardDetail";
import Registration from "./Components/Registration";
import axios from "axios";
import React, { useState, useEffect, useMemo, Suspense } from "react";
const LazyLoadProduct = React.lazy(
    () =>
        new Promise((resolve) =>
            setTimeout(() => resolve(import("./Components/Card")), 2000)
        )
);

// const nums = new Array(30_000_000).fill(0).map((_, i) => {
//     return {
//         index: i,
//         isMagical: i === 29_000_000,
//     };
// });

function App() {
    // const [userDetails, setUserDetails] = useState([]);
    // useEffect(() => {
    //   async function getAllUsers() {
    //     try {
    //       const user = await axios.get('http://127.0.0.1:8000/api/regUser/');
    //       console.log(user.data);
    //       setUserDetails(user.data);
    //     }
    //     catch (err) {
    //       console.log(err);
    //     }
    //   }
    //   getAllUsers();
    // }, []);

    // const [count, setCount] = useState(0);
    // const [numbers, setNumbers] = useState(nums);

    // const magical = useMemo(
    //     () => numbers.find((item) => item.isMagical === true),
    //     [numbers]
    // );

    return (
        <>
            {/* <span>Magical Num is: {magical.index}</span> */}
            {/* <p>{count}</p> */}
            {/* <button
                onClick={() => {
                    setCount((count) => count + 1);
                    if (count === 10) {
                        setNumbers(
                            new Array(10_000_000).fill(0).map((_, i) => {
                                return {
                                    index: i,
                                    isMagical: i === 9_000_000,
                                };
                            })
                        );
                    }
                }}
            >
                Set Count
            </button> */}
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
                                Product displays Soon
                            </b>
                        </div>
                    </div>
                }
            >
                <LazyLoadProduct />
            </Suspense>

            <CardDetail />
            <Registration />
            <Footer />
        </>
    );
}

export default App;

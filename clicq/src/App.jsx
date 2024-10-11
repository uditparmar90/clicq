import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

// import Card from "./Components/Card";
import Home from "./Components/Home";
import Product_page from "./Components/Product_page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
// const LazyLoadProduct = React.lazy(
//     () =>
//         new Promise((resolve) =>
//             setTimeout(() => resolve(import("./Components/Card")), 2000)
//         )
// );
function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/product_page' element={<Product_page />} />

                </Routes>
                <div>
                    <Navbar />
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;

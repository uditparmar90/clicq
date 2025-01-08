import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./Components/Home";
import Product_page from "./Components/Product_page";
import ShoppingCart from "./Components/ShoppingCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import BrandsPage from "./Components/BrandsPage";
import Registration from "./Components/Registration";
import Login from "./Components/Login";

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/product_page"
                            element={<Product_page />}
                        />
                        <Route
                            path="/shopping_cart"
                            element={<ShoppingCart />}
                        />
                        <Route
                            path="/user_registation"
                            element={<Registration />}
                        />
                        <Route path="/user_login" element={<Login />} />
                        <Route path="/brands" element={<BrandsPage />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;

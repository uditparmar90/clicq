import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/images/logo.svg";
import "../modules/Navbar.module.css";
import styles from "../modules/Navbar.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { } from "module";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation(); // Get current path
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    let navbarClasses = ["navbar", "navbar-expand-lg", "navbar-dark"];
    if (scrolled) {
        navbarClasses.push("scrolled");
    }

    return (
        <nav
            className={navbarClasses.join(" ")}
            style={{
                position: "sticky",
                top: 0,
                zIndex: 1000,
                color: "black",
                background: "rgb(51,51,51)",
                height: "50px",
            }}
        >
            <a className="navbar-brand" href="#">
                <img
                    src={logo}
                    alt="Logo"
                    className="d-inline-block align-top"
                    style={{ height: "40px", width: "100%" }}
                />
            </a>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Category
                        </a>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <a
                                className={`${styles.CateItem} dropdown-item`}
                                href="#"
                            >
                                Kids Fashion
                            </a>
                            <a
                                className={`${styles.CateItem} dropdown-item`}
                                href="#"
                            >
                                Mens Wear
                            </a>
                            <a
                                className={`${styles.CateItem} dropdown-item`}
                                href="#"
                            >
                                Womens Wear
                            </a>
                            <a
                                className={`${styles.CateItem} dropdown-item`}
                                href="#"
                            >
                                Gaming
                            </a>
                            <a
                                className={`${styles.CateItem} dropdown-item`}
                                href="#"
                            >
                                Gadgets
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/brands" className={`nav-link ${location.pathname === '/brands' ? 'active' : ''}`}>
                            Brands
                        </Link>
                    </li>
                </ul>
                <form className="d-flex ms-auto">
                    <input
                        className={`${styles.customSearch} form-control me-2 p-auto m-auto`}
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        style={{
                            height: "30px",
                            display: "flex!important",
                            alignItems: "center!important",
                            background: "rgb(75,75,75)",
                            border: "2px solid rgb(45,45,45)",
                            color: "whitesmoke",
                        }}
                    />
                    <button
                        className="btn btn-outline-success p-0 mr-2 me-2"
                        type="submit"
                        style={{
                            height: "30px",
                            display: "flex!important",
                            alignItems: "center!important",
                        }}
                    >
                        Search
                    </button>
                    <button
                        className="btn btn-transparent"
                        style={{ color: "orange" }}
                        title="Shopping Cart"
                    >
                        <Link to='/Shpping_cart' className="{`nav-link ${location.pathname === '/Shpping_cart' ? 'active' : ''}`}">
                            <FiShoppingCart />
                        </Link>
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;

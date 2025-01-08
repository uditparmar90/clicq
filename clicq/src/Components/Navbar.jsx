import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import navbarLogo from "../assets/images/image.png";
import styles from "../modules/Navbar.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearch, FaUser } from "react-icons/fa";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

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
        navbarClasses.push("scrolled shadow-sm");
    } else {
        navbarClasses.push("shadow-sm");
    }

    return (
        <nav
            className={navbarClasses.join(" ")}
            style={{
                // position: "sticky",
                top: 0,
                zIndex: 1000,
                backgroundColor: "rgb(19,25,33)",
                height: "58px",
            }}
        >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img
                        src={navbarLogo}
                        alt="Logo"
                        className="d-inline-block align-top"
                        style={{ height: "40px" }}
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span
                        className="navbar-toggler-icon"
                        style={{ backgroundColor: "rgb(19,25,33)" }}
                    ></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                    style={{
                        backgroundColor: "rgb(19,25,33)",
                        height: "40px", // Added background color
                    }}
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={`nav-link ${
                                    location.pathname === "/" ? "active" : ""
                                }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Category
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Kids Fashion
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Mens Wear
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Womens Wear
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Gaming
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Gadgets
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/brands"
                                className={`nav-link ${
                                    location.pathname === "/brands"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                Brands
                            </Link>
                        </li>
                    </ul>

                    {/* Right-side Search and Cart */}
                    <div className="d-flex ms-auto align-items-center">
                        <form className="d-flex">
                            <input
                                className={`${styles.customSearch} form-control me-2 `}
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn "
                                type="submit"
                                style={{
                                    backgroundColor: "rgb(243,168,71)",
                                    color: " rgb(53,52,52)",
                                }}
                            >
                                <FaSearch />
                            </button>
                        </form>
                        <Link
                            to="/shopping_cart"
                            className="btn btn-transparent ms-2"
                            title="Shopping Cart"
                        >
                            <FiShoppingCart style={{ color: "orange" }} />
                            <h6 style={{ color: "whitesmoke" }}>Cart</h6>
                        </Link>
                        <Link
                            to="/user_registation"
                            className="btn btn-transparent ms-2"
                            title="Shopping Cart"
                        >
                            <FaUser style={{ color: "whitesmoke" }} />
                            <h6 style={{ color: "whitesmoke" }}>User</h6>
                        </Link>
                        <Link
                            to="/user_login"
                            className="btn btn-transparent ms-2"
                            title="Shopping Cart"
                        >
                            <FaUser style={{ color: "whitesmoke" }} />
                            <h6 style={{ color: "whitesmoke" }}>User</h6>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

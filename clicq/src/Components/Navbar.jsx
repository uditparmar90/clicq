import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import navbarLogo from "../assets/images/navbarLogo.svg";
import "../modules/Navbar.module.css";
import styles from "../modules/Navbar.module.css";
import { FiShoppingCart } from "react-icons/fi";

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
                background: scrolled ? "rgb(51, 51, 51)" : "transparent",
                transition: "background 0.3s ease",
            }}
        >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img
                        src={navbarLogo}
                        alt="Amazon logo"
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
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={`nav-link ${location.pathname === "/" ? "active" : ""
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
                                    <a
                                        className={`dropdown-item ${styles.CateItem}`}
                                        href="#"
                                    >
                                        Kids Fashion
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`dropdown-item ${styles.CateItem}`}
                                        href="#"
                                    >
                                        Mens Wear
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`dropdown-item ${styles.CateItem}`}
                                        href="#"
                                    >
                                        Womens Wear
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`dropdown-item ${styles.CateItem}`}
                                        href="#"
                                    >
                                        Gaming
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`dropdown-item ${styles.CateItem}`}
                                        href="#"
                                    >
                                        Gadgets
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/brands"
                                className={`nav-link ${location.pathname === "/brands"
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
                                className={`${styles.customSearch} form-control me-2`}
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                style={{
                                    background: "rgb(75, 75, 75)",
                                    border: "2px solid rgb(45, 45, 45)",
                                    color: "whitesmoke",
                                }}
                            />
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                                style={{
                                    color: "whitesmoke",
                                    backgroundColor: "rgb(45, 45, 45)",
                                }}
                            >
                                Search
                            </button>
                        </form>
                        <Link
                            to="/shopping_cart"
                            className="btn btn-transparent ms-2"
                            style={{ color: "orange" }}
                            title="Shopping Cart"
                        >
                            <FiShoppingCart />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

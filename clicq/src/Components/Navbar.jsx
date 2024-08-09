import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/images/logo.png";
import '../modules/Navbar.module.css';
import styles from "../modules/Navbar.module.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let navbarClasses = ['navbar', 'navbar-expand-lg', 'navbar-dark'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }

    return (
        <nav className={navbarClasses.join(' ')} style={{ position: 'sticky', top: 0, zIndex: 1000, color: 'black', background: 'rgb(51,51,51)', height: '50px' }}>
            <a className="navbar-brand" href="#">
                <img src={logo} alt="Logo" className="d-inline-block align-top" style={{ height: '40px', width: '100%' }} />
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Categories</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            Category
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className={`${styles.CateItem} dropdown-item`} onMouseOver="this.style.color='orange'"
                                href="#">Kids Fashion</a>
                            <a className={`${styles.CateItem} dropdown-item`} onMouseOver="this.style.color='green'" href="#" >Mens Wear</a>
                            <a className={`${styles.CateItem} dropdown-item`} onMouseOver="this.style.color='orange'" href="#">Womens Wear</a>
                            <a className={`${styles.CateItem} dropdown-item`} onMouseOver="this.style.color='orange'" href="#">Gaming</a>
                            <a className={`${styles.CateItem} dropdown-item`} onMouseOver="this.style.color='orange'" href="#">Gadgets</a>
                        </div>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Brands</a>
                    </li>
                </ul>
                <form className="d-flex ms-auto">
                    <input className={`${styles.customSearch}form-control me-2 p-auto m-auto`} type="search" placeholder="Search" aria-label="Search" style={{ height: '30px', display: 'flex!important', alignItems: 'center!important', background: 'rgb(75,75,75)', border: '2px solid rgb(45,45,45)', color: 'whitesmoke' }} />


                    <button className="btn btn-outline-success p-0 mr-2 me-2" type="submit" style={{ height: '30px', display: 'flex!important', alignItems: 'center!important' }}>Search</button>
                </form>
            </div>
        </nav >
    );
};

export default Navbar;

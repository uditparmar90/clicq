import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";

const BrandsPage = () => {
    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectProduct, setSelectedProduct] = useState([]);
    const handleSelectChange = (e) => {
        const brandId = e.target.value;
        const brand = brands.find((b) => b.id.toString() === brandId);
        setSelectedBrand(brand || null);
    };
    useEffect(() => {
        if (selectedBrand) {
            console.log(selectedBrand.id);
            axios
                .get(
                    `http://127.0.0.1:8000/api/products/${selectedBrand.id}`
                    // {
                    //     params: {
                    //         filter: `[["brand","=",${selectedBrand.id}]]`,
                    //     },
                    // }
                )
                .then((response) => {
                    setSelectedProduct(response.data);
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error(
                        "Error fetching products for the selected brand: ",
                        error
                    );
                });
        }
    }, [selectedBrand]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/brands/")
            .then((response) => {
                setBrands(response.data);
            })
            .catch((error) => {
                console.error("Error fetching brands:", error);
            });
    }, []); // Empty dependency array to run only once on mount

    return (
        <>
            <Navbar />
            <div className="container my-4">
                <h1 className="text-center">Our Brands</h1>
                <div className="my-3">
                    <label htmlFor="brandSelect" className="form-label">
                        Select a Brand:
                    </label>
                    <select
                        id="brandSelect"
                        className="form-select"
                        onChange={handleSelectChange}
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Select a Brand
                        </option>
                        {brands.map((brand) => (
                            <option key={brand.id} value={brand.id}>
                                {brand.brand}
                            </option>
                        ))}
                    </select>
                </div>
                {selectProduct.map((data) => (
                    <h2 key={data.id}>{data.name}</h2>
                ))}
                <div
                    className="container my-4"
                    style={{
                        background: "rgb(241,241,241)",
                        borderRadius: "3px",
                    }}
                >
                    <div className="text-center mb-4">
                        <h1 className="display-4">Featured Products</h1>
                        <p className="lead">Up to 50% off</p>
                    </div>

                    <div className="row">
                        {selectProduct.map((product, index) => (
                            <div
                                key={product.id}
                                className="col-lg-3 col-md-4 col-sm-6 mb-4"
                            >
                                <div className="card h-100 shadow-sm">
                                    {/* Responsive Image */}
                                    <img
                                        className="card-img-top"
                                        src={product.img}
                                        alt={product.name}
                                        style={{
                                            height: "250px", // Increased height for better visibility
                                            objectFit: "contain", // Ensures image doesn't overflow
                                            padding: "10px", // Adds space around the image
                                            borderRadius: "8px", // Softens the image corners
                                        }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        {/* Product Title */}
                                        <h5
                                            className="card-title text-center text-truncate"
                                            title={product.title}
                                            style={{ fontWeight: "bold" }}
                                        >
                                            {product.name}
                                        </h5>

                                        {/* Product Description */}
                                        <p
                                            className="card-text"
                                            style={{
                                                flexGrow: 1,
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                display: "-webkit-box",
                                                WebkitLineClamp: 3, // Limit description to 3 lines
                                                WebkitBoxOrient: "vertical",
                                                fontSize: "14px", // Adjust font for readability
                                                color: "#6c757d", // Use muted color for description
                                            }}
                                        >
                                            {product.desc}
                                        </p>

                                        {/* Product Price */}
                                        <p className="card-text text-primary font-weight-bold fs-5">
                                            ${product.brand}
                                        </p>

                                        {/* Buy Button */}
                                        <a
                                            href="#"
                                            className="btn btn-primary mt-auto shadow-sm"
                                            // onClick={() => handleProductBuy(product.id)}
                                            style={{
                                                minHeight: "40px", // Ensures button is large enough for touch devices
                                                fontSize: "14px", // Adapts text size to various screen sizes
                                                padding: "10px", // Comfortable touch area
                                            }}
                                        >
                                            Buy Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* {productLength > limit && (
                        <div
                            className="text-center"
                            style={{
                                height: "50px",
                            }}
                        >
                            <button
                                className="btn btn-success"
                                onClick={loadMoreHandle}
                            >
                                Load more...
                            </button>
                        </div>
                    )} */}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BrandsPage;

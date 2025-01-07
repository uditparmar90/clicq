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
                    `http://127.0.0.1:8000/api/Product/${selectedBrand.id}`
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
                {/* {selectedBrand && <Card />} */}
            </div>
            <Footer />
        </>
    );
};

export default BrandsPage;

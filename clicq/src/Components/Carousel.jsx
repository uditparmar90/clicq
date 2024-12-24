import 'bootstrap/dist/css/bootstrap.css';
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { useEffect, useState } from 'react';
import styles from '../modules/Carousel.module.css';

const Carousel = () => {
    const carousel = [
        {
            id: 1,
            img: "https://tatacliq.netlify.app/images/home%20page/top%20-carousel%20(1).jpg",
        },
        {
            id: 2,
            img: "https://assets.tatacliq.com/medias/sys_master/images/45581158809630.jpg",
        },
        {
            id: 3,
            img: "https://assets.tatacliq.com/medias/sys_master/images/45554503090206.jpg",
        },
        {
            id: 4,
            img: "https://assets.tatacliq.com/medias/sys_master/images/45581158809630.jpg",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % carousel.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + carousel.length) % carousel.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`carousel slide ${styles.customCarousel} mb-2`} data-ride="carousel">
            <div className="carousel-inner">
                {carousel.map((item, index) => (
                    <div key={item.id} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                        <img src={item.img} className="d-block w-100" alt={`Slide ${item.id}`} />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" onClick={prevSlide} aria-label="Previous">
                <FaChevronCircleLeft className="carousel-control-prev-icon" style={{ fontSize: '2rem', color: 'white' }} />
            </button>
            <button className="carousel-control-next" onClick={nextSlide} aria-label="Next">
                <FaChevronCircleRight className="carousel-control-next-icon" style={{ fontSize: '2rem', color: 'white' }} />
            </button>
        </div>
    );
};

export default Carousel;

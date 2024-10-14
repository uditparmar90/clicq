import 'bootstrap/dist/css/bootstrap.css';
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { useEffect, useState } from 'react';

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
            img: "https://assets.tatacliq.com/medias/sys_master/images/45581158940702.jpg",
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % carousel.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + carousel.length) % carousel.length);
    };
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval)
    }, [])

    return (
        <div id="carouselExampleControls" className="carousel slide mb-2" data-ride="carousel">
            <div className="carousel-inner">
                {carousel.map((item, index) => (
                    <div key={item.id} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                        <img src={item.img} className="d-block w-100" alt={`Slide ${item.id}`} />
                    </div>
                ))}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" onClick={prevSlide}>
                <FaChevronCircleLeft className="carousel-control-prev-icon" style={{ fontSize: '2rem' }} />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" onClick={nextSlide}>
                <FaChevronCircleRight className="carousel-control-next-icon" style={{ fontSize: '2rem' }} />
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel;

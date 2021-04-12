import React, { useState } from 'react';

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './App.css';


const ImageSlider = ({images}) => {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    const renderedImages = images.map((image, index) => {

        return(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && <img src={image.urls.regular} className="image"/> }
                </div>
            )
    })
    if(!Array.isArray(images) || length <= 0){
        return null;
    }
    return (
        <div>
            <section className="slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
                {renderedImages}
            </section>
            
        </div>
    )
}

export default ImageSlider;

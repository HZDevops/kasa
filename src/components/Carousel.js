import React, { useState } from 'react';
import '../styles/Carousel.css';
import ArrowRight from '../assets/ArrowRight.png';
import ArrowLeft from '../assets/ArrowLeft.png';

function Carousel({images}) {
    
    let [imageDisplayed, updateImage] = useState(0);
    let imagesNumber = images.length;

    const previewImage = () => {
        if(imageDisplayed === 0) {
            updateImage(imagesNumber - 1);
        } else {
            updateImage(imageDisplayed - 1);
        }
        return(updateImage);
    };  

    const nextImage = () => {
        if(imageDisplayed === imagesNumber - 1) {
            updateImage(imagesNumber = 0);
        } else {
            updateImage(imageDisplayed + 1);
        }
        return(updateImage);
    };

    return(
        <div className='kasa-carousel'>
            {
                imagesNumber > 1 && <img className='arrow arrow-left' src={ArrowLeft} alt='arrow left' onClick={previewImage}/>
            }
            {
                imagesNumber > 1 && <img className='arrow arrow-right' src={ArrowRight} alt='arrow right' onClick={nextImage}/>
            }
            {
                images.map((image, index) => (
                    index===imageDisplayed ? (
                        <div>
                            <img key={index} className='carousel-image displayed' src={image} alt='Accomodation'/>
                            <span key={`image-${index}`} className='image-number'>{`${index+1}/${imagesNumber}`}</span>
                        </div>
                        ) : (
                        <img key={index} className='carousel-image' src={image} alt='Accomodation'/>
                        )
                ))
            }
            
        </div>
    );
}

export default Carousel;
import React, { useState } from 'react';
import { Flex } from '@pancakeswap/uikit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { relative } from 'path';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
      paritialVisibilityGutter: 80
    },
    desktop: {
      breakpoint: { max: 3000, min: 852 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };

const images = [
    {url: "images/home/art-gallery/image1.jpg"},
    {url: "images/home/art-gallery/image2.jpg"},
    {url: "images/home/art-gallery/image3.jpg"},
    {url: "images/home/art-gallery/image4.jpg"},
    {url: "images/home/art-gallery/image5.jpg"},
    {url: "images/home/art-gallery/image6.jpg"},
    {url: "images/home/art-gallery/image7.jpg"}
];
/*
    width: 14px;
    height: 30px;
    background-image: url(/images/icons/caret-left-solid.svg);
    background-size: 2 auto;
    fill: #f2ca66;
    margin-left: 10px;
    margin-top: -8px;
*/

const ArtGallerySection = () => {
    const [carousel, setCarousel] = useState(null);

    const onPrevClick = (e) => {
        carousel.previous();
    }

    const onNextClick = (e) => {
        console.log(carousel);
        carousel.next();
    }

    return (
        <Flex flexDirection="column">
            <Flex flexDirection="column">
                    <span className='infoTitle'>$RYOSHI Art Gallery</span>
                    <span className='infoText'>Submit your work to us! We’re interested in what you’re producing</span>
                
            </Flex>
            <Flex style={{marginTop: 30, marginBottom: 40}} justifyContent="space-between">
                <button type="button" className="artSubmitBtn">Submit Artwork</button>
                <div className='artArrowNav'>
                    <button type="button" className="artPreviousBtn" onClick={onPrevClick}> </button>
                    <button type="button" className="artNextBtn" onClick={onNextClick}> </button>
                </div>
            </Flex>

            <Carousel
                ref={el => setCarousel(el)}
                ssr
                infinite
                draggable={false}
                deviceType='desktop'
                itemClass='artImage'
                responsive={responsive}
                arrows={false}
            >
                {images.map(image => {
                    return (
                        <div key={image.url} className=''>
                            <img src={image.url} alt="img"/>
                        </div>
                    )
                })}
            </Carousel>
        </Flex>
    )
}

export default ArtGallerySection;
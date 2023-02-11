import './carousel.styles.scss';

import { React, useState } from 'react'
import { Carousel } from 'react-bootstrap';

export default function CarouselComponent({dataSet}) {
  const [index, setIndex ] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
      {dataSet.map((slide, i) => {
        return (
          <Carousel.Item 
          >
            <div className='imgContainer'>
              <img
                height="400px"
                className='carouselImg'
                // className="d-block w-80"
                src={slide.img}
                alt={slide.alt}
              />
              <img 
                height="400px"
                className='carouselImg'
                src={slide.img2}
                alt={slide.alt2}
              />
            </div>        
            <Carousel.Caption>
              <div className='textBox'>
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
};

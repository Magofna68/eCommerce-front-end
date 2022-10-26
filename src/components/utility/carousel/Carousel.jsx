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
          <Carousel.Item interval={3500}>        
            <img
              className="d-block w-100"
              src={slide.img}
              alt={slide.alt}
            />
            <Carousel.Caption>
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
};

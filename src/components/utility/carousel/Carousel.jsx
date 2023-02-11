import './carousel.styles.scss';

import { React, useState } from 'react'
import { Carousel } from 'react-bootstrap';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function CarouselComponent({dataSet}) {
  const [index, setIndex ] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      {dataSet.map((slide, i) => {
        return (
          <Carousel.Item 
          >
            <div className='imgContainer'>
              <div className="carouselImg">
                <img
                  height="400px"
                  width="300px"
                  src={slide.img}
                  alt={slide.alt}
                />
              </div>
            <Carousel.Caption>
              <div className='textBox'>
                <span>{slide.title}</span>
                <div>
                  <FormatQuoteIcon />
                  {slide.quote}
                  <FormatQuoteIcon />
                </div>
                <p>{slide.text}</p>
              </div>
            </Carousel.Caption>
              <div className="carouselImg">
                <img 
                  height="400px"
                  width="300px"
                  src={slide.img2}
                  alt={slide.alt2}
                />
              </div>
            </div>        
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
};

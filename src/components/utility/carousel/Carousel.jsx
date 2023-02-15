import './carousel.styles.scss';

import { React, useState } from 'react'
import { Carousel, Button } from 'react-bootstrap';

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
            {
              window.innerWidth > 1000 ?
              <div className='imgContainer'>
              <div className="carouselImg">
                <img
                  height="100%"
                  width="100%"
                  src={slide.img}
                  alt={slide.alt}
                  />
              </div>
              <div className='textBox'>
                <span>{slide.title}</span>
                <div>
                  <FormatQuoteIcon />
                    {slide.quote}
                  <FormatQuoteIcon />
                </div>
                <br/>
                <Button>{slide.text}</Button>
              </div>
              <div className="carouselImg">
                <img 
                  height="100%"
                  width="100%"
                  src={slide.img2}
                  alt={slide.alt2}
                  />
              </div>
            </div>
            :
            <div className='imgContainer'>
            <div className="carouselImg">
              <img
                height="100%"
                width="100%"
                src={slide.img}
                alt={slide.alt}
                />
            </div>
            <div className='textBox'>
              <span className='slideTitle'>{slide.title}</span>
              <div className="quoteContainer">
                <FormatQuoteIcon />
                  {slide.quote}
                <FormatQuoteIcon />
              </div>
              <br/>
              <Button>{slide.text}</Button>
            </div> 
            </div>
            }
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
};

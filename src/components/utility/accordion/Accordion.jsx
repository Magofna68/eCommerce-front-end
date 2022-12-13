import { Reviews, WindowRounded } from '@mui/icons-material';
import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import {Link} from 'react-router-dom';
import ReviewTemplate from '../reviewTemplate/ReviewTemplate';

const AccordionComponent = (props) => {
  const { details, desc, reviews } = props;
//   const { isMobile, setIsMobile } = useState(window.innerWidth)

//   useEffect(()=> {
//     const handleResize = () => {
//         if (window.innerWidth > 767) 
//         setIsMobile(false);
//        else if (window.innerWidth < 767) 
//         setIsMobile(true);
      
//     };
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
// }, [isMobile]);

  return (
    <Accordion defaultActiveKey="0" flush style={{marginTop: '3%'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Description:</Accordion.Header>
        <Accordion.Body>{desc}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Details:</Accordion.Header>
        <Accordion.Body>{details}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Shipping:</Accordion.Header>
        <Accordion.Body>
          Free standard shipping and free 60-day returns for Members.<br/> <br/>
          Check out our Return Policy <span><Link to='/returnpolicy'>Here</Link></span>.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Rating:</Accordion.Header>
        <Accordion.Body onClick={()=> console.log({reviews})} style={{padding: 0}}>
          {
            reviews.map(({id, ...otherReviewProps}) => (
              <ReviewTemplate 
                key={id} 
                // id={reviews.id} 
                // title={reviews.title} 
                // feedback={reviews.feedback} 
                // rating={reviews.rating}
                // username={reviews.username}
                // date={reviews.date}
                {...otherReviewProps}
              />
            )
            )
          }
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionComponent;
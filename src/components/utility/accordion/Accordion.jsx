import { Reviews, WindowRounded } from '@mui/icons-material';
import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import {Link} from 'react-router-dom';
import ReviewTemplate from '../reviewTemplate/ReviewTemplate';
import StarIcon from '@mui/icons-material/Star';
import './accordion.styles.scss';
import StarHalfIcon from '@mui/icons-material/StarHalf';

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

function reviewStars(num) {
  let stars = [];
  let value = Math.trunc(num);
  // console.log(num)
  // console.log({stars})
  for (let i = 0; i < value; i++) {
      stars.push(<StarIcon fontSize="small" />)
  }
  return (
    <span onClick={() => console.log({stars})}>
      {
        value < num ?
          stars.push(<StarHalfIcon fontSize='small' />)
        :
          null
      }
    {stars}
    </span>
  );
};

  return (
    <Accordion defaultActiveKey="0" flush style={{marginTop: '3%'}}>
      
      <Accordion.Item eventKey="0" className="accordionItem">
        <Accordion.Header>Description:</Accordion.Header>
        <Accordion.Body>{desc}</Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className="accordionItem">
        <Accordion.Header>Details:</Accordion.Header>
        <Accordion.Body>{details}</Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className="accordionItem">
        <Accordion.Header>Shipping:</Accordion.Header>
        <Accordion.Body>
          Free standard shipping and free 60-day returns for Members.<br/> <br/>
          Check out our Return Policy <span><Link to='/returnpolicy'>Here</Link></span>.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3" className="accordionItem">
        <Accordion.Header>Rating:</Accordion.Header>
        <Accordion.Body onClick={()=> console.log({reviews})} style={{padding: 0}}>
        <br/>
        <a href="/review" style={{display: 'flex', justifyContent: 'center'}}>Leave a Review</a>
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
                reviewStars={reviewStars}
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
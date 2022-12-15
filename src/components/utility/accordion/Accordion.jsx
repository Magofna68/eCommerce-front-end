import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import {Link} from 'react-router-dom';
import ReviewTemplate from '../reviewTemplate/ReviewTemplate';
import './accordion.styles.scss';


const AccordionComponent = (props) => {
  const { details, desc, reviews, reviewStars, onAvgRating } = props;
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
        <Accordion.Header 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between'
          }}>
            Rating:<span className='ratingContainer'>{reviewStars(onAvgRating)}</span>
        </Accordion.Header>
        <Accordion.Body onClick={()=> console.log({reviews})} style={{padding: 0}}>
        <br/>
        <a href="#/pageNotAvailable" style={{display: 'flex', justifyContent: 'center'}}>Leave a Review</a>
          {
            reviews.map(({id, ...otherReviewProps}) => (
              <ReviewTemplate 
                key={id} 
                {...otherReviewProps}
                reviewStars={reviewStars}
              />
            ))
          }
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionComponent;
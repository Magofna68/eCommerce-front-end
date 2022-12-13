import { WindowRounded } from '@mui/icons-material';
import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import {Link} from 'react-router-dom';

export default function AlwaysOpenExample(props) {
  const { details, desc } = props;
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
    </Accordion>
  );
};
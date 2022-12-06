import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import {Link} from 'react-router-dom';

export default function AlwaysOpenExample(props) {
  const { details, desc } = props;
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen flush>
      <Accordion.Item eventKey="0">
        {/* <h4 style={{ marginLeft: '6%'}}>Description:</h4> */}
        {/* <Accordion.Header>Description:</Accordion.Header> */}
        <Accordion.Body>
          {desc}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Details:</Accordion.Header>
        <Accordion.Body>
        {details}
        </Accordion.Body>
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
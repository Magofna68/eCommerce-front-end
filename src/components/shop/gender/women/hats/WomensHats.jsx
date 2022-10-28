import React from 'react'
import {womensHats} from '../../../../../data';
import { Card, Container } from 'react-bootstrap';

export default function WomensHats() {
  return (
    <Container fluid="true" className='womens-container'>
      <h3>Womens Hats</h3>
      <div className='womens-hat-container'>
        {womensHats.map((item) => (
          <Card class='img-responsive'>
            <Card.Img
              variant='top'
              src={item.img}
              alt={item.alt}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>{item.price}</Card.Subtitle>
              {/* <a href={d.link} rel="noreferrer" target="_blank"><Button vaiant="danger">View Project</Button></a>
                    <a href={d.link2} rel="noreferrer" target="_blank"><Button variant="success">View Code</Button></a> */}
            </Card.Body>
          </Card>
          )
        )}
    </div>
</Container>
  )
}

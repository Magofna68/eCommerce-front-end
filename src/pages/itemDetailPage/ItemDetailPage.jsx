import './itemDetailPage.styles.scss';
import React from 'react'
import {useLocation } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';


export default function ItemDetailPage(props) {
  const location = useLocation();
  let name = location.state.name
  // let id= location.state.id
  let img = location.state.img
  let img2 = location.state.img2
  let price = location.state.price
  let desc = location.state.desc
  
  return (
    <Container fluid>
      <Row>
        <Col><img src={img} alt="test" width="500px"></img></Col>
        <Col>{name}<br/>{desc}</Col>
      </Row>
      <Row>
        <Col>${price}</Col>
        <Col><img src={img2} alt="" width="80px"></img></Col>
      </Row>
      <Row>
        <Col>{name} <br/> <p>{desc}</p></Col>
        <button onClick={()=>console.log(desc)}></button>
      </Row>
    </Container>
    )
  }
  
  // <div>
  // <h2>ItemDetailPage</h2>
  // <h4>{name}</h4>
  // <h5>{name}</h5>
  // <button onClick={()=>console.log(name)}>Try Me</button>
  // </div>

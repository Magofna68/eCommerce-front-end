// import React, { Component } from 'react';
// import CarouselComponent from '../utility/carousel/Carousel';
// import './home.styles.scss';
// import { mensHats } from '../../data';
// import Banner from '../../assets/Banner.png';
// import Paint from '../../assets/Paint.png';

// import { Row, Container, Col } from 'react-bootstrap'


// class HomePage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.setState = {
//       background: 'black'
//     }
//   }

//   render() {
//     return (
//       <Container id="home">
//         <Row>
//         <div className='banner-container'>
//           <img
//             src={Banner}
//             alt="Banner"
//           />
//           <h3>Find Your Style</h3>
//         </div>
//         </Row>
//         <div id="title">
//           Redefine Your Look
//         </div>
//         <Row className="carousel-container">
//         <img
//           src={Paint}
//           alt="Paint"
//           id="paint-img"
//         />
//           <Col>
//           <CarouselComponent dataSet={mensHats}/>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }
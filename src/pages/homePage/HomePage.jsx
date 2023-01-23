import React, { Component } from 'react';
import './homePage.styles.scss';
// import { Container, Row, Col } from 'react-bootstrap';
import  { SHOP_DATA }  from '../../data.jsx';
import CollectionPreview from '../../components/shop/preview-collection/CollectionPreview.jsx';
import Carousel from '../../components/utility/carousel/Carousel.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default function HomePage() {
  const carouselImages = [
    {
      id: 0,
      title: "test",
      img: 'https://img.ltwebstatic.com/images3_pi/2022/04/26/16509410621ce21a0f1297302307bcfe4e7f4c7590_thumbnail_600x.webp',
      img2: 'https://img.ltwebstatic.com/images3_pi/2022/04/26/1650941068cd0cce154a16bc6787e4d712adf8453e_thumbnail_600x.webp',
      alt: "test",
      text: "test",
    },
    {
      id: 1,
      title: "Celestine Lambskin Leather Jacket with Fur Trim",
      img: 'https://assets.overland.com/is/image/overlandsheepskin/16107-pwb2-av22463?$style%2Dlg%2D2x$&id=GlIsL0&fmt=jpg&fit=constrain,1',
      img2: 'https://assets.overland.com/is/image/overlandsheepskin/16107-pwb2-av22365?$style%2Dlg%2D2x$',
      alt: "Womens lambskin leather jacket",
      text: "test",
    },
    {
      id: 2,
      title: 'Asian Persuasion',
      img: 'https://i.pinimg.com/736x/be/52/b0/be52b08a649518b42293921e2e45f85e.jpg',
      img2: 'https://i.pinimg.com/originals/dd/06/51/dd06512e03de63956c26366422d00ca0.jpg',
      alt: 'designer',
      text: '',
    }
  ]
  
 
  const categories = ['shirts', 'jackets', 'footwear', 'hats']
  
  return (
    <Container fluid>
      <div className="homePageGraphic">
        <h1 className="headerUnderground">UNDERGROUND</h1>
        <h1 className='headerRoyalty'>ROYALTY</h1>
        <br/>
        <h4 className="subtext">ROYALTY FOR A REASON.</h4><br/>
      </div>
      <div 
        style={{
          // marginTop: '10%',
          display: 'flex', 
          // position: 'absolute',
          flexDirection: 'row', 
          width: '90vw', 
          justifyContent: 'space-between',
          marginBottom: '3%'
      }}>
      {
        categories.map((category) => {
          return(
              <h3><strong>{category.toUpperCase()}</strong></h3>
            )
          })
        }
        </div>
      <div className='carouselContainer'>
        <Carousel  dataSet={carouselImages}/>
        {/* <h3>ROYALTY FOR A REASON</h3> */}
      </div>
    </Container>
  )
}


// export default HomePage;
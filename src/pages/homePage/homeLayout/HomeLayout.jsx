import React from 'react'
import { useEffect, useRef } from "react";
import './homeLayout.styles.scss';

import Carousel from '../../../components/utility/carousel/Carousel.jsx';
import Container from 'react-bootstrap/Container';
import transparentCrown from '../../../assets/transparentCrown.png';
import Row from 'react-bootstrap/Row';

import { Typography } from "@mui/material";

export default function HomeLayout(props) {
  const { categoryRedirect } = props;

  const carouselImages = 
    [
      {
        id: 0,
        title: "Elegant Night Out",
        img: 'https://img.ltwebstatic.com/images3_pi/2022/04/26/16509410621ce21a0f1297302307bcfe4e7f4c7590_thumbnail_600x.webp',
        img2: 'https://img.ltwebstatic.com/images3_pi/2022/04/26/1650941068cd0cce154a16bc6787e4d712adf8453e_thumbnail_600x.webp',
        alt: "black semi formal gown",
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
    
    const categories = ['shirts', 'sneakers','jackets', 'hats', 'sale']
    
    return (
      <Container fluid>
      <div className="underGroundRoyalty">
        <Typography
            variant='h2'
            sx={{
              fontWeight: 'bold',
              color: 'rgb(0,255,255,0%)',
              WebkitTextStroke: '0.75px white',
              backgroundImage: `url('https://media2.giphy.com/media/xUA7aKCtqnlAzuIg8M/giphy.gif?cid=ecf05e47hqupws5gkavymjrlpl5ks9utklt5jyos4s5q9irm&rid=giphy.gif&ct=g')`,
              // backgroundImage: `url('https://media1.giphy.com/media/5k00E7cigvvqnBYDdP/giphy.gif?cid=ecf05e47cde9hqvaqke38lehjfkc1r8hjs44rqvfdl6z49kb&rid=giphy.gif&ct=g')`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              transition: 'color 0.50s, -webkit-text-stroke 0.50s',
              '&: hover': {
                color: 'rgb(255,155,0,50%)',
                WebkitTextStroke: '0.5px gold',
                cursor: 'arrow',
              }
            }}
          >
            Underground
          </Typography>
          <Typography
            variant='h1'
            sx={{
              fontWeight: 'bolder',
              color: 'rgb(192,192,192,25%)',
              WebkitTextStroke: '0.75px white',
              // backgroundImage: `url('https://media1.giphy.com/media/5k00E7cigvvqnBYDdP/giphy.gif?cid=ecf05e47cde9hqvaqke38lehjfkc1r8hjs44rqvfdl6z49kb&rid=giphy.gif&ct=g')`,
              backgroundImage: `url('https://media2.giphy.com/media/xUA7aKCtqnlAzuIg8M/giphy.gif?cid=ecf05e47hqupws5gkavymjrlpl5ks9utklt5jyos4s5q9irm&rid=giphy.gif&ct=g')`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              transition: 'color 0.50s, -webkit-text-stroke 0.50s',
              '&: hover': {
                color: 'rgb(255,155,0,50%)',
                // color: 'rgb(192,192,192,50%)',
                WebkitTextStroke: '0.5px silver',
                cursor: 'arrow',
              }
            }}
          >
            ROYALTY
          </Typography>
          {/* <div className='bottomGraphic'> */}
            <h4 className="subtext">ROYALTY FOR A REASON.</h4><br/>

            <div className='crownIcon'>
              <img src={transparentCrown} width="75px" alt="crown icon"/>
            </div>
          {/* </div> */}
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
        <Row style={{width: '90%', margin: 'auto', marginTop: '-2%'}}>
          <ul className='titleContainer'>
            {
              categories.map((title, index) => (
                <li className="categoryTitle" onClick={() => categoryRedirect(title)} key={index}>{title.toUpperCase()}</li>
              ))
            }
          </ul>
        </Row>
        </div>
      <div className='carouselContainer'>
        <Carousel  dataSet={carouselImages}/>
        {/* <h3>ROYALTY FOR A REASON</h3> */}
      </div>
    </Container>
  )
}

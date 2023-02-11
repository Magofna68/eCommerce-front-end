import React from 'react'
import { useEffect, useRef } from "react";
import './homeLayout.styles.scss';

import Carousel from '../../../components/utility/carousel/Carousel.jsx';
import Container from 'react-bootstrap/Container';
import transparentCrown from '../../../assets/transparentCrown.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Typography } from "@mui/material";
import Directory from '../../shopPage/directory/Directory.jsx';

export default function HomeLayout(props) {
  const { categoryRedirect, priceFilterRedirect } = props;

  const carouselImages = 
    [
      {
        id: 0,
        title: "Elegant Night Out",
        img: 'https://img.ltwebstatic.com/images3_pi/2022/04/26/16509410621ce21a0f1297302307bcfe4e7f4c7590_thumbnail_600x.webp',
        img2: 'https://img.ltwebstatic.com/images3_pi/2022/04/26/1650941068cd0cce154a16bc6787e4d712adf8453e_thumbnail_600x.webp',
        alt: "black semi formal gown",
        text: "Shop Sales Now",
        quote: "UnderGround ROYALTY always has the best styles no matter what the occasion."
      },
      {
        id: 1,
        title: "Celestine Lambskin Leather Jacket with Fur Trim",
        img: 'https://assets.overland.com/is/image/overlandsheepskin/16107-pwb2-av22463?$style%2Dlg%2D2x$&id=GlIsL0&fmt=jpg&fit=constrain,1',
        img2: 'https://assets.overland.com/is/image/overlandsheepskin/16107-pwb2-av22365?$style%2Dlg%2D2x$',
        alt: "Womens lambskin leather jacket",
        text: "Shop Womens Now",
      },
      {
        id: 2,
        title: 'Designer Denim & Casual Wear',
        img: 'https://i.pinimg.com/736x/be/52/b0/be52b08a649518b42293921e2e45f85e.jpg',
        img2: 'https://i.pinimg.com/originals/dd/06/51/dd06512e03de63956c26366422d00ca0.jpg',
        alt: 'designer',
        text: 'Shop Mens Now',
      }
    ]
    
    const categories = ['shirts', 'sneakers','jackets', 'hats',]
    
    return (
      <Container fluid style={{ padding: 0, margin: 0, paddingTop: '5px'}}>
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
          className='typographyText'
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
            <h4 className="subtext">ROYALTY FOR A REASON.</h4><br/>
            <div className='crownIcon'>
              <img src={transparentCrown} width="75px" alt="crown icon"/>
            </div>
      </div>
      <div 
        style={{
          display: 'flex', 
          flexDirection: 'row', 
          width: '90vw', 
          justifyContent: 'space-between',
          marginBottom: '3%'
        }}>
{/* <Directory /> */}
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
          <div style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', display: 'flex', width: '100%',}}>


{/* Filter Function */}
          <div className="itemFilterContainer" onClick={()=> priceFilterRedirect(100)} style={{ background: 'black'}}>
            <div className="under100img" style={{ backgroundImage: `url('https://ak.picdn.net/shutterstock/videos/8335927/thumb/1.jpg?ip=x480')`}}/>
            <div className="content" >
             <span>UNDER</span><h1>$100</h1>
            </div>
          </div>

          <div onClick={() => priceFilterRedirect('sale')} className="itemFilterContainer" style={{ justifyContent: 'space-around', background: 'black', padding: '3px'}}>
          <div className="under100img" style={{ backgroundPosition: 'bottom 20% right 30%', zIndex: 1, marginRight: '2%', marginBottom: ''  , width: '75%', height: '100%', backgroundImage: `url('https://culturedvultures.com/wp-content/uploads/2016/10/lookbook-modmedia-3313-page-34521.jpg')`}}/>
          <div className="under100img" style={{ zIndex: 2, marginRight: '2%', paddingBottom: '5%', backgroundPosition: 'bottom 0% right 50%', width: '60%', height: '100%', backgroundImage: `url('https://flyingcdn-942385.b-cdn.net/wp-content/uploads/2021/02/Types-of-Mens-Hats-Banner.jpg')`}}/>
          <div className="under100img" style={{ zIndex: 0, marginTop: '', backgroundPositionY: '90%', width: '75%', height: '100%', backgroundImage: `url('https://image.geeko.ltd/webp/original/3b75cc97-8b77-49ab-b06d-1eae7a626234-02163-pc-sec')`}}/>
            <div className="content" style={{ zIndex: 3, border: '2px solid black', color: 'red'}}>
             <span>ON</span><h1>SALE</h1>
            </div>
          </div>

          <div className="itemFilterContainer" onClick={()=> priceFilterRedirect(150)} style={{ background: 'black'}}>
            <div className="under100img"  style={{ backgroundImage: `url('https://cdn.shopify.com/s/files/1/0182/8937/files/Blog1-FN-1_1024x1024.jpg?v=1507218406')`}}/>
            <div className="content" >
             <span>Luxury</span><h1>ITEMS</h1>
            </div>
          </div>
          </div>
        <br/><br/>
      <div className='carouselContainer'>
        <h1>Newest Arrivals</h1>
        <Carousel  dataSet={carouselImages}/>
      </div>
    </Container>
  )
}

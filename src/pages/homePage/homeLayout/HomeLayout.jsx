import React, { useState } from 'react'
import { useEffect, useRef } from "react";
import './homeLayout.styles.scss';
import {MENS_SHOP_LIST, } from '../../../data.jsx';
import Carousel from '../../../components/utility/carousel/Carousel.jsx';
import Container from 'react-bootstrap/Container';
import transparentCrown from '../../../assets/transparentCrown.png';

import { Typography } from "@mui/material";
import  Banner from '../../../components/utility/banner/Banner.jsx';
import SlideShow from '../../../components/utility/mobileSlider/MobileSlider';
import Randomizer from '../../../components/utility/randomizer/Randomizer';

export default function HomeLayout(props) {
  const { categoryRedirect, priceFilterRedirect, filteredList, toItemDetailsClick, handleGenderUpdate } = props;

  const initialBannerState = sessionStorage.getItem('banner-info') ? JSON.parse(sessionStorage.getItem('banner-info')) : 'false'
    
  const [ hide, setHide ] = useState(initialBannerState)
    
  const hideBanner = () => {
    sessionStorage.setItem('banner-info', JSON.stringify('true'));
    const hideBanner = JSON.parse(sessionStorage.getItem('banner-info'))
    setHide(hideBanner)
  }
    
  useEffect(()=> {
    console.log("bannerSessionStorage: ", JSON.parse(sessionStorage.getItem('banner-info')))
  }, [hide])

  function getRandom(array) {
    let i = array.length -1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      const test = array.splice(2, Infinity)
      console.log("Test", array)
    return array;
    }

  const mens_randomizer_array = MENS_SHOP_LIST;

  const carouselImages = 
    [
      {
        id: 0,
        title: "Dress to Impress",
        img: 'https://img.ltwebstatic.com/images3_pi/2022/04/26/16509410621ce21a0f1297302307bcfe4e7f4c7590_thumbnail_600x.webp',
        img2: 'https://img.ltwebstatic.com/images3_pi/2022/04/26/1650941068cd0cce154a16bc6787e4d712adf8453e_thumbnail_600x.webp',
        alt: "black semi formal gown",
        text: "Shop Now",
        quote: "Own the Night",
        href: 'https://magofna68.github.io/eCommerce-front-end/#/shop'
      },
      {
        id: 1,
        title: "Celestine Lambskin Leather Jacket with Fur Trim",
        img: 'https://assets.overland.com/is/image/overlandsheepskin/16107-pwb2-av22463?$style%2Dlg%2D2x$&id=GlIsL0&fmt=jpg&fit=constrain,1',
        img2: 'https://assets.overland.com/is/image/overlandsheepskin/16107-pwb2-av22365?$style%2Dlg%2D2x$',
        alt: "Womens lambskin leather jacket",
        quote: "Explore Your Look",
        text: "Shop Womens Now",
        gender: 'WOMENS',
        // href: 'http://localhost:3000/eCommerce-front-end#/shop/womens',
        href: 'https://magofna68.github.io/eCommerce-front-end/#/shop/womens'
      },
      {
        id: 2,
        title: 'Designer Denim & Casual Wear',
        img: 'https://i.pinimg.com/736x/be/52/b0/be52b08a649518b42293921e2e45f85e.jpg',
        img2: 'https://i.pinimg.com/originals/dd/06/51/dd06512e03de63956c26366422d00ca0.jpg',
        alt: 'designer',
        quote: "Find Your Style",
        text: 'Shop Mens Now',
        gender: 'MENS',
        // href: 'http://localhost:3000/eCommerce-front-end#/shop/mens',
        href: 'https://magofna68.github.io/eCommerce-front-end/#/shop/mens'
      }
    ]
    
    const mobileSlides = [
      {
        id: 0,
        title: 'sneakers',
        img: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&w=1000&q=80',
      },
      {
        id: 1,
        title: 'jackets',
        img: 'https://media.gq.com/photos/570d11e8c28126b633eff4e4/16:9/w_2560%2Cc_limit/jean-jackets-gq-0516-04.jpg',
      },
      {
        id: 2,
        title: 'hats',
        img: 'https://img5.goodfon.com/wallpaper/nbig/b/45/dmitry-levykin-photographer-model-face-closed-eyes-mouth-lip.jpg',
      },
      {
        id: 3,
        title: 'shirts',
        img: 'https://media.istockphoto.com/id/1392944438/photo/portrait-of-handsome-attractive-positive-curly-haired-indian-or-arabian-guy-wearing-white.jpg?b=1&s=170667a&w=0&k=20&c=AuDfv9PdKqXO3nKHFc-uBZ1bt0SXXceqFLo-OhJnI6o=',
      },
    ]

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    
    return (
      <>
        {
          hide === 'false' ? 
          <div className='bannerContainer'>
            <Banner hideBanner={hideBanner} />
          </div>
          :
          null
        }
        <Container fluid style={{ padding: 0, margin: 0, paddingTop: '5px'}}>
          <div className="underGroundRoyalty">
            <Typography
              variant='h2'
              className='typographyText'
              sx={{
                fontWeight: 'bold',
                color: 'rgb(0,255,255,0%)',
                WebkitTextStroke: '0.75px white',
                backgroundImage: `url('https://media2.giphy.com/media/xUA7aKCtqnlAzuIg8M/giphy.gif?cid=ecf05e47hqupws5gkavymjrlpl5ks9utklt5jyos4s5q9irm&rid=giphy.gif&ct=g')`,
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
                backgroundImage: `url('https://media2.giphy.com/media/xUA7aKCtqnlAzuIg8M/giphy.gif?cid=ecf05e47hqupws5gkavymjrlpl5ks9utklt5jyos4s5q9irm&rid=giphy.gif&ct=g')`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                transition: 'color 0.50s, -webkit-text-stroke 0.50s',
                '&: hover': {
                  color: 'rgb(255,155,0,50%)',
                  WebkitTextStroke: '0.5px silver',
                  cursor: 'arrow',
                }
              }}
            >
              ROYALTY
            </Typography>
            <h4 className="subtext">ROYALTY FOR A REASON.</h4>
            <div className='crownIcon'>
              <img src={transparentCrown} width="100%" height="100%" alt="crown icon"/>
            </div>
          </div>

          <SlideShow categoryRedirect={categoryRedirect} slides={mobileSlides} toItemDetailsClick={toItemDetailsClick} />

          {/* <div className="trendingContainer">
            <div >
              <h1>TRENDING</h1>
            </div>
            <div className="randomizerContain">
              <Randomizer getRandom={getRandom} array={mens_randomizer_array} />
            </div>
          </div> */}

          {/* Filter Function rendered based on Screen size*/}
            <div className='priceFilterContainer'>
              {
                window.innerWidth > 420 ?
                <>
                  <div className="itemFilterContainer" onClick={()=> priceFilterRedirect(100)} style={{ background: 'black'}}>
                    <div className="filterCategoryItem" style={{ backgroundImage: `url('https://ak.picdn.net/shutterstock/videos/8335927/thumb/1.jpg?ip=x480')`}}/>
                    <div className="content" >
                      <span>UNDER</span><h1>$100</h1>
                    </div>
                  </div>

                  <div onClick={() => priceFilterRedirect('sale')} className="itemFilterContainer" style={{ justifyContent: 'space-around', background: 'black', padding: '3px'}}>
                    <div className="filterCategoryItem" style={{ backgroundPosition: 'bottom 20% right 30%', zIndex: 1, marginRight: '2%', marginBottom: ''  , width: '75%', height: '100%', backgroundImage: `url('https://culturedvultures.com/wp-content/uploads/2016/10/lookbook-modmedia-3313-page-34521.jpg')`}}/>
                    <div className="filterCategoryItem" style={{ zIndex: 2, marginRight: '2%', paddingBottom: '5%', backgroundPosition: 'bottom 0% right 50%', width: '60%', height: '100%', backgroundImage: `url('https://flyingcdn-942385.b-cdn.net/wp-content/uploads/2021/02/Types-of-Mens-Hats-Banner.jpg')`}}/>
                    <div className="filterCategoryItem" style={{ zIndex: 0, marginTop: '', backgroundPositionY: '90%', width: '75%', height: '100%', backgroundImage: `url('https://image.geeko.ltd/webp/original/3b75cc97-8b77-49ab-b06d-1eae7a626234-02163-pc-sec')`}}/>
                    <div className="content" style={{ zIndex: 3, border: '2px solid black', color: 'red'}}>
                      <span>ON</span><h1>SALE</h1>
                    </div>
                  </div>
                </>
              :
                <>
                  <div className="itemFilterContainer" onClick={()=> priceFilterRedirect(100)} style={{ background: 'black'}}>
                    <div className="filterCategoryItem" style={{ backgroundImage: `url('https://flyingcdn-942385.b-cdn.net/wp-content/uploads/2021/02/Types-of-Mens-Hats-Banner.jpg')`}}/>
                    <div className="content" >
                      <span>UNDER</span><h1>$100</h1>
                    </div>
                  </div>

                  <div className="itemFilterContainer" onClick={()=> priceFilterRedirect('sale')} style={{ background: 'black'}}>
                  <div className="filterCategoryItem"  style={{ backgroundImage: `url('https://image.geeko.ltd/webp/original/3b75cc97-8b77-49ab-b06d-1eae7a626234-02163-pc-sec')`}}/>
                    <div className="content" >
                      <span>ON</span><h1>SALE</h1>
                    </div>
                  </div>
                </>
              }

              <div className="itemFilterContainer" onClick={()=> priceFilterRedirect(150)} style={{ background: 'black'}}>
                <div className="filterCategoryItem"  style={{ backgroundImage: `url('https://cdn.shopify.com/s/files/1/0182/8937/files/Blog1-FN-1_1024x1024.jpg?v=1507218406')`}}/>
                <div className="content" >
                  <span>Luxury</span><h1>ITEMS</h1>
                </div>
              </div>
            </div>
            <br/>

            {/* <div className="trendingContainer">
              <div className="randomizerContain">
                <Randomizer getRandom={getRandom} array={mens_randomizer_array} />
              </div>
            </div> */}

            {/* Carousel */}
            <br/>
            <h1>Newest Arrivals</h1>
            <div className='carouselContainer'>
              <Carousel onGenderUpdate={handleGenderUpdate} dataSet={carouselImages}/>
            </div>
        </Container>
    </>
  )
}

import React, { Component, useState } from 'react';
// import './homePage.styles.scss';
// import { Container, Row, Col } from 'react-bootstrap';
import  { MENS_SHOP_LIST, SHOP_DATA, WOMENS_SHOP_LIST }  from '../../data.jsx';
import Carousel from '../../components/utility/carousel/Carousel.jsx';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import HomeLayout from './homeLayout/HomeLayout';
import ItemDetail from '../itemDetailPage/ItemDetail.jsx';
import Jackets from '../../components/shop/category/jackets/Jackets.jsx';
import Shirts from '../../components/shop/category/shirts/Shirts.jsx';
import Sneakers from '../../components/shop/category/sneakers/Sneakers.jsx';
import Hats from '../../components/shop/category/hats/Hats.jsx';
import Sale from '../../components/shop/category/sale/Sale.jsx';
import ItemList from '../../components/shop/gender/itemList/ItemList.jsx';
import Breadcrumb from '../../components/utility/breadcrumb/Breadcrumb.jsx';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function HomePage(props) {
  const { 
    selectedCategory, handleClearStateClick,
    shopData, selectedItem, categoryRedirect, 
    handleChangingSelectedItem, handleFilterClick,
    handleSortClick, handleHomeClick, handleBackClick,
    priceFilterData, priceFilterTitle, priceFilterRedirect
  } = props;
          
  let currentlyVisibleState = null;
  let buttonText = null;
          
    if (selectedItem !== null) {
      buttonText = "Back to List"
      currentlyVisibleState = 
        <ItemDetail itemToShow={selectedItem} handleClearStateClick={handleClearStateClick}/>
    } else if (selectedCategory === "SNEAKERS") {
      buttonText = "Home"
      currentlyVisibleState = 
        <Sneakers handleHomeClick={handleHomeClick} onItemSelection={handleChangingSelectedItem} />
    } else if (selectedCategory === "SHIRTS") {
      buttonText = "Home"
      currentlyVisibleState = 
        <Shirts handleHomeClick={handleHomeClick} onItemSelection={handleChangingSelectedItem} />
    } else if (selectedCategory === "JACKETS") {
      buttonText= "Home"
      currentlyVisibleState = 
        <Jackets handleHomeClick={handleHomeClick} onItemSelection={handleChangingSelectedItem}/>
    } else if (selectedCategory === "HATS") {
      buttonText="Home"
      currentlyVisibleState = 
        <Hats handleHomeClick={handleHomeClick} onItemSelection={handleChangingSelectedItem}/>
    } else if (selectedCategory === "SALE") {
      buttonText="Home"
      currentlyVisibleState = 
        <Sale handleHomeClick={handleHomeClick} onItemSelection={handleChangingSelectedItem}/>
    } else if (selectedCategory === 'FILTER') {
      buttonText="Home"
      currentlyVisibleState =
        <ItemList 
          onFilterClick={handleFilterClick}
          onSortClick={handleSortClick}
          categoryRedirect={categoryRedirect}
          fullItemList={shopData} 
          onItemSelection={handleChangingSelectedItem}
          priceFilterData={priceFilterData}
          priceFilterTitle={priceFilterTitle} 
        />
    } else {
      currentlyVisibleState = 
      <HomeLayout priceFilterRedirect={priceFilterRedirect} categoryRedirect={categoryRedirect}/>
    }

    return (
      <>
      {
        selectedCategory ?
        <>
          <div style={{ display: 'flex', justifyContent:'left', alignItems: 'left'}}>
            {/* <Breadcrumb /> */}
          </div>
          <Container fluid style={{ margin: 0, padding: 0, display: 'flex', alignItems: 'left'}}>
            {currentlyVisibleState}
          </Container>
          <Button style={{display: 'flex', justifyContent: 'left', marginLeft: '5%', marginTop: '-5%'}} onClick={handleHomeClick}>{buttonText}< ArrowBackIcon /></Button>
        </>
        :
        <>
          <Container fluid style={{ margin: 0, padding: 0}}>
            {currentlyVisibleState}
          </Container>
        </>
      }
      </>
    )
  }
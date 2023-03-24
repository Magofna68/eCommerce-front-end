import React, { Component, useState } from 'react';
// import './homePage.styles.scss';
// import { Container, Row, Col } from 'react-bootstrap';
import  { MENS_SHOP_LIST, WOMENS_SHOP_LIST }  from '../../data.jsx';
// import Carousel from '../../components/utility/carousel/Carousel.jsx';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import HomeLayout from './homeLayout/HomeLayout';
// import ItemDetails from '../itemDetailPage/itemDetails/ItemDetails.jsx';
import Jackets from '../../components/shop/category/jackets/Jackets.jsx';
import Shirts from '../../components/shop/category/shirts/Shirts.jsx';
import Sneakers from '../../components/shop/category/sneakers/Sneakers.jsx';
import Hats from '../../components/shop/category/hats/Hats.jsx';
import Sale from '../../components/shop/category/sale/Sale.jsx';
import FilteredItemList from './filteredItemList/FilteredItemList.jsx';
// import Breadcrumb from '../../components/utility/breadcrumb/Breadcrumb.jsx';
import { useNavigate } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function HomePage(props) {
  const { 
    selectedCategory, handleClearStateClick,
    shopData, selectedItem, categoryRedirect, 
    handleChangingSelectedItem, handleFilterClick,
    handleSortClick, handleHomeClick, handleGenderUpdate,
    priceFilterData, priceFilterTitle, priceFilterRedirect
  } = props;

  const navigate = useNavigate();
  
  const toItemDetailsClick = (e) => {
    // Save the ID into variable
    const savedId = e.id;
    const list = [ ...MENS_SHOP_LIST, ...WOMENS_SHOP_LIST ]
    // filter through array of obj utilizing ID to find selected item
    const savedItem = list.filter(item => item.id === savedId)[0]
    // create path for single object view
    let path3 = 'shop/' + savedItem.title + '/' + savedId;
    navigate(path3, {
      state:  {
        id: savedId, 
        title: savedItem.title,
        name: savedItem.name, 
        price: savedItem.price, 
        img: savedItem.img,
        img2: savedItem.img2,
        img3: savedItem.img3,
        img4: savedItem.img4,
        desc: savedItem.desc,
        detail: savedItem.detail,
        reviews: savedItem.reviews,
      },
      handleClearStateClick,
    })
  }
          
  let currentlyVisibleState = null;
  let buttonText = null;
          
    if (selectedCategory === "SNEAKERS") {
      buttonText = "Home"
      currentlyVisibleState = 
        <Sneakers toItemDetailsClick={toItemDetailsClick} handleHomeClick={handleHomeClick} onItemSelection={handleChangingSelectedItem} />
    } else if (selectedCategory === "SHIRTS") {
      buttonText = "Home"
      currentlyVisibleState = 
        <Shirts toItemDetailsClick={toItemDetailsClick} handleHomeClick={handleHomeClick} onItemSelection={handleChangingSelectedItem} />
    } else if (selectedCategory === "JACKETS") {
      buttonText= "Home"
      currentlyVisibleState = 
        <Jackets toItemDetailsClick={toItemDetailsClick} handleHomeClick={handleHomeClick} onItemSelection={handleChangingSelectedItem}/>
    } else if (selectedCategory === "HATS") {
      buttonText="Home"
      currentlyVisibleState = 
        <Hats toItemDetailsClick={toItemDetailsClick} handleHomeClick={handleHomeClick} onItemSelection={handleChangingSelectedItem}/>
    } else if (selectedCategory === "SALE") {
      buttonText="Home"
      currentlyVisibleState = 
        <Sale  selectedCategory={selectedCategory} toItemDetailsClick={toItemDetailsClick} handleHomeClick={handleHomeClick} onItemSelection={handleChangingSelectedItem}/>
    } else if (selectedCategory === 'FILTER') {
      buttonText="Home"
      currentlyVisibleState =
        <FilteredItemList 
          handleClearStateClick={handleClearStateClick}
          toItemDetailsClick={toItemDetailsClick}
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
      <HomeLayout handleGenderUpdate={handleGenderUpdate} toItemDetailsClick={toItemDetailsClick} priceFilterRedirect={priceFilterRedirect} categoryRedirect={categoryRedirect}/>
    }

    return (
      <>
      {
        selectedCategory ?
        <>
          <div style={{ display: 'flex', justifyContent:'left', alignItems: 'left'}}>
          </div>
          <Container fluid style={{ margin: 0, padding: 0, display: 'flex', alignItems: 'left'}}>
            {currentlyVisibleState}
          </Container>
          <Button style={{display: 'flex', justifyContent: 'left', marginLeft: '5%', marginTop: ''}} onClick={handleHomeClick}>{buttonText}< ArrowBackIcon /></Button>
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
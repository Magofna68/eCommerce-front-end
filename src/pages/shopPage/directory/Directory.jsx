import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MENS_SHOP_LIST, WOMENS_SHOP_LIST } from '../../../data.jsx';

import Hats from '../../../components/shop/category/hats/Hats.jsx';
import Jackets from '../../../components/shop/category/jackets/Jackets.jsx';
import Sneakers from '../../../components/shop/category/sneakers/Sneakers.jsx';
import CategoryControl from '../categoryControl/CategoryControl.jsx';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './directory.styles.scss';
  
  export default function Directory(props) {
    const { selectedCategory, sections, categoryRedirect, handleGenderUpdate } = props;

    const navigate = useNavigate();

    const toItemDetailsClick = (e) => {
    // Save the ID into variable and filter through array of obj to find selected item
    const savedId = e.id;
    const list = [ ...MENS_SHOP_LIST, ...WOMENS_SHOP_LIST ]
    const savedItem = list.filter(item => item.id === savedId)[0]
    let path = selectedCategory.toLowerCase() + '/' + savedId;
    navigate(path, {
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
        reviews: savedItem.reviews
      }
    })
  }

  const handleClothingControllerClick = (gender) => {
    handleGenderUpdate(gender)
    let path = gender.toLowerCase();
    switch(gender) {
      case 'MENS':
        navigate(path, {
          state: {
            fullItemList: MENS_SHOP_LIST,
          }
        })
      break;
      case 'WOMENS':
        navigate(path, {
          state: {
            fullItemList: WOMENS_SHOP_LIST,
          }
        })
      break;
      default:
        return;
    }
  }

    let currentlyVisibleState = null;
    let buttonText = null;
    let buttonDisplayed = null;

    switch(selectedCategory) {
      case 'HATS':
        buttonText = "Return to Categories"
        buttonDisplayed = true;
        currentlyVisibleState = 
        <Hats
          categoryRedirect={categoryRedirect}
          toItemDetailsClick={toItemDetailsClick}
        />
      break;
      case 'JACKETS':
        currentlyVisibleState = 
        <Jackets 
        categoryRedirect={categoryRedirect}
        toItemDetailsClick={toItemDetailsClick} 
        />
        buttonText = "Return to Categories"
        buttonDisplayed = true;
      break;
      case 'SNEAKERS':
        buttonText = "Return to Categories"
        buttonDisplayed = true;
        currentlyVisibleState = 
        <Sneakers 
          categoryRedirect={categoryRedirect}
          toItemDetailsClick={toItemDetailsClick}
        />
      break;
      case 'MENS':
        handleClothingControllerClick('MENS')
      break;
      case 'WOMENS':
        handleClothingControllerClick('WOMENS')
      break;
      default:
        currentlyVisibleState = 
        <CategoryControl 
          toItemDetailsClick={toItemDetailsClick}
          currentView={selectedCategory}
          sections={sections} 
          categoryRedirect={categoryRedirect}
        />
    }

    return (
      <Container style={{ padding: 0}}>
        {currentlyVisibleState}
        <hr />
        {
          buttonDisplayed === null ?
          null
          :
          <Button onClick={() => navigate('https://magofna68.github.io/eCommerce-front-end/#/shop')}>{buttonText}</Button>
        }
      </Container>
    );
  }




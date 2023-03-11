import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { MENS_SHOP_LIST, WOMENS_SHOP_LIST } from '../../../data.jsx';

import Hats from '../../../components/shop/category/hats/Hats.jsx';
import Jackets from '../../../components/shop/category/jackets/Jackets.jsx';
import Sneakers from '../../../components/shop/category/sneakers/Sneakers.jsx';
import ItemDetail from '../../itemDetailPage/ItemDetail.jsx';
import CategoryControl from '../categoryControl/CategoryControl.jsx';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './directory.styles.scss';

// export default class Directory extends React.Component {
//   constructor(props) {
//     super (props);
//     this.state = {
  
  export default function Directory(props) {
    const { selectedCategory, sections, categoryRedirect, gender, handleGenderUpdate } = props;
      // sections: [
      //   {
      //     title: 'hats',
      //     imageUrl: 'https://www.themanual.com/wp-content/uploads/sites/9/2020/08/best-hats-2020.jpg?fit=800%2C800&p=1',
      //     id: 1,
      //     linkUrl: 'hats'
      //   },
      //   {
      //     title: 'jackets',
      //     imageUrl: 'https://cdn.shopify.com/s/files/1/0419/1525/files/2800x1080-Moto-Black-020122-1_800x533_crop_right.jpg?v=1643761804',
      //     id: 2,
      //     linkUrl: 'jackets'
      //   },
      //   {
      //     title: 'sneakers',
      //     imageUrl: 'https://i.insider.com/59c166d92488491d980855ee?width=1000&format=jpeg&auto=webp',
      //     id: 3,
      //     linkUrl: 'sneakers'
      //   },
      //   {
      //     title: 'mens',
      //     imageUrl: 'https://dvyvvujm9h0uq.cloudfront.net/com/articles/1597738279-195176-patricia-palma-oaab-eywmuu-unsplashjpg.jpg',
      //     size: 'large',
      //     id: 4,
      //     linkUrl: 'mens'
      //   },
      //   {
      //     title: 'womens',
      //     imageUrl: 'https://static.showit.co/800/pe-Kr33gRQu0n6Aa3jt0FA/25111/a_wachesaw_plantation_high_school_senior_session_by_pasha_belman_photography-26.jpg',
      //     size: 'large',
      //     id: 5,
      //     linkUrl: 'womens'
      //   },
        // {
        //   title: 'kids',
        //   imageUrl: '',
        //   size: 'large',
        //   id: 6,
        //   linkUrl: 'kids'
        // },
                // {
        //   title: 'sale',
        //   imageUrl: '',
        //   size: 'large',
        //   id: 6,
        //   linkUrl: 'sale'
        // }
  //     ]
  //   }

  // }
  
  // handleClearStateClick = (e) => {
  //   this.setState({
  //     currentView: null,
  //     // selectedItem: null,
  //   });
  // }

  // handleClearItemStateClick = (e) => {
  //   console.log("HandleClear")
  //   this.setState({
  //     selectedItem: null,
  //   })
  // }

  // handleChangingSelectedItem = (id) => {
  //   console.log(id)
  //   const selectedItem = id;
  //   console.log(selectedItem)
  //   this.setState({
  //     selectedItem: selectedItem
  //   })
  // }

  //   categoryRedirect = async (clickedTitle) => {
  //   const categoryToAssign = clickedTitle
  //   await this.setState({
  //     currentView: categoryToAssign
  //   })
  // }
  const navigate = useNavigate();

  const toItemDetailsClick = (e) => {
    // Save the ID into variable and filter through array of obj to find selected item
    const savedId = e.id;
    const list = [ ...MENS_SHOP_LIST, ...WOMENS_SHOP_LIST ]
    const savedItem = list.filter(item => item.id === savedId)[0]
    let path = selectedCategory.toLowerCase() + '/' + savedId;
    console.log("Directory# -- Path: ", path)
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
    console.log("DIRECTORY# -- path: ", path)
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
        // window.location.assign('#/shop/jackets')
      break;
      case 'SNEAKERS':
        buttonText = "Return to Categories"
        buttonDisplayed = true;
        currentlyVisibleState = 
        <Sneakers 
          categoryRedirect={categoryRedirect}
          toItemDetailsClick={toItemDetailsClick}
        />
        // window.location.assign('#/shop/sneakers')
      break;
      case 'MENS':
        handleClothingControllerClick('MENS')
        // window.location.assign('#/shop/mens')
      break;
      case 'WOMENS':
        handleClothingControllerClick('WOMENS')
        // window.location.assign('#/shop/womens')
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
  // }

    return (
      <Container style={{ padding: 0}}>
        {currentlyVisibleState}
        <hr />
        {
          buttonDisplayed === null ?
          null
          // :
          // buttonText === "Back to Items" ?
          // <Button >{buttonText}</Button>
          :
          <Button onClick={() => navigate('#/shop')}>{buttonText}</Button>
        }
      </Container>
    );
  }
// }



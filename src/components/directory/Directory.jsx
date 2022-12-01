import React, { Component } from 'react'
import Hats from '../shop/category/hats/Hats';
import Jackets from '../shop/category/jackets/Jackets';
import Sneakers from '../shop/category/sneakers/Sneakers';
import ItemDetail from '../../pages/itemDetailPage/ItemDetail';
import CategoryControl from '../shop/category/categoryControl/CategoryControl';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './directory.styles.scss';

export default class Directory extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      currentView: null,
      selectedItem: null,
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://www.themanual.com/wp-content/uploads/sites/9/2020/08/best-hats-2020.jpg?fit=800%2C800&p=1',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0419/1525/files/2800x1080-Moto-Black-020122-1_800x533_crop_right.jpg?v=1643761804',
          id: 2,
          linkUrl: 'jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.insider.com/59c166d92488491d980855ee?width=1000&format=jpeg&auto=webp',
          id: 3,
          linkUrl: 'sneakers'
        },
        {
          title: 'mens',
          imageUrl: 'https://dvyvvujm9h0uq.cloudfront.net/com/articles/1597738279-195176-patricia-palma-oaab-eywmuu-unsplashjpg.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'mens'
        },
        {
          title: 'womens',
          imageUrl: 'https://static.showit.co/800/pe-Kr33gRQu0n6Aa3jt0FA/25111/a_wachesaw_plantation_high_school_senior_session_by_pasha_belman_photography-26.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'womens'
        },
      ]
    }

  }
  
  handleClearStateClick = (e) => {
    this.setState({
      currentView: null,
      // selectedItem: null,
    });
  }

  handleClearItemStateClick = (e) => {
    this.setState({
      selectedItem: null,
    })
  }

  handleChangingSelectedItem = (id) => {
    console.log(id)
    const selectedItem = id;
    console.log(selectedItem)
    this.setState({
      selectedItem: selectedItem
    })
  }

    categoryRedirect = async (clickedTitle) => {
    const categoryToAssign = clickedTitle
    await this.setState({
      currentView: categoryToAssign
    })
    console.log(this.state.currentView)
  }
  
  render() {
    const { currentView, selectedItem } = this.state;
    let currentlyVisibleState = null;
    let buttonText = null;
    let buttonDisplayed = null;
    // let test = window.location.assign(<MensClothing />)

    if (selectedItem != null) {
      currentlyVisibleState = <ItemDetail itemToShow={selectedItem} />
      buttonText = "Back to Items"
      buttonDisplayed = true;
    } else {

    switch(currentView) {
      case 'hats':
        currentlyVisibleState = <Hats onItemSelection={this.handleChangingSelectedItem} />
        buttonText = "Return to Categories"
        buttonDisplayed = true;
      
      break;
      case 'jackets':
        currentlyVisibleState = <Jackets onItemSelection={this.handleChangingSelectedItem} />
        buttonText = "Return to Categories"
        buttonDisplayed = true;
      break;
      case 'sneakers':
        currentlyVisibleState = <Sneakers onItemSelection={this.handleChangingSelectedItem} />
        buttonText = "Return to Categories"
        buttonDisplayed = true;
      break;
      case 'mens':
        window.location.assign('#/shop/mens')
      break;
      case 'womens':
        window.location.assign('#/shop/womens')
      break;
      default:
        currentlyVisibleState = 
        <CategoryControl 
          currentView={this.state.currentView}
          sections={this.state.sections} 
          categoryRedirect={this.categoryRedirect}
        />
    }
  }

    return (
      <Container style={{ padding: 0}}>
        {currentlyVisibleState}
        <hr />
        {
          buttonDisplayed === null ?
          null
          :
          buttonText === "Back to Items" ?
          <Button onClick={this.handleClearItemStateClick}>{buttonText}</Button>
          :
          <Button onClick={this.handleClearStateClick}>{buttonText}</Button>
        }
      </Container>
    );
  }
}



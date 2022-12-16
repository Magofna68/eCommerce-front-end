import React, { Component } from 'react';
import { MENS_SHOP_LIST } from '../../../../data';
import King from '../../../../assets/King.png';
import './mensClothing.styles.scss';
import ItemList from '../itemList/ItemList';
import Button from 'react-bootstrap/Button';
import ItemDetail from '../../../../pages/itemDetailPage/ItemDetail';
import Breadcrumbs from '../../../utility/breadcrumb/Breadcrumb';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Sneakers from '../../category/sneakers/Sneakers';

class MensClothing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      itemList:  MENS_SHOP_LIST ,
      selectedCategory: "",
    }
  }
  

  handleClick = (e) => {
    if (this.state.selectedItem != null) {
      this.setState({selectedItem: null})
    }
  }

  handleHomeClick = () => {
    window.location.assign('#/')
  }

  handleChangingSelectedItem = (id) => {
    console.log(id)
    const selectedItem = id;
    console.log(selectedItem)
    this.setState({
      selectedItem: selectedItem
    })

    console.log(this.state.itemList)
  }

  handleClearItemStateClick = (e) => {
    console.log("HandleClear")
    this.setState({
      selectedItem: null,
    })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedItem != null) {
      currentlyVisibleState = 
      <ItemDetail 
        itemToShow={this.state.selectedItem}
        onClearItemStateClick={this.handleClearItemStateClick} 
      />
      buttonText = "Back to Items"
    } else if (this.state.selectedCategory === "sneakers") {
      <Sneakers 
        itemToShow={this.state.selectedItem}
        onClearItemStateClick={this.handleClearItemStateClick}
      />
    } else { 
      currentlyVisibleState = 
      <ItemList 
        itemCollection={this.state.itemList} 
        onItemSelection={this.handleChangingSelectedItem} 
      />
      buttonText = "Home"
    }

    // switch(currentView) {
    //   case 'hats':
    //     currentlyVisibleState = <Hats onItemSelection={this.handleChangingSelectedItem} />
    //     buttonText = "Return to Categories"
    //     buttonDisplayed = true;
      
    //   break;
    //   case 'jackets':
    //     currentlyVisibleState = <Jackets onItemSelection={this.handleChangingSelectedItem} />
    //     buttonText = "Return to Categories"
    //     buttonDisplayed = true;
    //   break;
    //   case 'sneakers':
    //     currentlyVisibleState = <Sneakers onItemSelection={this.handleChangingSelectedItem} />
    //     buttonText = "Return to Categories"
    //     buttonDisplayed = true;
    //   break;
    // }


    return (
      <div>
        {
          buttonText === "Home" ?
            <div className="backdropContain">
              <div className='backdropMobile'>
                <h1>Men's</h1><h1>Clothing</h1>
              </div>
                <img src={King} alt="KINGs" width="150px" style={{zIndex: -1}}/>
            </div>
        :
          null
        }
        {currentlyVisibleState}
        <hr/>
        {
          buttonText === "Home" ? 
          <Button onClick={this.handleHomeClick}>{buttonText}</Button>
          :
          <Button onClick={this.handleClick}>{buttonText}</Button>
        }
      </div>
    );
  }
}

export default MensClothing;
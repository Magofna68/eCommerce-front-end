import React, { Component } from 'react';
import { MENS_SHOP_LIST, WOMENS_SHOP_LIST } from '../../../../data.jsx';
import King from '../../../../assets/King.png';
import './mensClothing.styles.scss';
import ItemList from '../itemList/ItemList.jsx';
import Button from 'react-bootstrap/Button';
import ItemDetail from '../../../../pages/itemDetailPage/ItemDetail.jsx';
// import Breadcrumbs from '../../../utility/breadcrumb/Breadcrumb.jsx';
// import Link from '@mui/material/Link';
// import HomeIcon from '@mui/icons-material/Home';
import Sneakers from '../../category/sneakers/Sneakers.jsx';
import Hats from '../../category/hats/Hats.jsx';
import Jackets from '../../category/jackets/Jackets.jsx';
import Shirts from '../../category/shirts/Shirts.jsx';
import Sale from '../../category/sale/Sale.jsx'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


class MensClothing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      mensItemList:  MENS_SHOP_LIST ,
      womensItemList: WOMENS_SHOP_LIST,
      selectedCategory: "",
      mensFilteredList: [],
      womensFilteredList: [],
    }
  }

  categoryRedirect = async (clickedCategoryTitle) => {
    const categoryToAssign = clickedCategoryTitle
    const mensTempFilteredList = this.state.mensItemList.filter(item => item.title.includes(clickedCategoryTitle.toLowerCase()))
    await this.setState({
      selectedCategory: categoryToAssign,
    })
    await this.setState({ mensFilteredList: mensTempFilteredList})
    console.log("after state update", this.state.mensFilteredList)
  }

  handleClick = (e) => {
    if (this.state.selectedItem != null) {
      this.setState({selectedItem: null})
    } else if (this.state.selectedCategory != null) {
      this.setState({selectedCategory: ""})
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

    console.log(this.state.mensItemList)
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
    const { selectedCategory } = this.state;

    if (this.state.selectedItem != null) {
      currentlyVisibleState = 
      <ItemDetail 
        itemToShow={this.state.selectedItem}
        onClearItemStateClick={this.handleClearItemStateClick} 
      />
      buttonText = selectedCategory
    } else if (this.state.selectedCategory === "SNEAKERS") {
        currentlyVisibleState = 
        <Sneakers 
          onItemSelection={this.handleChangingSelectedItem} 
          filteredSneakers={this.state.mensFilteredList}
          itemToShow={this.state.selectedItem}
          onClearItemStateClick={this.handleClearItemStateClick}
        />
    }  else if (this.state.selectedCategory === "SHIRTS") {
      currentlyVisibleState = 
      <Shirts
        onItemSelection={this.handleChangingSelectedItem} 
        filteredShirts={this.state.mensFilteredList}
        itemToShow={this.state.selectedItem}
        onClearItemStateClick={this.handleClearItemStateClick}
      />
  } else if (this.state.selectedCategory === "HATS") {
        currentlyVisibleState =  
        <Hats 
          onItemSelection={this.handleChangingSelectedItem} 
          filteredHats={this.state.mensFilteredList}
          itemToShow={this.state.selectedItem}
          onClearItemStateClick={this.handleClearItemStateClick}
        />
    } else if (this.state.selectedCategory === "JACKETS") {
        currentlyVisibleState = 
        <Jackets 
          onItemSelection={this.handleChangingSelectedItem} 
          filteredJackets={this.state.mensFilteredList}
          itemToShow={this.state.selectedItem}
          onClearItemStateClick={this.handleClearItemStateClick}
        />
    } else if (this.state.selectedCategory === "SALE") {
      currentlyVisibleState = 
      <Sale 
        onItemSelection={this.handleChangingSelectedItem} 
        filteredSale={this.state.mensFilteredList}
        itemToShow={this.state.selectedItem}
        onClearItemStateClick={this.handleClearItemStateClick}
      />
    } else { 
      currentlyVisibleState = 
      <ItemList 
        categoryRedirect={this.categoryRedirect}
        FullItemList={this.state.mensItemList} 
        onItemSelection={this.handleChangingSelectedItem} 
      />
      buttonText = "Home"
    }


    return (
      <div>
        {
          buttonText === "Home" ?
            <div className="backdropContain">
              <div className='backdropText'>
                <h1>Men's</h1><h1>Clothing</h1>
              </div>
              <span className="crownIconContainer">
                <img src={King} alt="KINGs" width="100%" style={{zIndex: -1}}/>
              </span>
            </div>
        :
          null
        }
        {currentlyVisibleState}
        <div style={{ display: 'flex', margin: '3% 0 0% 5%'}}>
        {
          buttonText === "Home" ? 
          <Button onClick={this.handleHomeClick}>{buttonText}</Button>
          :
          <Button onClick={this.handleClick}><strong>{buttonText}</strong>< ArrowBackIcon /></Button>
        }
        </div>
      </div>
    );
  }
}

export default MensClothing;
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
    // console.log("after state update", this.state.mensFilteredList)
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
    const selectedItem = id;
    // console.log(selectedItem)
    this.setState({
      selectedItem: selectedItem
    })

    // console.log(this.state.mensItemList)
  }

  handleClearItemStateClick = (e) => {
    console.log("HandleClear")
    this.setState({
      selectedItem: null,
    })
  }
  
  compareNumbers(a, b) {
    return a - b;
  }
  
  handleSortClick = async (string) => {
    let shopList = [...this.state.mensItemList]
    switch(string) {
      case "H2L":
        shopList.sort((item1, item2) => 
        (item1.price - item2.price > 0) ? -1 : (item1.price - item2.price < 0) ? 1: 0);
        console.log("shopList", shopList.price)
        await this.setState({
          mensItemList: [...shopList]
        })
        break;
      case "L2H":
        shopList.sort((item1, item2) => 
          (item1.price - item2.price > 0) ? 1 : (item1.price - item2.price < 0) ? -1: 0);
        console.log("shopList", shopList.price)
        await this.setState({
          mensItemList: [...shopList]
        });
        break;
      default:
        return;
    }
  }


  handleFilterClick = async (value) => {
    let shopList = [...MENS_SHOP_LIST];

    if (value === '25') {
      const under25 = shopList.filter((item) => item.price < 25)
      await this.setState({
        mensItemList: under25,
      });
    } else if (value === '50') {
      const under50 = shopList.filter((item) => item.price < 50)
      await this.setState({
        mensItemList: under50
      });
    } else if (value === '75') {
      const under75 = shopList.filter((item) => item.price < 75)
      await this.setState({
        mensItemList: under75
      });
    } else if (value === '100') {
      const under100 = shopList.filter((item) => item.price < 100)
      await this.setState({
        mensItemList: under100
      })
    } else {
      const under150 = shopList.filter((item) => item.price < 150)
      await this.setState({
        mensItemList: under150
      })
    }
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
        onFilterClick={this.handleFilterClick}
        categoryRedirect={this.categoryRedirect}
        FullItemList={this.state.mensItemList} 
        onSortClick={this.handleSortClick}
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
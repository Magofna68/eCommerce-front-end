import React, { Component } from 'react';
import { WOMENS_SHOP_LIST } from '../../../../data.jsx';
// import CollectionPreview from '../../preview-collection/CollectionPreview.jsx';
import Queen from '../../../../assets/Queen.png';
import './womensClothing.styles.scss';
// import ItemDetailPage from '../../../../pages/itemDetailPage/SearchedItemDetails.jsx';
import ItemList from '../itemList/ItemList.jsx';
import Button from 'react-bootstrap/Button';
import ItemDetail from '../../../../pages/itemDetailPage/ItemDetail.jsx';
// import Breadcrumb from '../../../utility/breadcrumb/Breadcrumb.jsx';
import Sneakers from '../../category/sneakers/Sneakers.jsx';
import Jackets from '../../category/jackets/Jackets.jsx';
import Hats from '../../category/hats/Hats.jsx';
import Shirts from '../../category/shirts/Shirts.jsx';


class WomensClothing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      itemList:  WOMENS_SHOP_LIST ,
      selectedCategory: "",
      womensFilteredList: [],
    }
  }
  
  categoryRedirect = async (clickedCategoryTitle) => {
    const categoryToAssign = clickedCategoryTitle
    console.log("WOMENSCATEGORYREDIRECT", categoryToAssign);
    const womensTempFilteredList = this.state.itemList.filter(item => item.title.includes(clickedCategoryTitle.toLowerCase()))
    // console.log("MENSCLOTHING -- Before state Update", mensTempFilteredList)
    await this.setState({
      // mensFilteredlist: mensTempFilteredList,
      selectedCategory: categoryToAssign,
    })
    await this.setState({ womensFilteredList: womensTempFilteredList})
    console.log("after state update", this.state.womensFilteredList)
    // return mensTempFilteredList;
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
  
  handleClearItemStateClick = (e) => {
    console.log("HandleClear")
    this.setState({
      selectedItem: null,
    })
  }

  handleChangingSelectedItem = (id) => {
    console.log(id)
    const selectedItem = id;
    // const selectedItem = this.state.itemList.filter(item => item.id.includes(id));
    // const selectedItem = this.state.itemList.filter(item => item.id === id[0])
    console.log(selectedItem)
    // const selectedItem = props;
    this.setState({
      selectedItem: selectedItem
    })

    console.log(this.state.itemList)
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    const { selectedCategory } = this.state;
    // let { itemList, selectedItem, handleChangingSelectedItem} = this.state;

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
          filteredSneakers={this.state.womensFilteredList}
          itemToShow={this.state.selectedItem}
          onClearItemStateClick={this.handleClearItemStateClick}
        />
      // buttonText = 
      }  else if (this.state.selectedCategory === "SHIRTS") {
        currentlyVisibleState = 
          <Shirts
            onItemSelection={this.handleChangingSelectedItem} 
            filteredShirts={this.state.womensFilteredList}
            itemToShow={this.state.selectedItem}
            onClearItemStateClick={this.handleClearItemStateClick}
          />
        // buttonText = selectedCategory
        } else if (this.state.selectedCategory === "HATS") {
          currentlyVisibleState =  
            <Hats 
              onItemSelection={this.handleChangingSelectedItem} 
              filteredHats={this.state.womensFilteredList}
              itemToShow={this.state.selectedItem}
              onClearItemStateClick={this.handleClearItemStateClick}
            />
          // buttonText = selectedCategory
        } else if (this.state.selectedCategory === "JACKETS") {
          currentlyVisibleState = 
            <Jackets 
              onItemSelection={this.handleChangingSelectedItem} 
              filteredJackets={this.state.womensFilteredList}
              itemToShow={this.state.selectedItem}
              onClearItemStateClick={this.handleClearItemStateClick}
            />
      // buttonText = selectedCategory
        } else { 
            currentlyVisibleState = 
            <ItemList 
              categoryRedirect={this.categoryRedirect}
              FullItemList={this.state.itemList} 
              onItemSelection={this.handleChangingSelectedItem} 
            />
            buttonText = "Home"
          }


    return (
      <div>
        {
          buttonText === "Home" ?
            <div className="womensBackdropContain">
              <div className='womensBackdropMobile'>
                <h1>Women's</h1><h1>Clothing</h1>
              </div>
                <img src={Queen} alt="Queen" width="150px" />
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
            <Button onClick={this.handleClick}>{buttonText}</Button>
          }
        </div>
      </div>
    );
  }
}

export default WomensClothing;
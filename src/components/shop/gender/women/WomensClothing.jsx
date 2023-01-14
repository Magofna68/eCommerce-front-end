import React, { Component } from 'react';
import { WOMENS_SHOP_LIST } from '../../../../data';
import CollectionPreview from '../../preview-collection/CollectionPreview';
import Queen from '../../../../assets/Queen.png';
import './womensClothing.styles.scss';
import ItemDetailPage from '../../../../pages/itemDetailPage/SearchedItemDetails';
import ItemList from '../itemList/ItemList';
import Button from 'react-bootstrap/Button';
import ItemDetail from '../../../../pages/itemDetailPage/ItemDetail';
import Breadcrumb from '../../../utility/breadcrumb/Breadcrumb';
import Sneakers from '../../category/sneakers/Sneakers';
import Jackets from '../../category/jackets/Jackets';
import Hats from '../../category/hats/Hats';
import Shirts from '../../category/shirts/Shirts';


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
              itemCollection={this.state.itemList} 
              onItemSelection={this.handleChangingSelectedItem} 
            />
            buttonText = "Home"
          }


    return (
      <div>
        {
          buttonText === "Home" ?
        <div className="backdropContain">
          <div className='backdropMobile'>
            <h1>Women's</h1><h1>Clothing</h1>
          </div>
            <img src={Queen} alt="Queen" width="150px" />
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

export default WomensClothing;








// import React from 'react'
// import { WOMENS_SHOP_DATA } from '../../../../data'
// import CollectionPreview from '../../preview-collection/CollectionPreview'
// import Queen from '../../../../assets/Queen.png';
// import './womensClothing.styles.scss';

// export default function WomensClothing() {
//   return (
//     <div>
//         <div className='backdropLogo'
//         // style={{
//         //   display: 'flex',
//         //   width: '96vw',
//         //   position: 'fixed',       
//         //   color: 'grey',
//         //   justifyContent: 'center',
//         //   alignItems: 'center',
//         //   zIndex: -1,
//         //   flexDirection: 'column'
//         // }}
//         >
//           <div className='backdropMobile'
//           // style={{
//           //   display: 'flex', 
//           //   justifyContent: 'space-around', 
//           //   width: '600px', 
//           //   marginBottom: '-15%', 
//           //   marginTop: '5%'
//           //   }}
//           >
//             <h1>Women's</h1><h1>Clothing</h1>
//           </div>
//             <img src={Queen} alt="Queens" width="150px" style={{zIndex: -1}}/>
//         </div>

//       {
//         WOMENS_SHOP_DATA.map(({id, ...otherCollectionProps}) => (
//           <CollectionPreview key={id} {...otherCollectionProps} />
//         ))
//       }
//     </div>
//   )
// }

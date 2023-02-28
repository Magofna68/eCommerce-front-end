import React, { Component } from 'react';
import { WOMENS_SHOP_LIST } from '../../../../data.jsx';
import Queen from '../../../../assets/Queen.png';
import './womensClothing.styles.scss';
import ItemList from '../itemList/ItemList.jsx';
import Button from 'react-bootstrap/Button';
import ItemDetail from '../../../../pages/itemDetailPage/ItemDetail.jsx';
import Sneakers from '../../category/sneakers/Sneakers.jsx';
import Jackets from '../../category/jackets/Jackets.jsx';
import Hats from '../../category/hats/Hats.jsx';
import Shirts from '../../category/shirts/Shirts.jsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// class WomensClothing extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedItem: null,
//       womensItemList:  WOMENS_SHOP_LIST ,
//       selectedCategory: "",
//       filteredList: [],
//     }
//   }
  
//   categoryRedirect = async (clickedCategoryTitle) => {
//     const categoryToAssign = clickedCategoryTitle
//     console.log("WOMENSCATEGORYREDIRECT", categoryToAssign);
//     const womensTempFilteredList = this.state.womensItemList.filter(item => item.title.includes(clickedCategoryTitle.toLowerCase()))
//     // console.log("MENSCLOTHING -- Before state Update", mensTempFilteredList)
//     await this.setState({
//       // mensFilteredlist: mensTempFilteredList,
//       selectedCategory: categoryToAssign,
//     })
//     await this.setState({ womensFilteredList: womensTempFilteredList})
//     console.log("after state update", this.state.womensFilteredList)
//     // return mensTempFilteredList;
//   }

//   handleClick = (e) => {
//     if (this.state.selectedItem != null) {
//       this.setState({selectedItem: null})
//     } else if (this.state.selectedCategory != null) {
//       this.setState({selectedCategory: ""})
//     }
//   }

//   handleHomeClick = () => {
//     window.location.assign('#/')
//   }
  
//   handleHomeClick = (e) => {
//     console.log("HandleClear")
//     this.setState({
//       selectedItem: null,
//     })
//   }

//   handleChangingSelectedItem = (id) => {
//     console.log(id)
//     const selectedItem = id;
//     console.log(selectedItem)
//     this.setState({
//       selectedItem: selectedItem
//     })

//     console.log(this.state.womensItemList)
//   }

//   handleSortClick = async (term) => {
//     let shopList = [...this.state.womensItemList]
//     switch(term) {
//       case 'H2L':
//         shopList.sort((item1, item2) => 
//         (item1.price - item2.price > 0) ? -1 : (item1.price - item2.price < 0) ? 1: 0);
//         console.log("shopList", shopList.price)
//         await this.setState({
//           womensItemList: [...shopList]
//         })
//         break;
//       case "L2H":
//         shopList.sort((item1, item2) => 
//           (item1.price - item2.price > 0) ? 1 : (item1.price - item2.price < 0) ? -1: 0);
//         console.log("shopList", shopList.price)
//         await this.setState({
//           womensItemList: [...shopList]
//         });
//         break;
//       default:
//         return;
//     }
//   }


//   handleFilterClick = async (value) => {
//     let shopList = [...WOMENS_SHOP_LIST];

//     if (value === '25') {
//       const under25 = shopList.filter((item) => item.price < 25)
//       await this.setState({
//         womensItemList: under25,
//       });
//     } else if (value === '50') {
//       const under50 = shopList.filter((item) => item.price < 50)
//       await this.setState({
//         womensItemList: under50
//       });
//     } else if (value === '75') {
//       const under75 = shopList.filter((item) => item.price < 75)
//       await this.setState({
//         womensItemList: under75
//       });
//     } else if (value === '100') {
//       const under100 = shopList.filter((item) => item.price < 100)
//       await this.setState({
//         womensItemList: under100
//       })
//     } else {
//       const under150 = shopList.filter((item) => item.price < 150)
//       await this.setState({
//         womensItemList: under150
//       })
//     }
//   }

//   render() {

export default function WomensClothing(props) {
  const { 
    selectedCategory,
    shopData,
    filteredList, 
    selectedItem, 
    categoryRedirect, 
    handleChangingSelectedItem,
    handleFilterClick,
    handleSortClick,
    handleHomeClick,
    handleBackClick,
  } = props;

    let currentlyVisibleState = null;
    let buttonText = null;

    if (selectedItem != null) {
      currentlyVisibleState = 
        <ItemDetail 
          itemToShow={selectedItem} 
          onClearItemStateClick={handleHomeClick}
        />
        buttonText = selectedCategory
    } else if (selectedCategory === "SNEAKERS") {
      currentlyVisibleState = 
        <Sneakers 
          onItemSelection={handleChangingSelectedItem} 
          filteredSneakers={filteredList}
          itemToShow={selectedItem}
          onHomeClick={handleHomeClick}
        />

      }  else if (selectedCategory === "SHIRTS") {
        currentlyVisibleState = 
          <Shirts
            onItemSelection={handleChangingSelectedItem} 
            filteredShirts={filteredList}
            itemToShow={selectedItem}
            onHomeClick={handleHomeClick}
          />
        } else if (selectedCategory === "HATS") {
          currentlyVisibleState =  
            <Hats 
              onItemSelection={handleChangingSelectedItem} 
              filteredHats={filteredList}
              itemToShow={selectedItem}
              onHomeClick={handleHomeClick}
            />
        } else if (selectedCategory === "JACKETS") {
          currentlyVisibleState = 
            <Jackets 
              onItemSelection={handleChangingSelectedItem} 
              filteredJackets={filteredList}
              itemToShow={selectedItem}
              onHomeClick={handleHomeClick}
            />
        } else { 
            currentlyVisibleState = 
            <ItemList 
              onSortClick={handleSortClick}
              onFilterClick={handleFilterClick}
              categoryRedirect={categoryRedirect}
              // fullItemList={womensItemList} 
              fullItemList={shopData}
              onItemSelection={handleChangingSelectedItem} 
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
              <span className="queenIconContainer">
                <img src={Queen} alt="Queen" width="100%" />
              </span>
            </div>
          :
            null
        }

        {currentlyVisibleState}
        
        <div style={{ display: 'flex', margin: '3% 0 0% 5%'}}>
          {
            buttonText === "Home" ? 
            <Button onClick={handleHomeClick}>{buttonText}< ArrowBackIcon /></Button>
            :
            <Button onClick={handleBackClick}>{buttonText}< ArrowBackIcon /></Button>
          }
        </div>
      </div>
    );
  }
// }

// export default WomensClothing;
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
import ItemDetails from '../../../../pages/itemDetailPage/itemDetails/ItemDetails.jsx';

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
        <ItemDetails
          handleBackClick={handleBackClick}
          itemToShow={selectedItem} 
          onClearItemStateClick={handleHomeClick}
        />
        buttonText = "WomensClothing"
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
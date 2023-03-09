import React, { Component } from 'react';
import { WOMENS_SHOP_LIST, MENS_SHOP_LIST } from '../../../../data.jsx';
import Queen from '../../../../assets/Queen.png';
import './womensClothing.styles.scss';
import ItemList from '../itemList/ItemList.jsx';
import Button from 'react-bootstrap/Button';
import ItemDetail from '../../../../pages/itemDetailPage/ItemDetail.jsx';
import Sneakers from '../../category/sneakers/Sneakers.jsx';
import Jackets from '../../category/jackets/Jackets.jsx';
import Hats from '../../category/hats/Hats.jsx';
import Sale from '../../category/sale/Sale.jsx';
import Shirts from '../../category/shirts/Shirts.jsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ItemDetails from '../../../../pages/itemDetailPage/itemDetails/ItemDetails.jsx';
import { useNavigate } from 'react-router';

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

    const navigate = useNavigate();

    const toItemDetailsClick = (e) => {
      // Save the ID into variable and filter through array of obj to find selected item
      const savedId = e.id;
      console.log("WOMENSclothing# -- savedId: ", e)
      const list = [ ...MENS_SHOP_LIST, ...WOMENS_SHOP_LIST ]
      console.log("#WOMENSclothing: list ", list)
      const savedItem = list.filter(item => item.id === savedId)[0]
      console.log("WOMENSclothing# -- SavedItem:", savedItem)
      // let path = savedItem.title + '/' + savedId;
      // let path2 = 'shop/'+ savedItem.title + '/' + savedId;
      let path3 = savedId;
      console.log("path", path3)
      navigate(path3, {
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

    if 
    // (selectedItem != null) {
    //   currentlyVisibleState = 
    //     <ItemDetails
    //       handleBackClick={handleBackClick}
    //       itemToShow={selectedItem} 
    //       onClearItemStateClick={handleHomeClick}
    //     />
    //     buttonText = "WomensClothing"
    // } else if 
    (selectedCategory === "SNEAKERS") {
      currentlyVisibleState = 
        <Sneakers 
          toItemDetailsClick={toItemDetailsClick}
          onItemSelection={handleChangingSelectedItem} 
          filteredSneakers={filteredList}
          itemToShow={selectedItem}
          onHomeClick={handleHomeClick}
        />

      }  else if (selectedCategory === "SHIRTS") {
        currentlyVisibleState = 
          <Shirts
            toItemDetailsClick={toItemDetailsClick}
            onItemSelection={handleChangingSelectedItem} 
            filteredShirts={filteredList}
            itemToShow={selectedItem}
            onHomeClick={handleHomeClick}
          />
        } else if (selectedCategory === "HATS") {
          currentlyVisibleState =  
            <Hats 
              toItemDetailsClick={toItemDetailsClick}
              onItemSelection={handleChangingSelectedItem} 
              filteredHats={filteredList}
              itemToShow={selectedItem}
              onHomeClick={handleHomeClick}
            />
        } else if (selectedCategory === "JACKETS") {
          currentlyVisibleState = 
            <Jackets 
              toItemDetailsClick={toItemDetailsClick}
              onItemSelection={handleChangingSelectedItem} 
              filteredJackets={filteredList}
              itemToShow={selectedItem}
              onHomeClick={handleHomeClick}
            />
        } else if (selectedCategory === "SALE") {
          buttonText="WOMENS"
          currentlyVisibleState = 
            <Sale
              toItemDetailsClick={toItemDetailsClick}
              onItemSelection={handleChangingSelectedItem} 
              filteredSale={filteredList}
              itemToShow={selectedItem}
              handleHomeClick={handleHomeClick}
          />
        }else { 
            currentlyVisibleState = 
            <ItemList 
              toItemDetailsClick={toItemDetailsClick}
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
            <Button onClick={()=> navigate(-1)}>{buttonText}< ArrowBackIcon /></Button>
          }
        </div>
      </div>
    );
  }
// }

// export default WomensClothing;
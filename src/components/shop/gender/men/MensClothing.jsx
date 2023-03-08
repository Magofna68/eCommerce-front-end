import React, { Component, } from 'react';
import { useNavigate } from 'react-router';
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
import ItemDetails from '../../../../pages/itemDetailPage/itemDetails/ItemDetails.jsx';

export default function MensClothing(props) {
  const { 
    selectedCategory, 
    mensItemList, 
    mensFilteredList,
    shopData,
    filteredList, 
    selectedItem, 
    categoryRedirect, 
    handleChangingSelectedItem,
    handleFilterClick,
    handleSortClick,
    handleHomeClick,
    handleBackClick,
    priceFilterData,
    priceFilterTitle
  } = props;


  const navigate = useNavigate();

  const toItemDetailsClick = (e) => {
    // Save the ID into variable and filter through array of obj to find selected item
    const savedId = e.id;
    console.log("MENSclothing# -- savedId: ", e)
    const list = [ ...MENS_SHOP_LIST, ...WOMENS_SHOP_LIST ]
    console.log("#MENSclothing: list ", list)
    const savedItem = list.filter(item => item.id === savedId)[0]
    console.log("MENSclothing# -- SavedItem:", savedItem)
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


    let currentlyVisibleState = null;
    let buttonText = null;

    if 
    // (selectedItem != null) {
    //   buttonText="MensClothing"
    //   currentlyVisibleState = 
    //   <ItemDetails 
    //     itemToShow={selectedItem}
    //     handleHomeClick={handleHomeClick} 
    //   />
    // } else if 
    (selectedCategory === "SNEAKERS") {
        buttonText="MENS"
        currentlyVisibleState = 
        <Sneakers 
          toItemDetailsClick={toItemDetailsClick}
          onItemSelection={handleChangingSelectedItem} 
          filteredSneakers={filteredList}
          itemToShow={selectedItem}
          handleHomeClick={handleHomeClick}
        />
    }  else if (selectedCategory === "SHIRTS") {
        buttonText="MENS"
        currentlyVisibleState = 
        <Shirts
          toItemDetailsClick={toItemDetailsClick}
          onItemSelection={handleChangingSelectedItem} 
          filteredShirts={filteredList}
          itemToShow={selectedItem}
          handleHomeClick={handleHomeClick}
        />
  } else if (selectedCategory === "HATS") {
        buttonText="MENS"
        currentlyVisibleState =  
        <Hats 
          toItemDetailsClick={toItemDetailsClick}  
          onItemSelection={handleChangingSelectedItem} 
          filteredHats={filteredList}
          itemToShow={selectedItem}
          handleHomeClick={handleHomeClick}
        />
    } else if (selectedCategory === "JACKETS") {
        buttonText="MENS"
        currentlyVisibleState = 
        <Jackets 
          toItemDetailsClick={toItemDetailsClick}
          onItemSelection={handleChangingSelectedItem} 
          filteredJackets={filteredList}
          itemToShow={selectedItem}
          handleHomeClick={handleHomeClick}
        />
    } else if (selectedCategory === "SALE") {
      buttonText="MENS"
      currentlyVisibleState = 
      <Sale
        toItemDetailsClick={toItemDetailsClick}
        onItemSelection={handleChangingSelectedItem} 
        filteredSale={filteredList}
        itemToShow={selectedItem}
        handleHomeClick={handleHomeClick}
      />
    } else { 
      currentlyVisibleState = 
      <ItemList 
        toItemDetailsClick={toItemDetailsClick}
        onFilterClick={handleFilterClick}
        onSortClick={handleSortClick}
        categoryRedirect={categoryRedirect}
        fullItemList={shopData} 
        onItemSelection={handleChangingSelectedItem}
        // priceFilterData={priceFilterData}
        // priceFilterTitle={priceFilterTitle}  
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
          buttonText === "ItemList" ? 
          <Button onClick={handleBackClick}>ItemLIst< ArrowBackIcon /></Button>
          :
          buttonText === "MENS" ?
          <Button onClick={handleBackClick}>{buttonText}< ArrowBackIcon /></Button>
          :
          <Button onClick={handleHomeClick}>{buttonText}< ArrowBackIcon /></Button>
        }
        </div>
      </div>
    );
  }
// }

// export default MensClothing;
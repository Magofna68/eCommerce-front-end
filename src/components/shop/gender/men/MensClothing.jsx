import React, { Component, } from 'react';
import { useNavigate } from 'react-router';
import { MENS_SHOP_LIST, WOMENS_SHOP_LIST } from '../../../../data.jsx';
import King from '../../../../assets/King.png';
import Queen from '../../../../assets/Queen.png';
import './mensClothing.styles.scss';
import '../women/womensClothing.styles.scss';
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
    priceFilterTitle,
    gender
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

  // const handleMensClick = () => {
  //   window.location.reload(true);
  // }


    let currentlyVisibleState = null;
    let buttonText = null;

    if (selectedCategory === "SNEAKERS") {
        // buttonText="MENS"
        buttonText=`${gender}`
        currentlyVisibleState = 
        <Sneakers 
          toItemDetailsClick={toItemDetailsClick}
          onItemSelection={handleChangingSelectedItem} 
          filteredSneakers={filteredList}
          itemToShow={selectedItem}
          handleHomeClick={handleHomeClick}
        />
    }  else if (selectedCategory === "SHIRTS") {
        // buttonText="MENS"
        buttonText=`${gender}`
        currentlyVisibleState = 
        <Shirts
          toItemDetailsClick={toItemDetailsClick}
          onItemSelection={handleChangingSelectedItem} 
          filteredShirts={filteredList}
          itemToShow={selectedItem}
          handleHomeClick={handleHomeClick}
        />
  } else if (selectedCategory === "HATS") {
        // buttonText="MENS"
        buttonText=`${gender}`
        currentlyVisibleState =  
        <Hats 
          toItemDetailsClick={toItemDetailsClick}  
          onItemSelection={handleChangingSelectedItem} 
          filteredHats={filteredList}
          itemToShow={selectedItem}
          handleHomeClick={handleHomeClick}
        />
    } else if (selectedCategory === "JACKETS") {
        // buttonText="MENS"
        buttonText=`${gender}`
        currentlyVisibleState = 
        <Jackets 
          toItemDetailsClick={toItemDetailsClick}
          onItemSelection={handleChangingSelectedItem} 
          filteredJackets={filteredList}
          itemToShow={selectedItem}
          handleHomeClick={handleHomeClick}
        />
    } else if (selectedCategory === "SALE") {
      // buttonText="MENS"
      buttonText=`${gender}`
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
        onSortClick={handleSortClick}
        onFilterClick={handleFilterClick}
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
          buttonText === "Home" && gender === 'MENS' ?
            <div className="backdropContain">
              <div className='backdropText'>
                <h1>Men's</h1><h1>Clothing</h1>
              </div>
              <span className="crownIconContainer">
                <img src={King} alt="KINGs" width="100%" style={{zIndex: -1}}/>
              </span>
            </div>
        :
          buttonText === "Home" && gender === 'WOMENS' ?
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
          buttonText === "MENS" || buttonText === 'WOMENS' ?
          <Button  
            onClick={handleBackClick}
            style={{ 
              padding: '0.5% 3%', 
              marginLeft: '5%', 
              display: 'flex', 
              justifyContent: 'left', 
              alignContent: 'left'
            }}>
              {buttonText} < ArrowBackIcon />
          </Button>
          :
          <Button 
            onClick={()=> navigate(-1)}
            style={{ 
              padding: '0.5% 1%', 
              marginLeft: '5%', 
              display: 'flex', 
              justifyContent: 'left', 
              alignContent: 'left'
            }}>
              {buttonText} < ArrowBackIcon />
          </Button>
        }
        </div>
      </div>
    );
  }
// }

// export default MensClothing;
import React, { useEffect } from 'react'
import {SHOP_DATA} from '../../../../data.jsx'
// import CollectionPreview from '../../preview-collection/CollectionPreview';
import FullItemCollection from '../../fullCollection/fullItemCollection/FullItemCollection.jsx'

export default function Sale(props) {
  const { toItemDetailsClick, onItemSelection, filteredSale, handleHomeClick, selectedCategory } = props;
  const saleCollection = [];
  saleCollection.push(SHOP_DATA[4]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  console.log("FilteredSale: ", filteredSale)
  const gender = JSON.parse(sessionStorage.getItem('gender'));

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      {
        selectedCategory === 'SALE' ?
          saleCollection.map(({id, ...otherCollectionProps}) => (
            <FullItemCollection 
              filteredList={filteredSale} 
              toItemDetailsClick={toItemDetailsClick}
              key={id} 
              id={id} 
              handleHomeClick={handleHomeClick}
              onItemSelection={onItemSelection} 
              {...otherCollectionProps} />
            ))
        :
        gender === "MENS" ?
            filteredSale.map(({id, ...otherCollectionProps}) => (
              <FullItemCollection 
                filteredList={filteredSale} 
                toItemDetailsClick={toItemDetailsClick}
                key={id} 
                id={id} 
                handleHomeClick={handleHomeClick}
                onItemSelection={onItemSelection} 
                {...otherCollectionProps} />
              ))
            :
            <div>
              <h1 style={{ color: 'black'}}>
                <strong>Sorry,<br/> there are no {gender.toLowerCase()} items currently on Sale.</strong>
              </h1>
              <h3 style={{ padding: '10px'}}>Please check back later for the best deals and discounts available.</h3>
          </div>
      }
    </div>
  )
}
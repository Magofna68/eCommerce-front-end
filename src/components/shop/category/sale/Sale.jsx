import React, { useEffect } from 'react'
import {SHOP_DATA} from '../../../../data.jsx'
// import CollectionPreview from '../../preview-collection/CollectionPreview';
import FullItemCollection from '../../fullCollection/fullItemCollection/FullItemCollection.jsx'

export default function Sale(props) {
  const { testClick, onItemSelection, filteredSale, itemToShow, handleHomeClick } = props;
  const saleCollection = [];
  saleCollection.push(SHOP_DATA[4]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      {/* BUG: not correctly rendering h1 from ternary statement  */}
      {
        filteredSale !== [] ?
          saleCollection.map(({id, ...otherCollectionProps}) => (
            <FullItemCollection 
            filteredList={filteredSale} 
            testClick={testClick}
            key={id} 
            id={id} 
            handleHomeClick={handleHomeClick}
            onItemSelection={onItemSelection} 
            {...otherCollectionProps} />
          ))
        :
          <h1 style={{ color: 'black'}}>
            Sorry, there are no items currently on Sale.<br/> 
            Please check back later for the best deals and discounts available.
          </h1>
      }
    </div>
  )
}
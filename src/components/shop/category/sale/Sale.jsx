import React from 'react'
import {SHOP_DATA} from '../../../../data.jsx'
// import CollectionPreview from '../../preview-collection/CollectionPreview';
import FullItemCollection from '../../fullCollection/fullItemCollection/FullItemCollection.jsx'

export default function Sale(props) {
  const { onItemSelection, filteredSale, itemToShow } = props;
  const saleCollection = [];
  saleCollection.push(SHOP_DATA[4]);

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <h1>{saleCollection.title}</h1>
      {
        saleCollection.map(({id, ...otherCollectionProps}) => (
          <FullItemCollection 
            filteredList={filteredSale} 
            key={id} 
            id={id} 
            onItemSelection={onItemSelection} 
            {...otherCollectionProps} />
        ))
      }
    </div>
  )
}
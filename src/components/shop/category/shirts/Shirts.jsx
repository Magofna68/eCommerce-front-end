import React, { useEffect } from 'react'
import './shirts.styles.scss';
import FullItemCollection from '../../fullCollection/fullItemCollection/FullItemCollection.jsx';
import { SHOP_DATA } from '../../../../data.jsx';

export default function Shirts(props) {
  const { onItemSelection, filteredShirts, itemToShow } = props;
  const shirtCollection = [];
  shirtCollection.push(SHOP_DATA[3]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ display: 'flex',}}>
      <div></div>
      {/* {shirtCollection.title} */}
      {
        // mensFilteredList !== [] ?
        shirtCollection.map(({id, ...otherCollectionProps}) => (
          <FullItemCollection 
            filteredList={filteredShirts} 
            id={id} 
            key={id} 
            onItemSelection={onItemSelection} 
            {...otherCollectionProps} />
        ))
      }
    </div>
  )
}
     


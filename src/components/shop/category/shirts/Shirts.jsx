import React, { useEffect } from 'react'
import './shirts.styles.scss';
import FullItemCollection from '../../fullCollection/fullItemCollection/FullItemCollection.jsx';
import { SHOP_DATA } from '../../../../data.jsx';

export default function Shirts(props) {
  const { toItemDetailsClick, onItemSelection, filteredShirts, itemToShow, handleHomeClick } = props;
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
            toItemDetailsClick={toItemDetailsClick}
            id={id} 
            key={id} 
            handleHomeClick={handleHomeClick}
            onItemSelection={onItemSelection} 
            {...otherCollectionProps} />
        ))
      }
    </div>
  )
}
     


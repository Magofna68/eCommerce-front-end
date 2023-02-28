import React, { useEffect } from 'react';
import {SHOP_DATA} from '../../../../data.jsx';
import FullItemCollection from '../../fullCollection/fullItemCollection/FullItemCollection.jsx'

export default function Jackets(props) {
  const {onItemSelection, filteredJackets} = props;
  const jacketCollection = [];
  jacketCollection.push(SHOP_DATA[1])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      {
        jacketCollection.map(({id, ...otherCollectionProps}) => (
          <FullItemCollection 
            key={id} 
            filteredList={filteredJackets} 
            onItemSelection={onItemSelection} 
            {...otherCollectionProps} 
          />
        ))
      }
    </div>
  )
}

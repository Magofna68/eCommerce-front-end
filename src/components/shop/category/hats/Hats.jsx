import React, { useState } from 'react'
import {SHOP_DATA} from '../../../../data.jsx'
// import CollectionPreview from '../../preview-collection/CollectionPreview';
import RenderFullCollection from '../render-full-collection/RenderFullCollection.jsx';

export default function Hats(props) {
  const { onItemSelection, filteredHats, itemToShow } = props;
  const hatCollection = [];
  hatCollection.push(SHOP_DATA[2]);
  // const [ filteredList, setFilteredList ] = useState({...mensFilteredHats})
  // console.log("FilteredList", filteredList);
  console.log("mensFilteredHats being passed from MensClothing", filteredHats)

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <h1>{hatCollection.title}</h1>
      {
        hatCollection.map(({id, ...otherCollectionProps}) => (
          <RenderFullCollection 
            key={id} 
            filteredList={filteredHats} 
            id={id} 
            onItemSelection={onItemSelection} 
            {...otherCollectionProps} />
        ))
      };
    </div>


  )
}

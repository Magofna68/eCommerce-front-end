import React, { useState } from 'react'
import {SHOP_DATA} from '../../../../data'
// import CollectionPreview from '../../preview-collection/CollectionPreview';
import RenderFullCollection from '../render-full-collection/RenderFullCollection';

export default function Hats(props) {
  const { onItemSelection, mensFilteredHats, itemToShow } = props;
  const hatCollection = [];
  hatCollection.push(SHOP_DATA[2]);
  // const [ filteredList, setFilteredList ] = useState({...mensFilteredHats})
  // console.log("FilteredList", filteredList);
  console.log("mensFilteredHats being passed from MensClothing", mensFilteredHats)

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <h1>{hatCollection.title}</h1>
      {
        // mensFilteredHats !== [] ?
        hatCollection.map(({id, ...otherCollectionProps}) => (
          <RenderFullCollection filteredList={mensFilteredHats} id={id} key={id} onItemSelection={onItemSelection} {...otherCollectionProps} />
        ))
        // :
        // hatCollection.map(({id, ...otherCollectionProps}) => (
        //   <RenderFullCollection id={id} key={id} onItemSelection={onItemSelection} {...otherCollectionProps} />
        // ))
      };
    </div>


  )
}

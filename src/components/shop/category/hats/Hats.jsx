import React, { useState } from 'react'
import {SHOP_DATA} from '../../../../data'
// import CollectionPreview from '../../preview-collection/CollectionPreview';
import RenderFullCollection from '../render-full-collection/RenderFullCollection';

export default function Hats(props) {
  const { onItemSelection, mensFilteredList, itemToShow } = props;
  const hatCollection = [];
  hatCollection.push(SHOP_DATA[2]);
  // const [ filteredList, setFilteredList ] = useState({...mensFilteredList})
  // console.log("FilteredList", filteredList);
  console.log("mensFilteredList being passed from MensClothing", mensFilteredList)

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <h1>{hatCollection.title}</h1>
      {
        // mensFilteredList !== [] ?
        hatCollection.map(({id, ...otherCollectionProps}) => (
          <RenderFullCollection filteredList={mensFilteredList} id={id} key={id} onItemSelection={onItemSelection} {...otherCollectionProps} />
        ))
        // :
        // hatCollection.map(({id, ...otherCollectionProps}) => (
        //   <RenderFullCollection id={id} key={id} onItemSelection={onItemSelection} {...otherCollectionProps} />
        // ))
      };
    </div>


  )
}

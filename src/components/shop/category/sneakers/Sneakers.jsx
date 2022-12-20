import React from 'react'
import {SHOP_DATA} from '../../../../data';
import RenderFullCollection from '../render-full-collection/RenderFullCollection';


export default function Sneakers(props) {
  const { onItemSelection, itemToShow, mensFilteredSneakers } = props
  const sneakerCollection = [];
    sneakerCollection.push(SHOP_DATA[0])

  return (
    <div className='sneakerComponent'>
     <h1>{sneakerCollection.title}</h1>

      {
        sneakerCollection.map(({id, ...otherCollectionProps}) => (
          <RenderFullCollection 
            key={id} 
            id={id}
            filteredList={mensFilteredSneakers} 
            onItemSelection={onItemSelection} 
            {...otherCollectionProps} 
          />
        ))
      }
    </div>
  )
}

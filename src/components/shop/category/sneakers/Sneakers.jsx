import React from 'react'
import {SHOP_DATA} from '../../../../data';
import RenderFullCollection from '../render-full-collection/RenderFullCollection';


export default function Sneakers(props) {
  const { onItemSelection, itemToShow } = props
  const sneakerCollection = [];
    sneakerCollection.push(SHOP_DATA[0])

  return (
    <div className='sneakerComponent'>
      Sneakers Component
      {/* {
        sneakerCollection.map(({id, ...otherCollectionProps}) => (
          <RenderFullCollection key={id} onItemSelection={onItemSelection} {...otherCollectionProps} />
        ))
      } */}
    </div>
  )
}

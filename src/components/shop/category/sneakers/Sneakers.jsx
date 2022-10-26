import React from 'react'
import {SHOP_DATA} from '../../../../data';
import RenderFullCollection from '../render-full-collection/RenderFullCollection';


export default function Sneakers({id, ...otherCollectionProps}) {
  const sneakerCollection = [];
    sneakerCollection.push(SHOP_DATA[0])

  return (
    <div className='sneakerComponent'>
      {
        sneakerCollection.map(({id, ...otherCollectionProps}) => (
          <RenderFullCollection key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  )
}

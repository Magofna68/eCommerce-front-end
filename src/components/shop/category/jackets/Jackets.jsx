import React from 'react'
import {SHOP_DATA} from '../../../../data';
import RenderFullCollection from '../render-full-collection/RenderFullCollection';

export default function Jackets({id, ...otherCollectionProps}) {
  const jacketCollection = [];
  jacketCollection.push(SHOP_DATA[1])
  return (
    <div>
      {
        jacketCollection.map(({id, ...otherCollectionProps}) => (
          <RenderFullCollection key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  )
}

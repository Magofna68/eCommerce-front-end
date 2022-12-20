import React from 'react'
import {SHOP_DATA} from '../../../../data';
import RenderFullCollection from '../render-full-collection/RenderFullCollection';

export default function Jackets(props) {
  const {onItemSelection, filteredJackets} = props;
  const jacketCollection = [];
  jacketCollection.push(SHOP_DATA[1])
  return (
    <div>
      {
        jacketCollection.map(({id, ...otherCollectionProps}) => (
          <RenderFullCollection key={id} filteredList={filteredJackets} onItemSelection={onItemSelection} {...otherCollectionProps} />
        ))
      }
    </div>
  )
}

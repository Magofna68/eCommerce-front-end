import React from 'react'
import {SHOP_DATA} from '../../../../data'
// import CollectionPreview from '../../preview-collection/CollectionPreview';
import RenderFullCollection from '../render-full-collection/RenderFullCollection';

export default function Hats() {
  const hatCollection = [];
  hatCollection.push(SHOP_DATA[2]);
  // console.log({hatCollection})

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <h1>{hatCollection.title}</h1>
      {
        hatCollection.map(({id, ...otherCollectionProps}) => (
          <RenderFullCollection id={id} key={id} {...otherCollectionProps} />
        ))
      };
    </div>


  )
}

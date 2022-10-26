import React from 'react'
import { MENS_SHOP_DATA as mensCollections } from '../../../../data';
import CollectionPreview from '../../preview-collection/CollectionPreview';

export default function MensClothing() {
  return (
    <div>
      <h1 
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          marginTop: '5%',
          fontWeight: '600',
          fontFamily: 'cursive',
          fontSize: '50px'
        }}
      >
        KINGS
      </h1>
      <div>
        {
          mensCollections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    </div>
  )
}

import React from 'react'
import { WOMENS_SHOP_DATA } from '../../../../data'
import CollectionPreview from '../../preview-collection/CollectionPreview'

export default function WomensClothing() {
  return (
    <div>
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          fontWeight: '600',
          marginTop: '5%',
          justifyContent: 'center',
          fontFamily: 'cursive',
          fontSize: '50px'
        }}>QUEENS</h1>
      {
        WOMENS_SHOP_DATA.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  )
}

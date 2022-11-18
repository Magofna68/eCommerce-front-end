import React from 'react'
import { MENS_SHOP_DATA as mensCollections } from '../../../../data';
import CollectionPreview from '../../preview-collection/CollectionPreview';
import King from '../../../../assets/King.png';
import './mensClothing.styles.scss';

export default function MensClothing() {
  return (
    <div>
        <div className="backdropContain"
        // style={{
        //   display: 'flex',
        //   width: '96vw',
        //   position: 'fixed',       
        //   color: 'grey',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   zIndex: -1,
        //   flexDirection: 'column'
        // }}
        >
          <div className='backdropMobile'>
            <h1>Men's</h1><h1>Clothing</h1>
          </div>
            <img src={King} alt="KINGs" width="150px" style={{zIndex: -1}}/>
        </div>

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

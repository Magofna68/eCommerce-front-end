import React from 'react'
import { WOMENS_SHOP_DATA } from '../../../../data'
import CollectionPreview from '../../preview-collection/CollectionPreview'
import Queen from '../../../../assets/Queen.png';

export default function WomensClothing() {
  return (
    <div>
      {/* <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          fontWeight: '600',
          marginTop: '5%',
          justifyContent: 'center',
          fontFamily: 'cursive',
          fontSize: '50px'
        }}>
          QUEENS
          
          </h1> */}
        {/* <div style={{
          marginTop: '-5px',
          marginBottom: '-25px',
          // width: '50vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img src={Queen} alt="queen" width="100px" />
        </div> */}
                <div style={{
          // marginTop: '-25px',
          display: 'flex',
          // marginBottom: '25px',
          width: '96vw',
          position: 'fixed',       
          color: 'grey',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: -1,
          flexDirection: 'column'
        }}>
          <div style={{
            display: 'flex', 
            justifyContent: 'space-around', 
            width: '600px', 
            marginBottom: '-15%', 
            marginTop: '5%'
            }}
          >
            <h1>Women's</h1><h1>Clothing</h1>
          </div>
            <img src={Queen} alt="Queens" width="150px" style={{zIndex: -1}}/>
        </div>

      {
        WOMENS_SHOP_DATA.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  )
}

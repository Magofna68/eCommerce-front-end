import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {SHOP_DATA} from '../../../../data.jsx';
import FullItemCollection from '../../fullCollection/fullItemCollection/FullItemCollection.jsx';

export default function Sneakers(props) {
  const { testClick, onItemSelection, itemToShow, filteredSneakers, handleHomeClick  } = props
  const sneakerCollection = [];
    sneakerCollection.push(SHOP_DATA[0])

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <div className='sneakerComponent'>
     {/* <h1>{sneakerCollection.title}</h1> */}

      {
        sneakerCollection.map(({id, ...otherCollectionProps}) => (
          <FullItemCollection 
            key={id} 
            testClick={testClick}
            id={id}
            filteredList={filteredSneakers} 
            handleHomeClick={handleHomeClick}
            onItemSelection={onItemSelection}
            {...otherCollectionProps} 
          />
        ))
      }
    </div>
  )
}

import React, { useEffect } from 'react'
import {SHOP_DATA} from '../../../../data.jsx'
// import CollectionPreview from '../../preview-collection/CollectionPreview';
// import FullItemCollection from '../fullCollection/FullItemCollection/FullItemCollection.jsx'
import FullItemCollection from '../../fullCollection/fullItemCollection/FullItemCollection.jsx'

export default function Hats(props) {
  const { onItemSelection, filteredHats, itemToShow, handleHomeClick } = props;
  const hatCollection = [];
  hatCollection.push(SHOP_DATA[2]);
  // const [ filteredList, setFilteredList ] = useState({...mensFilteredHats})
  // console.log("FilteredList", filteredList);
  console.log("mensFilteredHats being passed from MensClothing", filteredHats)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <h1>{hatCollection.title}</h1>
      {
        hatCollection.map(({id, ...otherCollectionProps}) => (
          <FullItemCollection 
            key={id} 
            filteredList={filteredHats} 
            id={id} 
            onItemSelection={onItemSelection} 
            handleHomeClick={handleHomeClick}
            {...otherCollectionProps} />
        ))
      };
    </div>


  )
}

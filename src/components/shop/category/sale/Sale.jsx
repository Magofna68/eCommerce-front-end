import React from 'react'
import {SHOP_DATA} from '../../../../data.jsx'
// import CollectionPreview from '../../preview-collection/CollectionPreview';
import FullItemCollection from '../../fullCollection/itemCollection/ItemCollection.jsx'

export default function Sale(props) {
  const { onItemSelection, filteredSale, itemToShow } = props;
  const saleCollection = [];
  saleCollection.push(SHOP_DATA[4]);
  // const [ filteredList, setFilteredList ] = useState({...mensFilteredHats})
  // console.log("FilteredList", filteredList);
  // console.log("mensFilteredHats being passed from MensClothing", filteredHats)

  // const handleChangingSelectedItem = (id) => {
  //   console.log(id)
  //   const selectedItem = id;
  //   console.log(selectedItem)
  //   this.setState({
  //     selectedItem: selectedItem
  //   })

  //   console.log(this.state.itemList)
  // }

  return (
    <div style={{display: 'flex'}}>
      <h1>{saleCollection.title}</h1>
      {
        saleCollection.map(({id, ...otherCollectionProps}) => (
          <FullItemCollection 
            filteredList={filteredSale} 
            key={id} 
            id={id} 
            onItemSelection={onItemSelection} 
            {...otherCollectionProps} />
        ))
      }
    </div>
  )
}
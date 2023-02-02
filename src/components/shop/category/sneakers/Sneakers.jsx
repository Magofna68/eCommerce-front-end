import React from 'react'
import { useNavigate } from 'react-router-dom';
import {SHOP_DATA} from '../../../../data.jsx';
import FullItemCollection from '../../fullCollection/itemCollection/ItemCollection.jsx';

export default function Sneakers(props) {
  const { onItemSelection, itemToShow, filteredSneakers,  } = props
  const sneakerCollection = [];
    sneakerCollection.push(SHOP_DATA[0])
    // const navigate = useNavigate();

    // const handleItemSelectionClick = (e) => {
    //   let selectedItem = e;
    //   console.log(selectedItem);
    //   let path = '/shop/'.concat('sneakers/').concat(selectedItem.id)
    //   console.log(path)
    //   navigate(path, {state:  {
    //     id: selectedItem.id, 
    //     name: selectedItem.name, 
    //     price: selectedItem.price, 
    //     img: selectedItem.img,
    //     img2: selectedItem.img2,
    //     desc: selectedItem.desc,
    //   }
    // })
    // }
  return (
    <div className='sneakerComponent'>
     <h1>{sneakerCollection.title}</h1>

      {
        sneakerCollection.map(({id, ...otherCollectionProps}) => (
          <FullItemCollection 
            key={id} 
            id={id}
            filteredList={filteredSneakers} 
            onItemSelection={onItemSelection}
            {...otherCollectionProps} 
          />
        ))
      }
    </div>
  )
}

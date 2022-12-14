import React from 'react'
import CollectionItem from '../../components/shop/collection-item/CollectionItem';
import ItemDetails from './itemDetails/ItemDetails';

export default function ItemDetail(props) {
  const { itemToShow, onClearItemStateClick } = props;
  return (
    <div>
      <ItemDetails 
        handleClearItemStateClick={onClearItemStateClick} 
        title={itemToShow.title} 
        id={itemToShow.id} 
        name={itemToShow.name} 
        price={itemToShow.price} 
        img={itemToShow.img} 
        img2={itemToShow.img2} 
        img3={itemToShow.img3}
        img4={itemToShow.img4}
        desc={itemToShow.desc}
        detail={itemToShow.detail}
        alt={itemToShow.alt}
        reviews={itemToShow.reviews}
      />
    </div>
  )
}

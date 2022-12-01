import React from 'react'
import CollectionItem from '../../components/shop/collection-item/CollectionItem';
import ItemDetails from '../../components/itemDetails/ItemDetails.jsx';

export default function ItemDetail(props) {
  const { itemToShow, onClearItemStateClick } = props;
  return (
    <div>
      <ItemDetails handleClearItemStateClick={onClearItemStateClick} title={itemToShow.title} id={itemToShow.id} name={itemToShow.name} price={itemToShow.price} img={itemToShow.img} img2={itemToShow.img2} />
    </div>
  )
}

import React from 'react';
import ItemDetails from './itemDetails/ItemDetails.jsx';

export default function ItemDetail(props) {
  const { itemToShow, handleClearStateClick } = props;
  return (
    <div>
      <ItemDetails 
        handleClearStateClick={handleClearStateClick} 
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

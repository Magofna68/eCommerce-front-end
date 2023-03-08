import './collectionItem.styles.scss';
import React, { useEffect } from 'react';
import {Card } from 'react-bootstrap/'
// import { ShoppingCartContext } from '../../context/ShoppingCartContext.jsx';
import { PropTypes } from 'prop-types';
// import { Rotate90DegreesCwOutlined } from '@mui/icons-material';


// Being fed from ITEMLIST
export function CollectionItem (props) {
const { 
  id, name, alt, price, img, handleItemSelection, toItemDetailsClick
  // img2, img3, img4, desc, details,
} = props;

useEffect(() => {
  window.scrollTo(0, 0)
}, [])

const saveSelectedItem = (e) => {
  const selectedItem = [props][0];
  console.log("COLLECTIONitem# -- selectedItem: ", selectedItem)
  toItemDetailsClick(selectedItem);
  // handleItemSelection(selectedItem);
}
  
  return (
    
    <Card key={id} className='collectionItem' id={id} onClick={(e)=> saveSelectedItem(e)}>
      <Card.Img variant='top' className='collectionItemImg' src={img} alt={alt} />

      <Card.Body>
        <Card.Title> {name}</Card.Title>
        <Card.Text> ${price} </Card.Text>
      </Card.Body>

    </Card>
  );
}

CollectionItem.propType = {
  onItemSelection: PropTypes.func,
}

export default CollectionItem;
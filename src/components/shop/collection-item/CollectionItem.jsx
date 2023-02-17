import './collectionItem.styles.scss';
import React, { useContext } from 'react';
import {Card, Button } from 'react-bootstrap/'
import { ShoppingCartContext } from '../../context/ShoppingCartContext.jsx';
import { PropTypes } from 'prop-types';
import { Rotate90DegreesCwOutlined } from '@mui/icons-material';


// Being fed from ITEMLIST
export function CollectionItem (props) {
const { id, name, alt, desc, details, price, img, img2, img3, img4, handleItemSelection, title} = props;

const cart = useContext(ShoppingCartContext);
const productQuantity = cart.getProductQuantity(id);

const saveSelectedItem = (e) => {
  const selectedItem = [props][0];
  console.log(selectedItem)
  handleItemSelection(selectedItem);
}

  return (
  <Card 
    key={id}
    className='collectionItem'
    onClick={(e)=> saveSelectedItem(e)}
    style={{ marginTop: '5%',}}
  >
    <Card.Img 
      variant='top' 
      className='collectionItemImg'
      src={img} 
      style={{
        height: '75%'         
    }}>
    </Card.Img>
    <Card.Body 
      style={{
        height: '15%',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5% 2%',
        textAlign: 'center',
        flexDirection: 'column',
      }}
    >
      <Card.Title 
        style={{ 
          background: 'white',
          borderBottom: 'none'
        }}
      >
        {name}
      </Card.Title>
      <Card.Text
        style={{
          marginBottom: '3%',
          fontWeight: '600'
        }}
      >
        ${price}
      </Card.Text>
    </Card.Body>
  </Card>
);
}

CollectionItem.propType = {
  onItemSelection: PropTypes.func,
}

export default CollectionItem;
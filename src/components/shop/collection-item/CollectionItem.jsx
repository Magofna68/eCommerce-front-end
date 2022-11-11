import './collectionItem.styles.scss';
import React, { useContext } from 'react';
import {Card, Button } from 'react-bootstrap/'
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import {useNavigate} from 'react-router-dom';

export function CollectionItem ({id, name, price, img, img2, routeName, desc}) {
const navigate = useNavigate();
const cart = useContext(ShoppingCartContext);
const productQuantity = cart.getProductQuantity(id);

let path = routeName + '/' + id;


const toItemDetail = (id, name, price, img, desc) => {
  navigate(path, {
    state:  {
      id: id, 
      name: name, 
      price: price, 
      img: img,
      img2: img2,
      desc: desc,
    }
  })
}
  return (
  // <a href={'/shop/', + }></a>
  <Card 
    className='collectionItem'
    onClick={()=> toItemDetail({id, name, price, img, img2, desc})}
  >
    <Card.Img 
      variant='top' 
      className='collectionItemImg'
      src={img} 
      style={{
        height: '75%'
      }}/>
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
    <div className='w-100'>
      {productQuantity === 0 ? (
        <Button
          onClick={() => cart.addOneItemToCart(id, name, price, img)}
          variant="outline-primary"
          className="w-100"
          style={{
            border: 'none'
          }}
        >
        + Add to Cart
        </Button> 
      )
      :
      <>
      <div 
        className='d-flex align-items-center flex-column'
        style={{ gap: '.5rem' }}>
          <div 
            className='d-flex align-items-center justify-content-center'
            style={{gap: '.5rem'}}
          >
            <Button onClick={() => cart.removeOneItemFromCart(id)}>-</Button>
            <div>
              <span className='fs-3'>{productQuantity}</span> in Cart
            </div>
            <Button onClick={() => cart.addOneItemToCart(id)}>+</Button>
          </div>
          <Button 
            variant="danger" 
            size="sm" 
            onClick={() => cart.deleteItemFromCart(id)}
          >
            Remove
          </Button>
      </div>
        </>
      }
    </div>
  </Card>
);
}

export default CollectionItem;
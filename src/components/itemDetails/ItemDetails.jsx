import './itemDetails.styles.scss';
import React, {useContext} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

import { ShoppingCartContext } from '../../components/context/ShoppingCartContext';

export default function ItemDetails(props) {
  const { name, price, img, id, img2 } = props;
  const cart = useContext(ShoppingCartContext);
  const productQuantity = cart.getProductQuantity(id);


  const shoeSize = [
    6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10,
    10.5, 11, 11.5, 12, 12.5, 13, 13.5
  ]

  return (
    <div>
    <Container fluid="md">
      <Row>
        <Col sm={8}>
          <div 
            styles={{
              width: '90vw',

            }}>
              <img src={img} alt="test" width="100%"></img></div></Col>
        <Col sm={4}>
          <span className='itemName'><h2><strong>{name}</strong></h2></span>
          <span style={{ 
              fontSize: '25px',
              fontWeight: 500,
              display: 'flex', 
              justifyContent: 'center',
          }}>${price}</span><br/>
          <span style={{
              fontSize: '12px', 
              fontWeight: 600
            }}>Select Size:</span>
          <div className='sizeContainer'>
            {
              shoeSize.map((size) => 
              <li className="shoeSize">{size}</li>
              )
            }
          </div>
          <div className='w-100'>
            {productQuantity === 0 ? (
              <Button 
                onClick={() => cart.addOneItemToCart(id, name, price, img)}
                variant="outline-primary" 
                className="w-100"
                style={{
                border: 'none',
                //  marginBottom: '1px',
                }}
              >+ Add to Cart
                {/* <AddShoppingCartSharpIcon 
                  font="large"  
                  variant="outline-primary"
                  className="rounded-circle"
                /> */}
              </Button>
            ) : <>
              <div 
                className='d-flex align-items-center flex-column' 
                style={{gap: '.5rem'}}
              >
                <div 
                  className='d-flex align-items-center justify-content-center'
                  style={{gap: '.5rem'}}
                >
                  <Button onClick={() => cart.removeOneItemFromCart(id)}>-</Button>
                  <div>
                    <span className='fs-3'>{productQuantity}</span> in cart
                  </div>
                  <Button onClick={() => cart.addOneItemToCart(id)}>+</Button>
                </div>
                <Button variant="danger" size="sm" onClick={() => cart.deleteItemFromCart(id)}>Remove</Button>
              </div>
              </>}
          </div>
        </Col>
      </Row>
      <Row>
        {/* <Col>${price}</Col> */}
        <Col><img src={img2} alt="" width="80px"></img></Col>
      </Row>
      {/* <Row>
      </Row> */}
    </Container>
    </div>
  )
}

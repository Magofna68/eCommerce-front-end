import './itemDetails.styles.scss';
import React, { useContext, useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

import SizeList from '../../components/utility/sizeList/SizeList';

import { ShoppingCartContext } from '../../components/context/ShoppingCartContext';


// came from ItemDetail
export default function ItemDetails(props) {
  const { name, price, img, id, img2, title } = props;
  const cart = useContext(ShoppingCartContext);
  const productQuantity = cart.getProductQuantity(id);
  
  const [ selectedSize, setSelectedSize ] = useState([]);
  const [ active, setActive ] = useState(false);
  const [ selected, setSelected ] = useState(false);
  // const [itemDetailState, setItemDetailState ] = useState({
  //   activeObj: null,
  //   size: [ 
  //     { id: 1, value: 6,},
  //     { id: 2, value: 6.5,},
  //     { id: 3, value: 7 },
  //     { id: 4, value: 7.5 },
  //     { id: 5, value: 8 },
  //     { id: 6, value: 8.5 },
  //     { id: 7, value: 9 },
  //     { id: 8, value: 9.5 },
  //     { id: 9, value: 10 },
  //     { id: 10, value: 10.5 },
  //     { id: 11, value: 11 },
  //     { id: 12, value: 11.5 },
  //     { id: 13, value: 12 },
  //     { id: 14, value: 12.5 },
  //     { id: 15, value: 13 },
  //   ]
  // });
  
  // const shoeSize = [
  //   6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10,
  //   10.5, 11, 11.5, 12, 12.5, 13, 13.5
  // ]

  const sneakers = [
    { id: 1, value: 6 },
    { id: 2, value: 6.5 },
    { id: 3, value: 7 },
    { id: 4, value: 7.5 },
    { id: 5, value: 8 },
    { id: 6, value: 8.5 },
    { id: 7, value: 9 },
    { id: 8, value: 9.5 },
    { id: 9, value: 10 },
    { id: 10, value: 10.5 },
    { id: 11, value: 11 },
    { id: 12, value: 11.5 },
    { id: 13, value: 12 },
    { id: 14, value: 12.5 },
    { id: 15, value: 13 },
  ]
  
  const clothesSize = [
    {id: 0, value: 'XS'},
    {id: 1, value: 'S'},
    {id: 2, value: 'M'},
    {id: 3, value: 'L'},
    {id: 4, value: 'XL'},
    {id: 5, value: 'XXL'},
    {id: 6, value: '3XL'},
  ]
  function handleSizeSelect(id) {
    console.log("ID", id)
    // setSelectedSize({id: id, value: value, selected: true})
    setSelectedSize(id)
    setActive(active => !active)
  }

  useEffect(() => {
    console.log("Selected Size; ID", selectedSize)
  
    // setItemDetailState({...itemDetailState, activeObj: selectedSize.id})
    setActive(active => !active)
 
    // setSelectedSize({...selectedSize, selected: false})
  }, [selectedSize]);



  // const consoleLog = (info) => {
  //   console.log(info)
  // }

  let item = title;
  console.log(item)
  return (
    // <div>
    <Container fluid="md">
      <Row>
        <Col sm={8}>
          <div 
            styles={{
              width: '90vw',
            }}>
              <img src={img} alt="test" width="100%"></img>
            </div>
        </Col>
        <Col sm={4}>
          <span className='itemName'><h2><strong>{name}</strong></h2></span>
          <span style={{ 
              fontSize: '25px',
              fontWeight: 500,
              display: 'flex', 
              justifyContent: 'center',
          }}>
            ${price}
          </span>
          <br/>
          <span style={{
              fontSize: '12px', 
              fontWeight: 600
            }}
          >
            Select Size:
          </span>
          {/* {

          } */}
          <div className='sizeContainer'>
            
          {
            props.title.toLowerCase() === 'sneakers' ?
              sneakers.map(({ id, value }) => (
                <SizeList
                  key={id}
                  id={id}
                  value={value}
                  onSizeSelect={handleSizeSelect}
                  active={selectedSize === id}
                />
              ))
           : 
              clothesSize.map(({id, value}) => 
                <SizeList 
                  key={id}
                  id={id}
                  value={value}
                  onSizeSelect={handleSizeSelect}
                  active={selectedSize === id}
                />
              )
          }

          </div>
          <div className='w-100'>
            {
              productQuantity === 0 ? (
                <Button 
                  onClick={() => cart.addOneItemToCart(id, name, price, img)}
                  variant="outline-primary" 
                  className="w-100"
                  style={{
                  border: 'none',
                  }}>
                    + Add to Cart
                </Button>
              ) 
              : 
              <>
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
              </>
            }
          </div>
          <Col><img src={img2} alt="" width="80px" id="img"></img></Col>
        </Col>
      </Row>
    </Container>
  )
}

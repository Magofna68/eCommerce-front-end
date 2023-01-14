import { useNavigate } from 'react-router';
import React, {useContext, useEffect, useState } from 'react'
import './searchedItemDetailPage.styles.scss';
import {useLocation } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import { Container, Row, Col, Button, } from 'react-bootstrap';
import Breadcrumb from '../../components/utility/breadcrumb/Breadcrumb';
import { ShoppingCartContext } from '../../components/context/ShoppingCartContext';
import SizeList from'../../components/utility/sizeList/SizeList';
import Accordion from '../../components/utility/accordion/Accordion';;


export default function SearchedItemDetails(props) {
  const location = useLocation();
  const cart = useContext(ShoppingCartContext);
  const navigate = useNavigate(-1);
  
  let name = location.state.name;
  let id= location.state.id
  let price = location.state.price;
  let img = location.state.img;
  let img2 = location.state.img2;
  let img3 = location.state.img3;
  let img4 = location.state.img4;
  let desc = location.state.desc;
  let detail = location.state.detail;
  
  const productQuantity = cart.getProductQuantity(id);

  const [ selectedSize, setSelectedSize ] = useState('');
  const [ isActive, setIsActive ] = useState(false);
  const [ value, setValue ] = useState('');
  const [ selectedImg, setSelectedImg ] = useState('img')
  const [activeImg, setActiveImg ] = useState({
    img: [ {img}, {img2}, {img3}, {img4} ] })

  const sneakers = [
    { id: 6, value: 6 },
    { id: 6.5, value: 6.5 },
    { id: 7, value: 7 },
    { id: 7.5, value: 7.5 },
    { id: 8, value: 8 },
    { id: 8.5, value: 8.5 },
    { id: 9, value: 9 },
    { id: 9.5, value: 9.5 },
    { id: 10, value: 10 },
    { id: 10.5, value: 10.5 },
    { id: 11, value: 11 },
    { id: 11.5, value: 11.5 },
    { id: 12, value: 12 },
    { id: 12.5, value: 12.5 },
    { id: 13, value: 13 },
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
  
  
  function handleSizeSelect(id, value) {
    console.log("ID", selectedSize)
    console.log("Active", isActive)
    setValue(value)
    setSelectedSize(id)
  }

  function handleDelete() {
    setSelectedSize('');
  }

  useEffect(() => {
    setIsActive(current => !current)
   }, [ selectedSize]);

  let chip = `Size ${value}`

  const details = detail;
  const detailList = details.map((detail) => 
    <li className='detailItem'>{detail}</li>
  );

  useEffect(() => {
    switch(selectedImg) {
      case "img": 
        setActiveImg(img);
      break;
      case "img2": 
        setActiveImg(img2);
      break;
      case "img3": 
        setActiveImg(img3);
      break;
      case "img4": 
        setActiveImg(img4);
      break;
      default:
        setActiveImg(img)
    }
  console.log(activeImg)}, [selectedImg])

  
  return (
    <>
    <span id="returnIcon" onClick={navigate}>
      <Breadcrumb />
    </span>
    <Container fluid="md">
    <Row>
        <Col sm={6} lg={7} md={7} xl={7}>
          {/* <div className='imagesContain'> */}
        <div 
        className='activeImage'
        >
            <img src={activeImg} alt="test" width="100%"></img>
        </div>
        <Row style={{marginTop: '5px', display: 'flex', justifyContent: 'space-around'}}>
          <div 
            className='imgPreviewContainer'
          >
              <span className='img'>
                <img src={img} alt="" width="50px" onClick={()=> setSelectedImg('img')}></img>
              </span>
              <span className='img' >
                <img src={img2} alt="" width="50px" onClick={()=> setSelectedImg('img2')}></img>
              </span>
              <span className="img" >
                <img src={img3} alt="" width="50px" onClick={()=> setSelectedImg('img3')}></img>
              </span>
              {
                img4 ?
                  <span className="img" >
                    <img src={img4} alt="" width="50px" onClick={()=> setSelectedImg('img4')}></img>
                  </span>
                : 
                  null
              }
          </div>
        </Row>
        </Col>

      <Col sm={6} md={5} lg={5} xl={5}>
        <span className='itemName'><h2><strong>{name}</strong></h2></span>
          <span id="priceContainer">
            <h3>${price}</h3>
          </span>
        <div className='chipContainer'>
          {
            selectedSize ?
            <span className='fade-in-chip'>
              <Chip  
                variant="outlined" 
                color="success" 
                size="small"
                label={chip}
                onDelete={handleDelete} 
                />
            </span>
              :
              null
            }
          </div>
          
          <div style={{ textAlign: 'left', marginTop: '-3%'}}>
            <Accordion desc={desc} details={detailList} />              
          </div>
        {/* <br/> */}
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
          props.title === 'sneakers' ?
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
                onClick={() => console.log(id)}
                onSizeSelect={handleSizeSelect}
                active={selectedSize === id}
              />
            )
          }

        </div>
        <div style={{ height: '35px'}}>

        {
          selectedSize ?
          <div className='w-100 fade-in-chip'>
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
        : null
      }
      </div>
      </Col>
    </Row>
  </Container>
  </>

    // <Container fluid="md">
    //   <Row>
    //     <Col sm={8}>
    //       <div 
    //         styles={{
    //           width: '90vw',

    //         }}>
    //           <img src={img} alt="test" width="100%"></img></div></Col>
    //     <Col sm={4}>
    //       <span className='itemName'><h2><strong>{name}</strong></h2></span>
    //       <span style={{ 
    //           fontSize: '25px',
    //           fontWeight: 500,
    //           display: 'flex', 
    //           justifyContent: 'center',
    //       }}>${price}</span><br/>
    //       <span style={{
    //           fontSize: '12px', 
    //           fontWeight: 600
    //         }}>Select Size:</span>
    //       <div className='sizeContainer'>
    //         {
    //           shoeSize.map((size) => 
    //           <li className="shoeSize">{size}</li>
    //           )
    //         }
    //       </div>
    //       <div className='w-100'>
    //         {productQuantity === 0 ? (
    //           <Button 
    //             onClick={() => cart.addOneItemToCart(id, name, price, img)}
    //             variant="outline-primary" 
    //             className="w-100"
    //             style={{
    //             border: 'none',
    //             //  marginBottom: '1px',
    //             }}
    //           >+ Add to Cart
    //             {/* <AddShoppingCartSharpIcon 
    //               font="large"  
    //               variant="outline-primary"
    //               className="rounded-circle"
    //             /> */}
    //           </Button>
    //         ) : <>
    //           <div 
    //             className='d-flex align-items-center flex-column' 
    //             style={{gap: '.5rem'}}
    //           >
    //             <div 
    //               className='d-flex align-items-center justify-content-center'
    //               style={{gap: '.5rem'}}
    //             >
    //               <Button onClick={() => cart.removeOneItemFromCart(id)}>-</Button>
    //               <div>
    //                 <span className='fs-3'>{productQuantity}</span> in cart
    //               </div>
    //               <Button onClick={() => cart.addOneItemToCart(id)}>+</Button>
    //             </div>
    //             <Button variant="danger" size="sm" onClick={() => cart.deleteItemFromCart(id)}>Remove</Button>
    //           </div>
    //           </>}
    //       </div>
    //     </Col>
    //   </Row>
    //   <Row>
    //     {/* <Col>${price}</Col> */}
    //     <Col><img src={img2} alt="" width="80px"></img></Col>
    //   </Row>
    //   {/* <Row>
    //   </Row> */}
    // </Container>
    )
  }
  
  // <div>
  // <h2>ItemDetailPage</h2>
  // <h4>{name}</h4>
  // <h5>{name}</h5>
  // <button onClick={()=>console.log(name)}>Try Me</button>
  // </div>

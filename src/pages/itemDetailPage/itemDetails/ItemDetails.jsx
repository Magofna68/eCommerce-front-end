import './itemDetails.styles.scss';
import React, { useContext, useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Chip from '@mui/material/Chip';
// import SizeList from '../../components/utility/sizeList/SizeList';
import SizeList from '../../../components/utility/sizeList/SizeList.jsx';
import Breadcrumb from '../../../components/utility/breadcrumb/BreadcrumbGrouping.jsx';
import { ShoppingCartContext } from '../../../components/context/ShoppingCartContext.jsx';
import Accordion from '../../../components/utility/accordion/Accordion.jsx';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import CheckIcon from '@mui/icons-material/Check';

// came from ItemDetail
export default function ItemDetails(props) {
  const { 
    name, price, id, img, img2, img3, img4, desc, reviews,
     detail, alt, title, handleClearItemStateClick 
  } = props;

  const cart = useContext(ShoppingCartContext);
  const productQuantity = cart.getProductQuantity(id);
  const [ selectedSize, setSelectedSize ] = useState('');
  const [ isActive, setIsActive ] = useState(false);
  const [ value, setValue ] = useState('');
  const [ selectedImg, setSelectedImg ] = useState('img')
  // const [ reviewAvg, setReviewAvg ] = useState([]);
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
    setValue(value)
    setSelectedSize(id)
  }

  function handleDelete() {
    setSelectedSize('');
  }

  function handleAvgRating() {
      let tempRating1 = reviews[0].rating
      let tempRating2 = reviews[1].rating
      let tempRating3 = reviews[2].rating
      let totalRating = tempRating1 + tempRating2 + tempRating3;
      let averageRating = totalRating / 3;

    return (
      averageRating
    )
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


  function reviewStars(num) {
    let stars = [];
    let value = Math.trunc(num);

    for (let i = 0; i < value; i++) {
      stars.push(<StarIcon fontSize="small" />)
    }

    return (
      <span onClick={() => console.log({stars})}>
        {
          // BUG: pushes numerical value into array or is posting it to the DOM
          value < num ?
          stars.push(<StarHalfIcon fontSize='small' />)
          :
          null
        }
      {stars}
      </span>
    );
  };

  return (
    <>
      <span id="returnIcon" onClick={handleClearItemStateClick}>
        <Breadcrumb onClearItemStateClick={handleClearItemStateClick}/>
      </span>
      <Container fluid style={{padding: 0}}>
      <Row>
          <Col sm={12} lg={7} md={6} xl={7} style={{padding: 0}}>
          <div className='activeImage'>
              <img src={activeImg} alt="test" width="100%"></img>
          </div>
          
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
                <span className="img" >
                  <img src={img4} alt="" width="50px" onClick={()=> setSelectedImg('img4')}></img>
                </span>
            </div>
          
          <Row>
          
          </Row>
          </Col>

        <Col sm={12} md={6} lg={5} xl={5} style={{padding: 0}}>
          <span className='itemName' onClick={() => handleAvgRating()}>
            <h2><strong>{name}</strong></h2>
          </span>
            <span 
              style={{
                display: 'flex', 
                justifyContent: 'center', 
                marginBottom: '2%'
              }}
            >
              {reviewStars(handleAvgRating())}
            </span>
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
            
            <div style={{ textAlign: 'left', marginTop: '-3%'}}>
              <Accordion 
                desc={desc} 
                details={detailList} 
                reviews={reviews}
                reviewStars={reviewStars}
                onAvgRating={handleAvgRating()}
              />              
            </div>
          <br/>
          
          <div style={{ height: '35px'}}>

          {
            selectedSize ?
            <div className='w-100 fade-in-chip'>
            {
              productQuantity === 0 ? (
                <Button 
                onClick={() => cart.addOneItemToCart(id, name, price, img, value)}
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
                  className='d-flex align-items-center flex-column fade-in-chip' 
                  style={{gap: '.5rem'}}
                  >
                  <div 
                    className='d-flex align-items-center justify-content-center'
                    style={{gap: '.5rem'}}
                    >
                    {/* <div>
                      <span className='fs-3'>{productQuantity}</span> in cart
                    </div> */}
                    <div style={{color: 'gray'}}>
                    {/* <span style={{fontSize: '12px'}}>Added to Cart:</span><br/> */}
                    <CheckIcon />
                    <span style={{fontSize: '12px', marginBottom: '5%'}}>{name}</span>
                    {/* <br/><span style={{ fontSize: '10px', marginTop: '-5%'}}>Remove from Cart</span> */}
                    </div>
                    {/* <Button onClick={() => cart.addOneItemToCart(id)}>+</Button> */}
                  </div>
                   {/* <Button onClick={() => cart.removeOneItemFromCart(id)}>-</Button> */}
                    {/* <Button variant="danger" size="sm" onClick={() => cart.deleteItemFromCart(id)}>Remove</Button> */}
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
  )
}

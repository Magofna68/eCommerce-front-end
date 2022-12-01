import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import ItemDetailPage from '../../../../pages/itemDetailPage/ItemDetailPage';

import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Route, Routes,} from 'react-router-dom';


import './fullCollectionItem.styles.scss';
import { ShoppingCartContext } from '../../../context/ShoppingCartContext';


export default function FullCollectionItem(props) {
  const {title, id, name, price, img, img2, desc, onItemSelection} = props;
  
  const cart = useContext(ShoppingCartContext);
  const productQuantity = cart.getProductQuantity(id);
  // const navigate = useNavigate();

  // let path = '/shop/'.concat(title.toLowerCase()).concat('/', id)
  // const toItemDetail = (id, name, price, img, desc, img2) => {
  //   navigate(path, {
  //     state:  {
  //       id: id, 
  //       name: name, 
  //       price: price, 
  //       img: img,
  //       img2: img2,
  //       desc: desc,
  //     }
  //   })
  // }

  const goToSelectedItem = (e) => {
    const selectedItem = [props][0];
    console.log(selectedItem)
    console.log({selectedItem})
    onItemSelection(selectedItem);
    // this.setState({selectedItem: selectedItem})
  }

return (
<>
  <Card 
    className='fullCollectionItem'
    onClick={(e)=> goToSelectedItem(e)}
    // onClick={() => toItemDetail(id, name, price, img, img2, desc,)}
    >
    <Card.Img 
      className="fullCollectionImg"
      variant='top' 
      src={img} 
      style={{
        height: '75%',
      }}/>
    {/* </Link> */}
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
    {/* <div className='w-100'>
      {productQuantity === 0 ? (
        <Button 
          onClick={() => cart.addOneItemToCart(id, name, price, img)}
          variant="outline-primary" 
          className="w-100"
          style={{
           border: 'none',
          //  marginBottom: '1px',
        }}>
          + Add to Cart
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
    </div> */}
  </Card>
  
  {/* <Routes> */}
    {/* <Route path={path} element={<ItemDetailPage />} /> */}
    {/* <Route path='shop/hats/:id' exact element={<ItemDetailPage  />} />  */}

  {/* </Routes> */}
  </>
  
  // </ShoppingCartProvider>
  )};

// export default FullCollectionItem;

import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import ItemDetailPage from '../../../../pages/itemDetailPage/SearchedItemDetails';

import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Route, Routes,} from 'react-router-dom';


import './fullCollectionItem.styles.scss';
import { ShoppingCartContext } from '../../../context/ShoppingCartContext';


export default function FullCollectionItem(props) {
  const {title, id, alt, name, price, img, img2, img3, img4, detail, desc, handleItemSelection} = props;
  
  const cart = useContext(ShoppingCartContext);
  const productQuantity = cart.getProductQuantity(id);
  // const navigate = useNavigate();
  // console.log(items)
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

  const goToSelectedItem = async (e) => {
    const selectedItem = [props][0];
    // console.log(selectedItem)
    console.log({selectedItem})
    await handleItemSelection(selectedItem);
    // console.log(selectedItem)
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
  </Card>
  </>
  )};

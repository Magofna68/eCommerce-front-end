import './navbar.styles.scss';

import { Row, Col, } from 'react-bootstrap';
import { Container, Button, Modal, NavDropdown } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/esm/Nav';

import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';

import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

import Bag from '../../assets/bag.png';
import SignInAndSignUpPage from '../../pages/signinPage/Sign-in-sign-up';
import HomePage from '../../pages/homePage/HomePage.jsx';
import ContactPage from '../../pages/contactPage/ContactPage.jsx';
import ShopPage from '../../pages/shopPage/ShopPage.jsx';
import PaymentCompletePage from '../../pages/paymentCompletePage/PaymentCompletePage.jsx';
import PaymentFailedPage from '../../pages/paymentCompletePage/PaymentFailedPage.jsx';

import Logo from '../../assets/crown.png'
import { ShoppingCartContext } from '../context/ShoppingCartContext.jsx';
import SearchBar from '../searchBar/SearchBar.jsx';

import { Route, Link, Routes, } from 'react-router-dom';

import React, { useState, useContext,  } from 'react';


export default function Navigationbar({currentUser}) {
  const cart = useContext(ShoppingCartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0); 
  const [open, setOpen ] = useState(false);
  const handleBackdropClose = () => {
    setOpen(false);
  }
  const handleToggle = () => {
    setOpen(!open);
    checkout()
  }

  const [openSearch, setOpenSearch ] = useState(false)

  const handleOpenSearch = async () => {
    setOpenSearch(!openSearch)
    await setTimeout(() => {
      setOpenSearch(false);
    }, 15000)
  }

  const checkout = async () => {
    await fetch('https://https-magofna68-github-io-ecommerce.onrender.com/checkout', {
      // make post request to fetch Url
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      // pass items from cart to backend -- server.js file
      body: JSON.stringify({ items: cart.items })
    })
      // recieve response from backend, convert to JSON
      .then((response)=> {
        return response.json();
    })
      // then get url out of the JSON and forward user to Stripe
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
    })
  }

  // const clearState = () => {
  //   window.location.reload(true);
  //   window.location.assign('/')
  //   // console.log("ClearState REACHED");
  // }

  // const viewPort = window.innerWidth;

  return (
    <Container className='p-0' fluid="true">
      <Navbar 
        className=''
        style={{ display: 'flex', justifyContent: 'space-between'}} 
        expand="lg" 
        >
        <div className="navbarLeft">
          <Navbar.Brand href="https://magofna68.github.io/eCommerce-front-end/#/" className='logo'>
            <img src={Logo} width='100%' alt='logo' />
          </Navbar.Brand>

          <div className='searchBarContainer'>
              {
                openSearch ?
                <SearchBar />
                :
                  <span onClick={handleOpenSearch} className="searchIcon"> 
                    <SearchIcon  />
                  </span>
              }
          </div>
        </div>
        <NavbarToggle className='border-0' aria-controls="justify-content-center navbar-toggle" />
        <NavbarCollapse className='navbar-toggle justify-content-end'>
          <Nav className='justify-content-center margin-left-auto'>            
            <Link className="nav-link" to="/#">HOME</Link>
            <Link className="nav-link" to="/shop" >Shop</Link>
            <Link className='nav-link' to="/shop/mens">Mens</Link>
            <Link className='nav-link' to="/shop/womens">Womens</Link>
            <Link className='nav-link' to='/contact'>contact</Link>
          </Nav>
        </NavbarCollapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title style={{ display: 'flex', justifyContent: 'center'}}>
            <Typography 
              variant='h5'
              sx={{
                fontWeight: 'bolder',
                color: 'rgb(192,192,192,25%)',
                WebkitTextStroke: '0.75px white',
                backgroundImage: `url('https://media3.giphy.com/media/nIUeqFoDuV9mCtxuKt/giphy.gif?cid=ecf05e473yhrumaorie5o06shnk08hex36zfz0xxp4m5s0an&rid=giphy.gif&ct=g')`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                transition: 'color 0.50s, -webkit-text-stroke 0.50s',
                '&: hover': {
                  color: 'rgb(255,155,0,50%)',
                  // color: 'rgb(192,192,192,50%)',
                  WebkitTextStroke: '0.5px silver',
                  cursor: 'arrow',
                }
              }}
              >
                UNDERGROUND ROYALTY
              </Typography>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {
            productCount > 0 ?
            <>
              <Row style={{textAlign: 'left', marginBottom: '3%', fontSize: '12px', display: 'flex', justifyContent: 'left'}}>
                <Col className="modalItemText">Item:</Col>
                <Col className="modalItemText">Size:</Col>
                <Col xs={4} style={{ }}>Name:</Col>
                <Col className="modalItemText">#:</Col>
                <Col className="modalItemText">Price:</Col>
              </Row> 
                      
              {cart.items.map((currentProduct, idx) => (
                <>
                  <Row style={{marginBottom: '3%',}}>
                    <hr/>
                    <Col className="modalCol">
                      <div 
                        className='imgContainer'
                        style={{
                          display: 'flex',
                          minWidth: '50px',
                          maxWidth: '50px',
                          height: '65px',
                          marginTop: '10%'
                        }}
                      >
                        <img 
                          key={idx}
                          src={currentProduct.img}
                          maxWidth='70px'
                          height="100%"
                          alt="Cart Preview"
                          id="img"
                        />
                        <ClearIcon 
                          fontSize="sm" 
                          id="clearItemFromCart"
                          onClick={()=> cart.deleteItemFromCart(currentProduct.id)}
                          style={{
                            position: 'absolute', 
                            cursor: 'pointer'
                          }}
                        />
                      </div>
                    </Col>
                    <Col className="modalCol">
                      {currentProduct.size}
                    </Col>
                    <Col xs={4} className="modalCol" >
                      {currentProduct.name}
                    </Col>

                    <Col className="modalCol">
                      <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', }}>
                          
                        <Col style={{padding: '0', }}>
                          <KeyboardArrowLeftIcon 
                            fontSize='large' 
                            onClick={()=> cart.removeOneItemFromCart(currentProduct.id)}
                            className="cartQuantityArrow"
                          />
                        </Col>

                        <Col style={{paddingTop: '8%',}}>
                          <h6 style={{marginTop: '0%'}}>{currentProduct.quantity}</h6>
                        </Col>

                        <Col style={{padding: '0'}}>
                          <KeyboardArrowRightIcon 
                            fontSize='large' 
                            onClick={()=> cart.addOneItemToCart(currentProduct.id)}
                            className="cartQuantityArrow"
                          />
                        </Col>
                      </div>
                    </Col>

                    <Col className="modalCol">
                      ${currentProduct.price}
                    </Col>
                  </Row>
                </>
              ))}
              <hr/>
              <h6 style={{ display: 'flex', justifyContent:'start'}}>My Bag: ({productCount} item)</h6>
              <h3 style={{ textAlign: 'right', paddingTop: '3%'}}><span style={{fontSize: '20px'}}>Total:</span> ${cart.getTotalCost()}</h3>
                {
                  currentUser ?
                    <>
                      <Button variant="success" onClick={handleToggle}>
                        Proceed to Checkout
                      </Button>
                      <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleBackdropClose}
                      >
                        <CircularProgress color="success" />
                      </Backdrop>
                    </>
                  :
                    <div style={{display: 'flex', justifyContent: 'right'}}>
                      <p style={{fontWeight: 300, fontSize: '12px'}}>You'll have to sign in to complete your purchase</p>
                    </div>
                }
              </>
            :
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <br/>
                <RemoveShoppingCartIcon fontSize="large" /><br/>
                <h5 style={{display: 'block'}}>Click <a href="https://magofna68.github.io/eCommerce-front-end/#/">Here</a> to visit the Shop Page</h5>
                <br/><br/>
              </div>
          }
        </Modal.Body>
          </Modal>
              <span className='cartIcon'>
                <Button
                  variant="outline-primary"
                  className="rounded-square"
                  onClick={handleShow}
                  style={{
                    width: '3.3rem',
                    height: '3.3rem',
                    position: 'relative',
                    opacity: '80%'
                  }}
                >
                <span>
                  <img 
                    src={Bag}  
                    alt="shopping bag"  
                    width="50px" 
                    style={{ position: 'absolute', top: 0, right: 5}} />
                </span>
                <div 
                  className='rounded-circle bg-danger d-flex 
                  justify-content-center align-items-center'
                  style={{
                    color: 'white',
                    bottom: 0,
                    right: 0,
                    transform: 'translate(-25%, -15%)',
                    width: '1.25rem',
                    height: '1.25rem',
                    position: 'absolute',
                  }}
                >
                  {productCount}
                </div>
              </Button>
            </span>
        </Container> 
  )
}

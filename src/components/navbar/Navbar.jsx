import './navbar.styles.scss';

import {Navigate } from 'react-router';
import  {Redirect} from 'react-router-dom';

import { Row, Col, } from 'react-bootstrap';
import { Container, Button, Modal } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/esm/Nav';

import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

import SignInAndSignUpPage from '../../pages/signinPage/Sign-in-sign-up';
import ShopPage from '../../pages/shopPage/ShopPage';
import ContactPage from '../../pages/contactPage/ContactPage';
import HomePage from '../../pages/homePage/HomePage';
import Logo from '../../assets/crown.png'
import { auth } from '../../firebase/Firebase.utils';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import PaymentCompletePage from '../../pages/paymentCompletePage/PaymentCompletePage';
import PaymentFailedPage from '../../pages/paymentCompletePage/PaymentFailedPage';

import { BrowserRouter as Router, Route, Link, Routes, redirect, } from 'react-router-dom';

import React, { useState, useContext, useEffect } from 'react';

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

if (currentUser) {
//   // setAuthenticated(loggedInUser)
//   <Navigate path="#/login" />
// } else {
  <Navigate path="/" />}

  const checkout = async () => {
    // await fetch('http://localhost:4000/checkout', {
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

  return (
        // <Router>
          <Container className='p-0' fluid="true">
            <Navbar className='border' bg="transparent" expand="sm">
             <Navbar.Brand href="/" className='logo'>
                <img 
                  src={Logo} 
                  style={{
                    borderRadius: '5px'
                  }}
                  width='100%' 
                  alt='logo'>
                </img>
             </Navbar.Brand>
             <h2 className='w3-monospace'>Underground ROYALTY</h2>
             <NavbarToggle className='border-0' aria-controls="navbar-toggle" />
             <NavbarCollapse className='justify-content-end navbar-toggle'>
               <Nav className='ml-auto'>
               {/* <Link className="nav-link" to="/">Sign In</Link> */}
               <Link className="nav-link" to="/">Home</Link>
               <Link className='nav-link' to="/shop">Shop</Link>
               <Link className='nav-link' to='/contact'>contact</Link>
                {
                  currentUser ? 
                  <div>
                    <Link className="nav-link" to='/' onClick={()=> auth.signOut(console.log(auth.currentUser))}>Sign Out</Link>
                  </div>
                  :
                    <Link className="nav-link" to='/login'>Sign In</Link>
                  }
                    {
                      currentUser ?
                        <Navbar.Text><span style={{}} className="navbar-text">Signed in as: <br/><span style={{fontWeight: 'bold', color: 'black'}}>{currentUser.displayName}</span></span></Navbar.Text>
                      :
                        <Navbar.Text><span className="navbar-text">Have an account?</span></Navbar.Text>
                    }
                  <span style={{
                    marginRight: '3%',
                  }}>
                  <Button
                    style={{
                      width: '3rem',
                      height: '3rem',
                      position: 'relative',
                    }}
                    variant="outline-primary"
                    className="rounded-circle"
                    onClick={handleShow}
                    >
                    <ShoppingCartOutlinedIcon fontSize="medium" style={{ marginRight: '3%'}}/>
                    <div 
                      className='rounded-circle bg-danger d-flex 
                      justify-content-center align-items-center'
                      style={{
                        color: 'white',
                        bottom: 0,
                        right: 0,
                        transform: 'translate(35%, 35%)',
                        width: '1.5rem',
                        height: '1.5rem',
                        position: 'absolute',
                      }}
                      >
                      {productCount}
                    </div>
                  </Button>
                  </span>
              </Nav>
            </NavbarCollapse>
          </Navbar>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Your Shopping Cart</Modal.Title>
            </Modal.Header>
              <Modal.Body>
                <h3 style={{marginBottom: '10%'}}>{productCount} Items Added To Cart:</h3>
                {
                  productCount > 0 ?
                  <>
                    <Container style={{marginBottom: '5%'}}>
                      <Row style={{marginBottom: '1%'}}>
                        <Col><h6>Item:</h6></Col>
                        <Col xs={6} style={{textAlign: 'left'}}><h6>Name:</h6></Col>
                        <Col><h6>Quantity:</h6></Col>
                        <Col style={{ textAlign: 'right'}}><h6>Price:</h6></Col>
                      </Row>
                  {cart.items.map((currentProduct, idx) => (
                    <>
                      <Row style={{marginBottom: '15px'}}>
                        <Col xs={2} style={{padding: '0'}}>
                          <div 
                            className='imgContainer'
                            style={{
                              display: 'flex',
                              minWidth: '50px',
                              maxWidth: '50px',
                              height: '65px'
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
                        <Col xs={6} style={{padding: '5px 5px 0 0'}}>
                        {currentProduct.name}
                        </Col>
                        <Col xs={2} style={{padding: '0', alignContent: 'center', justifyContent: 'space-between'}}>
                          <div style={{display: 'flex', alignContent: 'center', marginTop: '15%'}}>
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
                        <Col xs={2} style={{textAlign: 'left', padding: '15px 0 0 5%'}}>
                        ${currentProduct.price}
                        </Col>
                      </Row>
                    </>
                    ))}
                    </Container> 
                    <h3 style={{ textAlign: 'right'}}><span style={{fontSize: '20px'}}>Total:</span> ${cart.getTotalCost()}</h3>
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
                  <h3>Visit the shop page to add items</h3>
                }
              </Modal.Body>
              {/* <Button onClick={()=> console.log(cart.name)}>click me</Button> */}
          </Modal>

          <Routes>
          {/* <Route path='/'>Sign In</Route> */}
            <Route path="/" exact element={<HomePage />}>
              {/* {
                currentUser ? <Redirect to="/" /> : <ShopPage />
              } */}
            </Route>
            <Route path='login'  element={<SignInAndSignUpPage/>}></Route>
            <Route path='shop' element={<ShopPage/>}></Route>
            <Route path='success' element={<PaymentCompletePage />}></Route>
            <Route path='cancel' element={<PaymentFailedPage />}></Route>
            <Route path='contact' element={<ContactPage />}></Route>
          </Routes>
        </Container> 
      // </Router>
  )
}
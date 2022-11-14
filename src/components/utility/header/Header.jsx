import React from 'react';
import Navigationbar from '../../navbar/Navbar.jsx'
import SearchBar from '../../searchBar/SearchBar';

import './header.styles.scss';
import { auth } from '../../../firebase/Firebase.utils';

import { Notyf } from 'notyf';

import { Route, Link, Routes, } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

// import HomePage from '../../pages/home/HomePage';
// import ShopPage from '../../pages/shop/ShopPage';
// import AboutPage from '../../pages/about/AboutPage';
// import { auth } from '../../firebase/Firebase.utils';

// import SignInAndSignUpPage from '../../pages/Sign-in-sign-up';
// import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
// import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/esm/Nav';

// import { Container } from 'react-bootstrap';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const notyf = new Notyf();
  
function showSuccessAlert() {
  notyf.success({
    message: 'Sign out Successful. Goodbye.',
    duration: 5000,
    dismissible: true,
  });
  window.location.href = 'https://magofna68.github.io/eCommerce-front-end/#/'
};

export const Header = ({currentUser}) => (
    <section className='header'>
      <section className='header-top'>
        </section>
          <section className='header-bottom '>
            <div className='slogan'>Find Your Style</div>
            <section className='header-bottom_phone'>
              503-269-2656
            </section>
            <section className='header-bottom_email'>
              Magofna68@gmail.com
            </section>
          </section>
          <div className='signIn'>
            <div className='labelContain'>
              {
                currentUser ?
                  <Navbar.Text><span className="navbar-text">Signed in as:<span style={{fontWeight: 'bold', color: 'black'}}>{currentUser.displayName}</span></span></Navbar.Text>
                :
                  <Navbar.Text><span className="navbar-text">Have an account?</span></Navbar.Text>
              }     
              {
                currentUser ? 
                <div>
                  <Link className="nav-link" to='#/' onClick={()=> auth.signOut(showSuccessAlert())}>Sign Out</Link>
                </div>
                :
                  <Link className="nav-link" to='/login'>Sign In</Link>
              }
            </div>
          </div>
          <Navigationbar currentUser = {currentUser} />
        </section>
    );

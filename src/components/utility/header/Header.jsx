import React from 'react';
import Navigationbar from '../../navbar/Navbar.jsx'

import './header.styles.scss';
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
          <Navigationbar currentUser = {currentUser} />
        </section>
    );

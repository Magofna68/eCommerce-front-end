import React from 'react';
import Navigationbar from '../../navbar/Navbar.jsx'
// import SearchBar from '../../searchBar/SearchBar';

import './header.styles.scss';
import { auth } from '../../../firebase/Firebase.utils';

import { Notyf } from 'notyf';

import { Link, } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

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
                  <Navbar.Text><span className="navbar-text">Hello:  <span style={{fontWeight: 'bold', color: 'black', fontSize: '12px'}}>{currentUser.displayName}</span></span></Navbar.Text>
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

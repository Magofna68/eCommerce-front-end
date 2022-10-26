// import Home from '../../components/home/Home';
import './homePage.styles.scss'
import Directory from '../../components/directory/Directory';
import Jackets from '../../components/shop/category/jackets/Jackets';

import React, { Component } from 'react';
  
  export default function HomePage() {
    return (
      <div className='homepage'>
        <Directory />
      </div>
    )
  }

import './shopPage.styles.scss'
import Directory from './directory/Directory.jsx';
import SlideShow from '../../components/utility/mobileSlider/MobileSlider';
import React from 'react';
  
  export default function ShopPage() {
    return (
      <div className='shopPage'>
        <Directory />
        {/* <SlideShow /> */}
      </div>
    )
  }

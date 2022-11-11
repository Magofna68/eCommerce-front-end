import React from "react";
import './menu-item.scss';
// import { useNavigate } from 'react-router';


 const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  // const navigate = useNavigate();
  // let path = navigate('shop/'.concat(title.toLowerCase()).concat('/', linkUrl))

  function goToCategory() {
    window.location.assign('https://magofna68.github.io/eCommerce-front-end/#/shop/' + linkUrl)
  }
 return (
  
  <div 
    className={`${size} menu-item`} 
    // onClick={() => navigate('shop/' + linkUrl)}
    onClick={() => goToCategory()}
  >
    <div 
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
      <div className='content'>
          <h1 className='title'>{title}</h1>
          <span className='subtitle'>SHOP NOW</span>
      </div>
  </div>

 )
}
export default MenuItem;
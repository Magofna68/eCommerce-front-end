import React from "react";
import './menu-item.scss';
// import { useNavigate } from 'react-router';


 const MenuItem = (props) => {
  const { title, imageUrl, size, linkUrl, categoryRedirect } = props;
  // const navigate = useNavigate();
  // let path = navigate('shop/'.concat(title.toLowerCase()).concat('/', linkUrl))

  function goToCategory() {
    window.location.assign('https://magofna68.github.io/eCommerce-front-end/#/shop/' + linkUrl)
  }

  const RedirectToCategory = (e) => {
    const clickedTitle = props.title.toString();
    console.log(clickedTitle);
    console.log(clickedTitle)
    categoryRedirect(clickedTitle)
  }
  const info = (e) => {
    console.log([props.title])
  }

 return (
  
  <div 
    className={`${size} menu-item`} 
    // onClick={() => navigate('shop/' + linkUrl)}
    // onClick={(id) => categoryRedirect(id)}
    onClick={() => RedirectToCategory()}
    // onClick={(e) => info(e)}
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
import React from "react";
import './menu-item.scss';
// import { useNavigate } from 'react-router';


 const MenuItem = (props) => {
  const { title, imageUrl, size, linkUrl, categoryRedirect } = props;

  function goToCategory() {
    window.location.assign('https://magofna68.github.io/eCommerce-front-end/#/shop/' + linkUrl)
  }

  const RedirectToCategory = (e) => {
    const clickedTitle = props.title.toString();
    console.log(clickedTitle);
    console.log(clickedTitle)
    categoryRedirect(clickedTitle)
  }

 return (
  
  <div className={`${size} menu-item`} onClick={() => RedirectToCategory()}>
    <div className="background-image"
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
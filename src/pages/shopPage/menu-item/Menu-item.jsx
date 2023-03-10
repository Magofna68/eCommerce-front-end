import React, { useNavigate } from "react";
import './menu-item.scss';
import { MENS_SHOP_LIST, WOMENS_SHOP_LIST } from "../../../data";
// import { useNavigate } from 'react-router';

  
  export default function MenuItem(props) {
    const { title, imageUrl, size, linkUrl, categoryRedirect } = props;
    // const navigate = useNavigate();

    function goToCategory() {
      window.location.assign('https://magofna68.github.io/eCommerce-front-end/#/shop/' + linkUrl)
    }

    const RedirectToCategory = (e) => {
      const clickedTitle = props.title.toString();
      console.log(clickedTitle);
      let path = 'shop/' + clickedTitle;
      // window.location.assign('http://localhost:3000/#/shop/hats')
      categoryRedirect(clickedTitle)
    }

  
    // const toItemDetailsClick = (e) => {
    //   // Save the ID into variable and filter through array of obj to find selected item
    //   const savedId = e.id;
    //   const list = [ ...MENS_SHOP_LIST, ...WOMENS_SHOP_LIST ]
    //   const savedItem = list.filter(item => item.id === savedId)[0]
    //   let path = savedId;
    //   navigate(path, {
    //     state:  {
    //       id: savedId, 
    //       title: savedItem.title,
    //       name: savedItem.name, 
    //       price: savedItem.price, 
    //       img: savedItem.img,
    //       img2: savedItem.img2,
    //       img3: savedItem.img3,
    //       img4: savedItem.img4,
    //       desc: savedItem.desc,
    //       detail: savedItem.detail,
    //       reviews: savedItem.reviews
    //     }
    //   })
    // }

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
// export default MenuItem;
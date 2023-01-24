import React, { Component, useState } from 'react';
import './homePage.styles.scss';
// import { Container, Row, Col } from 'react-bootstrap';
import  { MENS_SHOP_LIST, SHOP_DATA, WOMENS_SHOP_LIST }  from '../../data.jsx';
import CollectionPreview from '../../components/shop/preview-collection/CollectionPreview.jsx';
import Carousel from '../../components/utility/carousel/Carousel.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jackets from '../../components/shop/category/jackets/Jackets.jsx';
import Shirts from '../../components/shop/category/shirts/Shirts.jsx';
import Sneakers from '../../components/shop/category/sneakers/Sneakers.jsx';
import Hats from '../../components/shop/category/hats/Hats.jsx';
import Sale from '../../components/shop/category/sale/Sale.jsx';


class HomePage extends Component {
  constructor() {
  super(); 
  this.state = {
    clickedCategory: "",
    selectedItem: null,
    ShopData: [],
    categoryItems: [],
    filteredHomepageList: {},
  }
}
// // breakout categoryRedirect into separate component and render component rather than hardcode
// CategoryRedirect = async (e) => {
  //   console.log(e)
  //   // const categoryToAssign = clickedCategoryTitle.value.toString().toUpperCase();
  //   // const category = categoryToAssign.toUpperCase();
  //   // console.log("HomePageRedirect", categoryToAssign);
  //   const filteredList = this.state.shopData.filter(item => item.title.includes(e))
  //   console.log(filteredList)
  //   this.setState({filteredHomepageList: filteredList})
  //   console.log(this.filteredHomepageList)
  
  //   // handleClick = () => {
    
    //     // }
    //   }
    categoryRedirect = async (clickedCategoryTitle) => {
      // create list of mens and womens shop data
      let ShopData = WOMENS_SHOP_LIST;
      let ShopData2 = MENS_SHOP_LIST
      let categoryToAssign = clickedCategoryTitle.toUpperCase();
      // let ShopData3 = [...ShopData, ...ShopData2];
      await this.setState({ categoryItems: [...ShopData, ...ShopData2]})
      console.log("categoryItems:", this.state.categoryItems)

      const filteredList = this.state.categoryItems.filter((item) => item.title.includes(clickedCategoryTitle))
      console.log("FilteredList", filteredList)
      await this.setState({ filteredHomePageList: filteredList })
      console.log("FILTEREDHOMEPAGELIST:", this.state.filteredHomePageList)
    }

    
  //   categoryRedirect = async (clickedCategoryTitle) => {
  //     let filteredList = []
  //     let categoryToAssign = clickedCategoryTitle;
  //     let temp = this.state.ShopData
  //     const tempFilteredList = this.state.ShopData.items;
  //     // .filter(item => item.title.includes(clickedCategoryTitle));
  //     // for (let i=0; i< this.state.ShopData.length; i++) {
  //     // filteredList.push(temp);
  //       // .filter(item => item.title.includes(clickedCategoryTitle.toLowerCase()))
  //     // }
  //     await this.setState({ categoryItems: filteredList})
  //     console.log("categoryItems:", this.state.categoryItems.items)
  //     console.log("tempFILTEREDLIST", this.state.ShopData.items)
  // }
  
  render() {
    const categories = ['shirts', 'sneakers','jackets', 'hats', 'sale']
    
    switch(this.selectedItem) {
      case "JACKETS":
        <Jackets />
        break;
      case "SHIRTS":
        <Shirts />
        break;
      case "HATS":
        <Hats />
        break;
      case "SNEAKERS":
        <Sneakers />
        break;
      case "SALE":
        <Sale />
        break;
      default:
        <HomePage />
    }

    const carouselImages = [
      {
        id: 0,
        title: "Elegant Night Out",
        img: 'https://img.ltwebstatic.com/images3_pi/2022/04/26/16509410621ce21a0f1297302307bcfe4e7f4c7590_thumbnail_600x.webp',
        img2: 'https://img.ltwebstatic.com/images3_pi/2022/04/26/1650941068cd0cce154a16bc6787e4d712adf8453e_thumbnail_600x.webp',
        alt: "black semi formal gown",
        text: "test",
      },
      {
        id: 1,
        title: "Celestine Lambskin Leather Jacket with Fur Trim",
        img: 'https://assets.overland.com/is/image/overlandsheepskin/16107-pwb2-av22463?$style%2Dlg%2D2x$&id=GlIsL0&fmt=jpg&fit=constrain,1',
        img2: 'https://assets.overland.com/is/image/overlandsheepskin/16107-pwb2-av22365?$style%2Dlg%2D2x$',
        alt: "Womens lambskin leather jacket",
        text: "test",
      },
      {
        id: 2,
        title: 'Asian Persuasion',
        img: 'https://i.pinimg.com/736x/be/52/b0/be52b08a649518b42293921e2e45f85e.jpg',
        img2: 'https://i.pinimg.com/originals/dd/06/51/dd06512e03de63956c26366422d00ca0.jpg',
        alt: 'designer',
        text: '',
      }
    ]

    return (
    <Container fluid>
      <div className="homePageGraphic">
        <h1 className="headerUnderground">UNDERGROUND</h1>
        <h1 className='headerRoyalty'>ROYALTY</h1>
        <br/>
        <h4 className="subtext">ROYALTY FOR A REASON.</h4><br/>
      </div>
      <div 
        style={{
          // marginTop: '10%',
          display: 'flex', 
          // position: 'absolute',
          flexDirection: 'row', 
          width: '90vw', 
          justifyContent: 'space-between',
          marginBottom: '3%'
      }}>
        <Row style={{width: '90%', margin: 'auto', marginTop: '-2%'}}>
          <ul className='titleContainer'>
            {
              categories.map((title, index) => (
                <li className="categoryTitle" onClick={() => this.categoryRedirect(title)} key={index}>{title.toUpperCase()}</li>
              ))
            }
          </ul>
        </Row>
        </div>
      <div className='carouselContainer'>
        <Carousel  dataSet={carouselImages}/>
        {/* <h3>ROYALTY FOR A REASON</h3> */}
      </div>
    </Container>
  )
}
}

export default HomePage;


// export default function HomePage() {
//   const [ clickedTitle, setClickedTitle ] = useState("");
//  const navigate = useNavigate();

//  const handleHomePageCategoryClick = (e) => {
//   let categoryTitle = e;
//   console.log(e.target.title)
//   setClickedTitle(categoryTitle);
//   console.log("handleHomePageClick", categoryTitle)
//   let path = '/shop/'.concat(categoryTitle)
//   // navigate('/shop/'.concat({e}), {});
//   // console.log("Path:", path)
// }


// const handleItemSelectionClick = (e) => {
//   let selectedItem = e;
//   console.log(selectedItem);
//   let path = '/shop/'.concat(clickedTitle).concat('/').concat(selectedItem.id)
//   console.log(path)
//   navigate(path, {state:  {
//     id: selectedItem.id, 
//     name: selectedItem.name, 
//     price: selectedItem.price, 
//     img: selectedItem.img,
//     img2: selectedItem.img2,
//     desc: selectedItem.desc,
//   }
// })
// }

  
 
//   const categories = ['shirts', 'sneakers','jackets', 'hats', 'sale']
  
//   return (
//     <Container fluid>
//       <div className="homePageGraphic">
//         <h1 className="headerUnderground">UNDERGROUND</h1>
//         <h1 className='headerRoyalty'>ROYALTY</h1>
//         <br/>
//         <h4 className="subtext">ROYALTY FOR A REASON.</h4><br/>
//       </div>
//       <div 
//         style={{
//           // marginTop: '10%',
//           display: 'flex', 
//           // position: 'absolute',
//           flexDirection: 'row', 
//           width: '90vw', 
//           justifyContent: 'space-between',
//           marginBottom: '3%'
//       }}>
//         <Row style={{width: '90%', margin: 'auto', marginTop: '-2%'}}>
//           <ul className='titleContainer'>
//             {
//               categories.map((title, index) => (
//                 <li className="categoryTitle" key={index}  onClick={()=> categoryRedirect(title)}>{title.toUpperCase()}</li>
//               ))
//             }
//           </ul>
//         </Row>
//         </div>
//       <div className='carouselContainer'>
//         <Carousel  dataSet={carouselImages}/>
//         {/* <h3>ROYALTY FOR A REASON</h3> */}
//       </div>
//     </Container>
//   )
// }


// export default HomePage;
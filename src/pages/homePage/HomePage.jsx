import React, { Component, useState } from 'react';
// import './homePage.styles.scss';
// import { Container, Row, Col } from 'react-bootstrap';
import  { MENS_SHOP_LIST, SHOP_DATA, WOMENS_SHOP_LIST }  from '../../data.jsx';
import CollectionPreview from '../../components/shop/preview-collection/CollectionPreview.jsx';
import Carousel from '../../components/utility/carousel/Carousel.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HomeLayout from './homeLayout/HomeLayout';
import ItemDetail from '../itemDetailPage/ItemDetail.jsx';
import Jackets from '../../components/shop/category/jackets/Jackets.jsx';
import Shirts from '../../components/shop/category/shirts/Shirts.jsx';
import Sneakers from '../../components/shop/category/sneakers/Sneakers.jsx';
import Hats from '../../components/shop/category/hats/Hats.jsx';
import Sale from '../../components/shop/category/sale/Sale.jsx';
import ItemList from '../../components/shop/gender/itemList/ItemList.jsx';

class HomePage extends Component {
  constructor() {
    super(); 
    this.state = {
      clickedCategory: "",
      selectedItem: null,
      ShopData: [],
      categoryItems: [],
      filteredHomepageList: {},
      priceFilterData: [],
      priceFilterTitle: "",
    }
  }
  
  categoryRedirect = async (clickedCategoryTitle) => {
    // create list of mens and womens shop data
    let ShopData = WOMENS_SHOP_LIST;
    let ShopData2 = MENS_SHOP_LIST
    let categoryToAssign = clickedCategoryTitle.toUpperCase();
    await this.setState({ categoryItems: [...ShopData, ...ShopData2]})
    const filteredList = this.state.categoryItems.filter((item) => item.title.includes(clickedCategoryTitle))
    await this.setState({ filteredHomePageList: filteredList, clickedCategory: categoryToAssign })

  }

  priceFilterRedirect = async (price) => {
    let data = [...WOMENS_SHOP_LIST, ...MENS_SHOP_LIST];

    if (price === 100) {
      const filteredData = data.filter((item)=> item.price < price)
      await this.setState({ 
        priceFilterData: filteredData,
        priceFilterTitle: "Under $100"
      });
    } else if (price === 'sale') {
      const filteredData = data.filter((item) => item.title.includes('sale'))
      await this.setState({ 
        priceFilterData: filteredData,
        priceFilterTitle: "Sale"
      });
    } else {
      const filteredData = data.filter((item)=> item.price > price)
      await this.setState({ 
        priceFilterData: filteredData,
        priceFilterTitle: "Luxury Items",
      });
    }
    await this.setState({ clickedCategory: "FILTER"})
    console.log("AfterStateUpdate:", this.state.priceFilterData)

  }
  
  handleItemClick = (id) => {
    let clickedItem = id;
    console.log(clickedItem)
    this.setState({ selectedItem: clickedItem })
  }
  
  render() {
    
    let currentlyVisibleState = null;
    let buttonText = null;
    const { clickedCategory, selectedItem, priceFilterData, priceFilterTitle } = this.state;
    
          if (this.state.selectedItem !== null) {
            currentlyVisibleState = 
            <ItemDetail 
              itemToShow={selectedItem} />
            buttonText = clickedCategory
          } else if (this.state.clickedCategory === "SNEAKERS") {
            currentlyVisibleState = 
            <Sneakers 
              onItemSelection={this.handleItemClick}/>
            buttonText = "Home"
          } else if (this.state.clickedCategory === "SHIRTS") {
            currentlyVisibleState = 
            <Shirts 
              onItemSelection={this.handleItemClick}/>
            buttonText = "Home"
          } else if (this.state.clickedCategory === "JACKETS") {
            currentlyVisibleState = 
            <Jackets 
              onItemSelection={this.handleItemClick}/>
            buttonText= "Home"
          } else if (this.state.clickedCategory === "HATS") {
            currentlyVisibleState = 
            <Hats 
              onItemSelection={this.handleItemClick}/>
            buttonText="Home"
          } else if (this.state.clickedCategory === "SALE") {
            currentlyVisibleState = 
            <Sale 
              onItemSelection={this.handleItemClick}/>
            buttonText="Home"
          } else if (this.state.clickedCategory === 'FILTER') {
            currentlyVisibleState =
            <ItemList 
              onItemSelection={this.handleItemClick} 
              priceFilterData={priceFilterData}
              priceFilterTitle={priceFilterTitle}
            />
          } else {
            currentlyVisibleState = 
            <HomeLayout 
              priceFilterRedirect={this.priceFilterRedirect}
              categoryRedirect={this.categoryRedirect} />
          }

    return (
    <Container fluid style={{ margin: 0, padding: 0}}>
      {currentlyVisibleState}
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
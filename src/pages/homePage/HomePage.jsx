import React, { Component, useState } from 'react';
// import './homePage.styles.scss';
// import { Container, Row, Col } from 'react-bootstrap';
import  { MENS_SHOP_LIST, SHOP_DATA, WOMENS_SHOP_LIST }  from '../../data.jsx';
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
import Footer from '../../components/footer/Footer.jsx';
import Breadcrumb from '../../components/utility/breadcrumb/Breadcrumb.jsx';


export default function HomePage(props) {
  const { 
    selectedCategory, 
    mensItemList, 
    mensFilteredList,
    shopData,
    filteredList, 
    selectedItem, 
    categoryRedirect, 
    handleChangingSelectedItem,
    handleFilterClick,
    handleSortClick,
    handleHomeClick,
    handleBackClick,
    priceFilterData,
    priceFilterTitle,
    priceFilterRedirect
  } = props;

// class HomePage extends Component {
//   constructor() {
//     super(); 
//     this.state = {
//       clickedCategory: "",
//       selectedItem: null,
//       ShopData: [],
//       categoryItems: [],
//       filteredHomepageList: {},
//       priceFilterData: [],
//       priceFilterTitle: "",
//       sortResults: null,
//     }
//   }
  
  // categoryRedirect = async (clickedCategoryTitle) => {
  //   console.log(clickedCategoryTitle)
  //   // create list of mens and womens shop data
  //   let ShopData = WOMENS_SHOP_LIST;
  //   let ShopData2 = MENS_SHOP_LIST
  //   let categoryToAssign = clickedCategoryTitle.toUpperCase();
  //   await this.setState({ categoryItems: [...ShopData, ...ShopData2]})
  //   const filteredList = this.state.categoryItems.filter((item) => item.title.includes(clickedCategoryTitle))
  //   await this.setState({ filteredHomePageList: filteredList, clickedCategory: categoryToAssign })

  // }

  // priceFilterRedirect = async (price) => {
  //   let data = [...WOMENS_SHOP_LIST, ...MENS_SHOP_LIST];

  //   if (price === 100) {
  //     const filteredData = data.filter((item)=> item.price < price)
  //     await this.setState({ 
  //       priceFilterData: filteredData,
  //       priceFilterTitle: "Under $100"
  //     });
  //   } else if (price === 'sale') {
  //     const filteredData = data.filter((item) => item.title.includes('sale'))
  //     await this.setState({ 
  //       priceFilterData: filteredData,
  //       priceFilterTitle: "Sale"
  //     });
  //   } else {
  //     const filteredData = data.filter((item)=> item.price > price)
  //     await this.setState({ 
  //       priceFilterData: filteredData,
  //       priceFilterTitle: "Luxury Items",
  //     });
  //   }
  //   await this.setState({ clickedCategory: "FILTER"})
  //   // console.log("AfterStateUpdate:", this.state.priceFilterData)

  // }
  
  // handleItemClick = (id) => {
  //   let clickedItem = id;
  //   console.log(clickedItem)
  //   this.setState({ selectedItem: clickedItem })
  // }

  
  // onSortClick = async (term) => {
  //   let shopList = [...this.state.priceFilterData];
  //   console.log("shopList", shopList)
  //   console.log("term", term)
  //   switch(term) {
  //     case "H2L":
  //       shopList.sort((item1, item2) => 
  //       (item1.price - item2.price > 0) ? -1 : (item1.price - item2.price < 0) ? 1: 0);
  //       console.log("shopList", shopList[1].price)
  //       await this.setState({
  //         priceFilterData: [...shopList]
  //       })
  //       break;
  //       case "L2H":
  //         shopList.sort((item1, item2) => 
  //         (item1.price - item2.price > 0) ? 1 : (item1.price - item2.price < 0) ? -1: 0);
  //         console.log("shopList", shopList.price)
  //         await this.setState({
  //           priceFilterData: [...shopList]
  //         });
  //         break;
  //         default:
  //           return;
  //         }
  //         console.log("sortResults", this.state.priceFilterData)
  //       }

        
        // render() {
          
          let currentlyVisibleState = null;
          let buttonText = null;
          // const { clickedCategory, selectedItem, priceFilterData, priceFilterTitle, } = this.state;
          
          if (selectedItem !== null) {
            currentlyVisibleState = 
              <ItemDetail 
                itemToShow={selectedItem} 
                handleHomeClick={handleHomeClick}
              />
            buttonText = selectedCategory
          } else if (selectedCategory === "SNEAKERS") {
            currentlyVisibleState = 
              <Sneakers 
                handleHomeClick={handleHomeClick}
                onItemSelection={handleChangingSelectedItem}
              />
            buttonText = "Home"
          } else if (selectedCategory === "SHIRTS") {
            currentlyVisibleState = 
              <Shirts 
                handleHomeClick={handleHomeClick}
                onItemSelection={handleChangingSelectedItem}
              />
            buttonText = "Home"
          } else if (selectedCategory === "JACKETS") {
            currentlyVisibleState = 
              <Jackets 
                handleHomeClick={handleHomeClick}
                onItemSelection={handleChangingSelectedItem}
              />
            buttonText= "Home"
          } else if (selectedCategory === "HATS") {
            currentlyVisibleState = 
              <Hats 
                handleHomeClick={handleHomeClick}
                onItemSelection={handleChangingSelectedItem}
              />
              buttonText="Home"
          } else if (selectedCategory === "SALE") {
            currentlyVisibleState = 
              <Sale 
                handleHomeClick={handleHomeClick}
                onItemSelection={handleChangingSelectedItem}
              />
              buttonText="Home"
          } else if (selectedCategory === 'FILTER') {
            currentlyVisibleState =
            <ItemList 
              onFilterClick={handleFilterClick}
              onSortClick={handleSortClick}
              categoryRedirect={categoryRedirect}
              fullItemList={shopData} 
              onItemSelection={handleChangingSelectedItem}
              priceFilterData={priceFilterData}
              priceFilterTitle={priceFilterTitle} 
            />
          } else {
            currentlyVisibleState = 
            <HomeLayout 
              priceFilterRedirect={priceFilterRedirect}
              categoryRedirect={categoryRedirect} />
          }

    return (
      <>
      {
        selectedCategory ?
        <>
          <div style={{ display: 'flex', justifyContent:'left', alignItems: 'left'}}>
            <Breadcrumb />
          </div>
          <Container fluid style={{ margin: 0, padding: 0}}>
            {currentlyVisibleState}
          </Container>
        </>
        :
        <Container fluid style={{ margin: 0, padding: 0}}>
        {currentlyVisibleState}
      </Container>
      }
      </>
    )
  }
// }

// export default HomePage;


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
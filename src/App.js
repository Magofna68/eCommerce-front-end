import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/Firebase.utils';

import './App.scss';
import { MENS_SHOP_LIST, WOMENS_SHOP_LIST } from './data';

import Directory from './pages/shopPage/directory/Directory';
import Jackets from '../src/components/shop/category/jackets/Jackets.jsx';
import Hats from './components/shop/category/hats/Hats.jsx';
import Shirts from './components/shop/category/shirts/Shirts.jsx';
import Sneakers from './components/shop/category/sneakers/Sneakers.jsx';
import Sale from './components/shop/category/sale/Sale.jsx';
import ClothingController from './components/shop/gender/clothingController/ClothingController.jsx';
import ItemDetails from './pages/itemDetailPage/itemDetails/ItemDetails.jsx'
import {Header} from './components/utility/header/Header.jsx';
import HomePage from './pages/homePage/HomePage.jsx';
import NotFound from './pages/notFound/NotFound.jsx';
import SignInAndSignUpPage from '../src/pages/signinPage/Sign-in-sign-up';
import ContactPage from './pages/contactPage/ContactPage.jsx';
import ShopPage from './pages/shopPage/ShopPage.jsx';
import PaymentCompletePage from './pages/paymentCompletePage/PaymentCompletePage.jsx';
import PaymentFailedPage from './pages/paymentCompletePage/PaymentFailedPage.jsx';
import UnderConstruction from './pages/underConstruction/UnderConstruction.jsx';
import ReturnPolicyPage from './pages/returnPolicyPage/ReturnPolicyPage.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      currentView: null,
      selectedItem: null,
      gender: "",
      selectedCategory: "",
      shopData: [],
      filteredList: [],
      filteredItemList: [],
      viewPort: window.innerWidth,
      // Below consumed by homePage:
      priceFilterTitle: "",
      priceFilterData: [],
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://www.themanual.com/wp-content/uploads/sites/9/2020/08/best-hats-2020.jpg?fit=800%2C800&p=1',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0419/1525/files/2800x1080-Moto-Black-020122-1_800x533_crop_right.jpg?v=1643761804',
          id: 2,
          linkUrl: 'jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.insider.com/59c166d92488491d980855ee?width=1000&format=jpeg&auto=webp',
          id: 3,
          linkUrl: 'sneakers'
        },
        {
          title: 'mens',
          imageUrl: 'https://dvyvvujm9h0uq.cloudfront.net/com/articles/1597738279-195176-patricia-palma-oaab-eywmuu-unsplashjpg.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'mens'
        },
        {
          title: 'womens',
          imageUrl: 'https://static.showit.co/800/pe-Kr33gRQu0n6Aa3jt0FA/25111/a_wachesaw_plantation_high_school_senior_session_by_pasha_belman_photography-26.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'womens'
        }
      ]
    }
}

// assigns gender on Mens / Womens category click
  handleGenderUpdate = async (gender) => {
    if (gender === 'MENS') {
      await this.setState({ 
        shopData: MENS_SHOP_LIST,
        gender: gender,
        selectedCategory: "",
        selectedItem: null
      })
      sessionStorage.setItem('data', JSON.stringify(this.state.shopData))
      sessionStorage.setItem('gender', JSON.stringify(this.state.gender))
    } else if (gender === 'WOMENS') {
      await this.setState({ 
        shopData: WOMENS_SHOP_LIST,
        gender: gender,
        selectedCategory: "",
        selectedItem: null,
      })
      sessionStorage.setItem('data', JSON.stringify(this.state.shopData))
      sessionStorage.setItem('gender', JSON.stringify(this.state.gender))
    } else {
      console.log("APP# Error: ", this.state.gender)
    }
  }

  // sets the correct dataset in state (mens / womens / all)
  handleSetData = async () => {
    console.log('APP# Gender: ', this.state.gender)
    this.state.gender === 'MENS' ?
      await  this.setState({ 
        shopData: MENS_SHOP_LIST 
      })
    :
    this.state.gender === 'WOMENS' ?
    await  this.setState({ 
      shopData: WOMENS_SHOP_LIST 
    })
    :
    // console.log('APP# Gender: ', this.state.gender)
    await this.setState({ shopData: [...WOMENS_SHOP_LIST, ...MENS_SHOP_LIST]})
  }

categoryRedirect = async (clickedCategoryTitle) => {
  // clear the state for what is to be displayed
    await this.setState({ shopData: [] })
    // sets the correct dataset in state (mens / womens / all)
    await this.handleSetData()
    // console.log("APP.js# ShopDATA", this.state.shopData)
    const categoryToAssign = clickedCategoryTitle.toUpperCase();
    const appFilteredList = this.state.shopData.filter(item => item.title.includes(clickedCategoryTitle.toLowerCase()))
    await this.setState({
      selectedCategory: categoryToAssign,
    })
    console.log("App.js# selectedCategory -- updated from categoryRedirect", this.state.selectedCategory)
    await this.setState({ filteredList: appFilteredList })
    console.log("APP.js# FilteredList -- after state update", this.state.filteredList)
}

handleSelectedCategoryClick = (e) => {
  if (this.state.selectedItem != null) {
    this.setState({selectedItem: null})
  } else if (this.state.selectedCategory != null) {
    this.setState({selectedCategory: ""})
  }
}

handleHomeClick = () => {
  this.setState({ 
    selectedItem: null,
    selectedCategory: null,
  })
  // development
  // window.location.assign('/')
  // production
  window.location.assign('https://magofna68.github.io/eCommerce-front-end/#/')
}

handleBackClick = () => {
  window.location.reload(true);
}


handleChangingSelectedItem = async (id) => {
  const selectedItem = id;
  // console.log("SelectedItem App.js:", selectedItem)
  await this.setState({
    selectedItem: selectedItem
  })
}


handleClearStateClick = (text) => {
  if (text === "HOME") {
      this.setState({
        selectedItem: null,
        selectedCategory: "", 
        filteredList: [],
        gender: null,
      })
      window.location.assign('https://magofna68.github.io/eCommerce-front-end/#/');
  } else {
    this.setState({
      selectedItem: null,
      selectedCategory: "",
      filteredList: [],
      gender: null,
    })
  }
}

  handleSortClick = async (term) => {
    const priceFilterData = [...this.state.priceFilterData];
    const shopData = [...this.state.shopData];
    this.setState({ 
      priceFilterData: [],
      shopData: [],
    })

    switch(term) {
      // from homePagelayout
      case "H2L":
          priceFilterData.sort((item1, item2) => (
            item1.price - item2.price > 0) ? -1 : (item1.price - item2.price < 0) ? 1: 0);
            await this.setState({ priceFilterData: [...priceFilterData]})
        break;

      case "L2H":
          priceFilterData.sort((item1, item2) => (
            item1.price - item2.price > 0) ? 1 : (item1.price - item2.price < 0) ? -1: 0);
            await this.setState({ priceFilterData: [...priceFilterData]})
        break;
      // from Mens / Womens Clothing
      case "High2Low":
          shopData.sort((item1, item2) => (
            item1.price - item2.price > 0) ? -1 : (item1.price - item2.price < 0) ? 1: 0);
            await this.setState({ shopData: shopData})
        break;

      case "Low2High":
          shopData.sort((item1, item2) => (
            item1.price - item2.price > 0 ? 1: (item1.price - item2.price < 0) ? -1: 0))
            await this.setState({ shopData: shopData })
        break;
      default:
        return;
        }
  }


handleFilterClick = async (value) => {
  let shopList = [...this.state.shopData]
  console.log("shopList from App", shopList)
  if (value === '25') {
    const under25 = shopList.filter((item) => item.price < 25)
    console.log("under25", under25)
    await this.setState({
      shopData: under25,
    });
    console.log("fullItemList", this.state.fullItemList)
  } else if (value === '50') {
    const under50 = shopList.filter((item) => item.price < 50)
    await this.setState({
      shopData: under50
    });
  } else if (value === '75') {
    const under75 = shopList.filter((item) => item.price < 75)
    await this.setState({
      shopData: under75
    });
  } else if (value === '100') {
    const under100 = shopList.filter((item) => item.price < 100)
    await this.setState({
      shopData: under100
    })
  } else {
    const under150 = shopList.filter((item) => item.price < 150)
    await this.setState({
      shopData: under150
    })
  }
}

 priceFilterRedirect = async (price) => {
    let data = [...WOMENS_SHOP_LIST, ...MENS_SHOP_LIST];
    if (price === 100) {
      const filteredData = data.filter((item)=> item.price < price)
      await this.setState({ 
        priceFilterData: filteredData,
        priceFilterTitle: "Under $100"
      });
      await this.setState({ selectedCategory: "FILTER"})
    } else if (price === 'sale') {
      const filteredData = data.filter((item) => item.title.includes('sale'))
      await this.setState({ 
        priceFilterData: filteredData,
        priceFilterTitle: "Sale"
      });
      await this.setState({ selectedCategory: "SALE"})
    } else {
      const filteredData = data.filter((item)=> item.price > price)
      await this.setState({ 
        priceFilterData: filteredData,
        priceFilterTitle: "Luxury Items",
      });
      await this.setState({ selectedCategory: "FILTER"})
    }
  }

unsubscribeFromAuth = null

componentDidMount() {
    let genderSessionStorage = JSON.parse(sessionStorage.getItem('gender'));
    let dataSessionStorage = JSON.parse(sessionStorage.getItem('data'));
    // sessionStorage.setItem('banner-info', JSON.stringify('false'))

    if (genderSessionStorage) {
      this.setState({ 
        gender: genderSessionStorage,
        shopData: dataSessionStorage
       })
    }
  
  // subscriber to listen to auth state change -- allots for OAuth sign in while component is mounted
  
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {

      const userRef = await createUserProfileDocument(userAuth);
      // onSnapShot is equivalent to onAuthStateChange -- built in method from firebase
      userRef.onSnapshot(snapShot => {
        // creates new obj with id and value of snapshot and sets it in state
        this.setState({ 
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
            // .data() is what returns our properties with data values stored in snapshot
          }
        });
      });
    } else { this.setState({currentUser: userAuth})}
  })
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {
  const { 
    viewPort, selectedCategory, selectedItem, filteredList, shopData, 
    priceFilterData, priceFilterTitle, gender, sections } = this.state;
    
    return (
      <>
        <Header 
          handleGenderUpdate={this.handleGenderUpdate} 
          handleClearStateClick={this.handleClearStateClick} 
          currentUser={this.state.currentUser} 
        />
        <div className="App">
        <Routes>
            {/* pathway for categories */}
            <Route exact path='/' element={
              <HomePage 
                categoryRedirect={this.categoryRedirect}
                onSelectedCategoryClick={this.handleSelectedCategoryClick}
                handleChangingSelectedItem={this.handleChangingSelectedItem}
                handleHomeClick={this.handleHomeClick}
                handleSortClick={this.handleSortClick}
                handleFilterClick={this.handleFilterClick}
                handleBackClick={this.handleBackClick}
                handeClearStateClick={this.handleClearStateClick}
                priceFilterRedirect={this.priceFilterRedirect}
                handleGenderUpdate={this.handleGenderUpdate}

                selectedCategory={selectedCategory}
                priceFilterData={priceFilterData}
                priceFilterTitle={priceFilterTitle}
                selectedItem={selectedItem}
                filteredList={filteredList}
                shopData={shopData}
              />} 
            />
            <Route exact path='/shop' element={
              <Directory 
                selectedCategory={selectedCategory}  
                sections={sections}
                categoryRedirect={this.categoryRedirect}
                gender={gender}
                handleGenderUpdate={this.handleGenderUpdate}
              />} 
            />
      {/* Categories */}
            <Route exact path='/shop/hats' element={<Hats handleHomeClick={this.handleHomeClick} />}/>
            <Route path='/shop/jackets' element={<Jackets handleHomeClick={this.handleHomeClick}/>}/>
            <Route path='/shop/sneakers' element={<Sneakers handleHomeClick={this.handleHomeClick}/>}/>
            <Route path='/shop/shirts' element={<Shirts handleHomeClick={this.handleHomeClick}/>}/>
            <Route path='/shop/sale' element={<Sale handleHomeClick={this.handleHomeClick}/>} />
      {/* Accessing Gender */}
            <Route exact path='/shop/mens' element={
              <ClothingController 
                categoryRedirect={this.categoryRedirect}
                onSelectedCategoryClick={this.handleSelectedCategoryClick}
                handleChangingSelectedItem={this.handleChangingSelectedItem}
                handleHomeClick={this.handleHomeClick}
                handleSortClick={this.handleSortClick}
                handleFilterClick={this.handleFilterClick}
                handleBackClick={this.handleBackClick}

                selectedCategory={selectedCategory}
                selectedItem={selectedItem}
                filteredList={filteredList}
                shopData={shopData}
                gender={gender}
              />}
            />
            <Route exact path='/shop/womens' element={
              <ClothingController 
                categoryRedirect={this.categoryRedirect}
                onSelectedCategoryClick={this.handleSelectedCategoryClick}
                handleChangingSelectedItem={this.handleChangingSelectedItem}
                handleHomeClick={this.handleHomeClick}
                handleSortClick={this.handleSortClick}
                handleFilterClick={this.handleFilterClick}
                handleBackClick={this.handleBackClick}

                selectedCategory={selectedCategory}
                selectedItem={selectedItem}
                filteredList={filteredList}
                shopData={shopData}
                gender={gender}
              />}
            />
      {/* Accessing From Categories */}
            <Route path='/shop/hats/:id'  element={<ItemDetails />} />
            <Route path='/shop/sneakers/:id'  element={<ItemDetails />} /> 
            <Route path='/shop/shirts/:id'  element={<ItemDetails />} />
            <Route path='/shop/jackets/:id'  element={<ItemDetails />} /> 
            <Route path='/shop/sale/:id'  element={<ItemDetails />} />
            <Route path='/shop/mens/:id'  element={<ItemDetails />} /> 
            <Route path='/shop/womens/:id'  element={<ItemDetails />} />

      {/* Accessing from ClothingController */}
            <Route path='/shop/mens/hats/:id'  element={<ItemDetails />} />
            <Route path='/shop/mens/sneakers/:id'  element={<ItemDetails />} /> 
            <Route path='/shop/mens/shirts/:id'  element={<ItemDetails />} />
            <Route path='/shop/mens/jackets/:id'  element={<ItemDetails />} /> 
            <Route path='/shop/mens/sale/:id'  element={<ItemDetails />} /> 

            <Route path='/shop/womens/hats/:id'  element={<ItemDetails />} />
            <Route path='/shop/womens/sneakers/:id'  element={<ItemDetails />} /> 
            <Route path='/shop/womens/shirts/:id'  element={<ItemDetails />} />
            <Route path='/shop/womens/jackets/:id'  element={<ItemDetails />} /> 
            <Route path='/shop/womens/sale/:id'  element={<ItemDetails />} /> 

            <Route path="/pageNotAvailable" element={<UnderConstruction />} />
            <Route path='/returnpolicy' element={<ReturnPolicyPage />} />
            <Route path='login'  element={<SignInAndSignUpPage />}></Route>
            <Route path='/shop' element={<ShopPage/>}></Route>
            <Route path='success' element={<PaymentCompletePage />}></Route>
            <Route path='cancel' element={<PaymentFailedPage />}></Route>
            <Route path='contact' element={<ContactPage viewPort={viewPort} />}></Route>

            <Route path="*" component={<NotFound />} />
        </Routes>
        </div>
      </>
    )
  }
};

export default App;

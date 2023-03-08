import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Jackets from '../src/components/shop/category/jackets/Jackets.jsx';
import Hats from './components/shop/category/hats/Hats.jsx';
import Shirts from './components/shop/category/shirts/Shirts.jsx';
import Sneakers from './components/shop/category/sneakers/Sneakers.jsx';
import Sale from './components/shop/category/sale/Sale.jsx';
import MensClothing from './components/shop/gender/men/MensClothing.jsx';
import WomensClothing from './components/shop/gender/women/WomensClothing.jsx';
import SearchedItemDetails from './pages/itemDetailPage/SearchedItemDetails.jsx';
import ItemDetails from './pages/itemDetailPage/itemDetails/ItemDetails.jsx'
import { MENS_SHOP_LIST, WOMENS_SHOP_LIST } from './data';
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

import { auth, createUserProfileDocument } from './firebase/Firebase.utils';

// import CartProvider from './components/context/ShoppingCartContext';
// import UnderConstruction from './pages/underConstruction/UnderConstruction';
// import ReturnPolicyPage from './pages/returnPolicyPage/ReturnPolicyPage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      currentView: null,
      selectedItem: null,
      gender: "",
      priceFilterTitle: "",
      selectedCategory: "",
      shopData: [],
      filteredList: [],
      priceFilterData: [],
      filteredItemList: [],
      viewPort: window.innerWidth,
    }
}

  handleGenderUpdate = async (gender) => {
    gender === 'MENS' ?
      await this.setState({ 
        shopData: MENS_SHOP_LIST,
        gender: gender,
        selectedCategory: "",
        selectedItem: null
      })
    :
      await this.setState({ 
        shopData: WOMENS_SHOP_LIST,
        gender: gender,
        selectedCategory: "",
        selectedItem: null,
      })
  }

  // sets the correct dataset in state (mens / womens / all)
  handleSetData = async () => {
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
    await this.setState({ shopData: [...WOMENS_SHOP_LIST, ...MENS_SHOP_LIST]})
  }

categoryRedirect = async (clickedCategoryTitle) => {
  // clear the state for what is to be displayed
    await this.setState({ shopData: [] })
    // sets the correct dataset in state (mens / womens / all)
    await this.handleSetData()
    console.log("APP.js# ShopDATA", this.state.shopData)
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
  window.location.assign('/')
}

// handleBackClick = async () => {
//   // let selectedItem = this.state.selectedItem
// if (this.state.selectedItem !== null) {
//   const savedState = this.state.selectedCategory;
//   this.setState({ 
//     selectedItem: "",
//     selectedCategory: savedState,
//   })
//   // await this.setState({ selectedItem: ""})
// } else if (this.state.selectedCategory !== null) {
//     // await this.setState({ selectedCategory: ""})
//     console.log("SelectedItem:", this.state.selectedItem);
//     console.log("SelectedCategory:", this.state.selectedCategory)
//   }
  // {
  //   selectedItem ?
  //   this.setState({ selectedItem: "" })
  //   :
  //   this.setState({
  //     selectedCategory: "",
  //   })
  // }
// }

handleChangingSelectedItem = async (id) => {
  const selectedItem = id;
  console.log("SelectedItem App.js:", selectedItem)
  await this.setState({
    selectedItem: selectedItem
  })
  await console.log("(Write function in itemList to redirect to itemDetails) -- SelectedItem:", this.state.selectedItem)
}


handleClearStateClick = (text) => {
  if (text === "HOME") {
      this.setState({
        selectedItem: null,
        selectedCategory: "", 
        filteredList: [],
        gender: null,
      })
      window.location.assign('/');
      // window.location.reload();
  } else {
    this.setState({
      selectedItem: null,
      selectedCategory: "",
      filteredList: [],
      gender: null,
    })
  console.log("HandleClear", )
  }
}

handleSortClick = async (term) => {
 console.log("BEFORE priceFilterData:", this.state.priceFilterData)
 console.log("BEFORE shopData:", this.state.shopData)
    const priceFilterData = [...this.state.priceFilterData];
    const shopData = [...this.state.shopData];
    this.setState({ 
      priceFilterData: [],
      shopData: [],
    })
    
    console.log("AFTER priceFilterData:", this.state.priceFilterData)
    console.log("AFTER shopData", this.state.shopData)

    switch(term) {
      // from homePagelayout
      case "H2L":
        priceFilterData.sort((item1, item2) => 
        (item1.price - item2.price > 0) ? -1 : (item1.price - item2.price < 0) ? 1: 0);
        await this.setState({ priceFilterData: [...priceFilterData]})
      break;

      case "L2H":
        priceFilterData.sort((item1, item2) => 
        (item1.price - item2.price > 0) ? 1 : (item1.price - item2.price < 0) ? -1: 0);
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
  // let shopList = [...MENS_SHOP_LIST];
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
  // console.log("data", data)
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
    // console.log("AfterStateUpdate:", this.state.priceFilterData)

  }

unsubscribeFromAuth = null

componentDidMount() {
  // console.log("componentDidMount Hit")
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
        // console.log(this.state);
      });
      
    } else { 
      this.setState({currentUser: userAuth})
      
    }
    // createUserProfileDocument(userAuth);
    // this.setState({ currentUser: user });
    // console.log("Welcome", userAuth.displayName);
  })
}
componentWillUnmount() {
  this.unsubscribeFromAuth();
}


  render() {
  const { viewPort, selectedCategory, selectedItem, filteredList, shopData, priceFilterData, priceFilterTitle} = this.state;
    return (
      <>
        <Header handleGenderUpdate={this.handleGenderUpdate} handleClearStateClick={this.handleClearStateClick} currentUser={this.state.currentUser} />
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
                priceFilterRedirect={this.priceFilterRedirect}

                selectedCategory={selectedCategory}
                priceFilterData={priceFilterData}
                priceFilterTitle={priceFilterTitle}
                selectedItem={selectedItem}
                filteredList={filteredList}
                shopData={shopData}
              />} 
            />

            <Route path='/shop/hats' element={<Hats handleHomeClick={this.handleHomeClick} />}/>
            <Route path='/shop/jackets' element={<Jackets handleHomeClick={this.handleHomeClick}/>}/>
            <Route path='/shop/sneakers' element={<Sneakers handleHomeClick={this.handleHomeClick}/>}/>
            <Route path='/shop/shirts' element={<Shirts handleHomeClick={this.handleHomeClick}/>}/>
            <Route path='/shop/sale' element={<Sale handleHomeClick={this.handleHomeClick}/>} />

            <Route exact path='/shop/mens' element={
              <MensClothing 
                categoryRedirect={this.categoryRedirect}
                onSelectedCategoryClick={this.handleSelectedCategoryClick}
                handleChangingSelectedItem={this.handleChangingSelectedItem}
                handleHomeClick={this.handleHomeClick}
                handleSortClick={this.handleSortClick}
                handleFilterClick={this.handleFilterClick}
                handleBackClick={this.handleBackClick}

                selectedCategory={selectedCategory}
                priceFilterData={priceFilterData}
                priceFilterTitle={priceFilterTitle}
                selectedItem={selectedItem}
                filteredList={filteredList}
                shopData={shopData}
                // mensItemList={mensItemList}
              />}
            />
            <Route exact path='/shop/womens' element={
              <WomensClothing
                categoryRedirect={this.categoryRedirect}
                onSelectedCategoryClick={this.handleSelectedCategoryClick}
                handleChangingSelectedItem={this.handleChangingSelectedItem}
                handleHomeClick={this.handleHomeClick}
                handleSortClick={this.handleSortClick}
                handleFilterClick={this.handleFilterClick}
                handleBackClick={this.handleBackClick}

                selectedCategory={selectedCategory}
                priceFilterData={priceFilterData}
                priceFilterTitle={priceFilterTitle}
                selectedItem={selectedItem}
                filteredList={filteredList}
                shopData={shopData}
                // womensItemList={womensItemList}
              />
            }/>

            <Route path="/pageNotAvailable" element={<UnderConstruction />} />
            <Route path='/returnpolicy' element={<ReturnPolicyPage />} />
            <Route path='login'  element={<SignInAndSignUpPage />}></Route>
            <Route path='/shop' element={<ShopPage/>}></Route>
            <Route path='success' element={<PaymentCompletePage />}></Route>
            <Route path='cancel' element={<PaymentFailedPage />}></Route>
            <Route path='contact' element={<ContactPage viewPort={viewPort} />}></Route>

            {/* pathway for itemDetails */}
            <Route path='/shop/hats/:id' element={<SearchedItemDetails />} />
            <Route path='/shop/sneakers/:id' element={<SearchedItemDetails />} /> 
            <Route path='/shop/shirts/:id' element={<SearchedItemDetails />} />
            <Route path='/shop/jackets/:id' element={<SearchedItemDetails />} /> 
            <Route path='/shop/mens/:id' element={<ItemDetails />} /> 
            <Route path='/shop/womens/:id' element={<ItemDetails />} />

            <Route path='/shop/mens/hats/:id' element={<ItemDetails />} />
            <Route path='/shop/mens/sneakers/:id' element={<ItemDetails />} /> 
            <Route path='/shop/mens/shirts/:id' element={<ItemDetails />} />
            <Route path='/shop/mens/jackets/:id' element={<ItemDetails />} /> 
            <Route path='/shop/mens/sale/:id' element={<ItemDetails />} /> 

            <Route path='/shop/womens/hats/:id' element={<ItemDetails />} />
            <Route path='/shop/womens/sneakers/:id' element={<ItemDetails />} /> 
            <Route path='/shop/womens/shirts/:id' element={<ItemDetails />} />
            <Route path='/shop/womens/jackets/:id' element={<ItemDetails />} /> 
            <Route path='/shop/womens/sale/:id' element={<ItemDetails />} /> 

            <Route path="*" component={<NotFound />} />
        </Routes>
        </div>
      </>
    )
  }
};

export default App;

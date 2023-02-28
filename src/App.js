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
    // to update us on when authentication state changes
    this.state = {
      currentUser: null,
      currentView: null,
      viewPort: window.innerWidth,
      // mensClothing REFACTORED
      selectedItem: null,
      // mensItemList:  MENS_SHOP_LIST ,
      // womensItemList: WOMENS_SHOP_LIST,
      filteredItemList: [],
      shopData: [],
      selectedCategory: "",
      filteredList: [],
      gender: "",
      // mensFilteredList: [],
      // womensFilteredList: [],
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
  // console.log("Gender State:", this.state.gender)
  // console.log("ShopData", this.state.shopData)
}

handleSetData = async () => {
  // await this.setState({ gender: ""});
  this.state.gender === 'MENS' ?
  await  this.setState({ 
    // shopData: [],
    shopData: MENS_SHOP_LIST 
  })
  :
  await  this.setState({ shopData: WOMENS_SHOP_LIST })
}

categoryRedirect = async (clickedCategoryTitle) => {
    await this.setState({ shopData: [] })
    await this.handleSetData()
    console.log("ShopDATA", this.state.shopData)

    const categoryToAssign = clickedCategoryTitle
    const appFilteredList = this.state.shopData.filter(item => item.title.includes(clickedCategoryTitle.toLowerCase()))
    await this.setState({
      selectedCategory: categoryToAssign,
    })
    await this.setState({ filteredList: appFilteredList })
    // await this.setState({ mensFilteredList: mensTempFilteredList})
    console.log("after state update", this.state.filteredList)
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
    categoryToAssign: null,
  })
  window.location.assign('#/')
}

handleBackClick = () => {
  this.setState({
    selectedCategory: "",
  })
}

handleChangingSelectedItem = (id) => {
  const selectedItem = id;
  // console.log(selectedItem)
  this.setState({
    selectedItem: selectedItem
  })
}


handleClearStateClick = () => {
  console.log("HandleClear", )
  this.setState({
    selectedItem: null,
    selectedCategory: "", 
    filteredList: [],
    gender: null,
  })
}

handleSortClick = async (term) => {
  // let shopList = [...this.state.mensItemList]
  let tempSortList = [...this.state.shopData]
  // await this.setState({ fullItemList: [] })
  console.log("tempSortList", tempSortList)

  switch(term) {
    case 'H2L':
      tempSortList.sort((item1, item2) => 
      (item1.price - item2.price > 0) ? -1 : (item1.price - item2.price < 0) ? 1: 0);
      console.log("tempSortList", tempSortList[0].price)
      await this.setState({
        shopData: [...tempSortList]
      })
      break;
    case "L2H":
      tempSortList.sort((item1, item2) => 
        (item1.price - item2.price > 0) ? 1 : (item1.price - item2.price < 0) ? -1: 0);
      console.log("tempSortList", tempSortList.price)
      await this.setState({
        shopData: [...tempSortList]
      });
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
  const { viewPort, selectedCategory, selectedItem, filteredList, shopData, } = this.state;
    return (
      <>
        <Header handleGenderUpdate={this.handleGenderUpdate} handleClearStateClick={this.handleClearStateClick} currentUser={this.state.currentUser} />
        <div className="App">
        <Routes>
            {/* pathway for categories */}
            <Route exact path='/' element={<HomePage />} />

            <Route path='/shop/hats' element={<Hats/>}/>
            <Route path='/shop/jackets' element={<Jackets />}/>
            <Route path='/shop/sneakers' element={<Sneakers/>}/>
            <Route path='/shop/shirts' element={<Shirts/>}/>
            <Route path='/shop/sale' element={<Sale />} />

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
            <Route path='/shop/mens/:id' element={<SearchedItemDetails />} /> 
            <Route path='/shop/womens/:id' element={<SearchedItemDetails />} />
            <Route path='/shop/jackets/:id' element={<SearchedItemDetails />} /> 

            <Route path="*" component={<NotFound />} />
        </Routes>
        </div>
      </>
    )
  }
};

export default App;

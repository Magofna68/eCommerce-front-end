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
import { Header } from './components/utility/header/Header.jsx';
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
  // const { currentUser } = this.state;
  // let path = '/shop/'.concat(title.toLowerCase()).concat('/', id)
  const { viewPort } = this.state;
    return (
      <>
        <Header currentUser={this.state.currentUser}/>
        <div className="App">
        <Routes>
            {/* pathway for categories */}
            <Route exact path='/' element={<HomePage />} />

            <Route path='/shop/hats' element={<Hats/>}/>
            <Route path='/shop/jackets' element={<Jackets />}/>
            <Route path='/shop/sneakers' element={<Sneakers/>}/>
            <Route path='/shop/shirts' element={<Shirts/>}/>
            <Route path='/shop/sale' element={<Sale />} />

            <Route exact path='/shop/mens' element={<MensClothing />}/>
            <Route exact path='/shop/womens' element={<WomensClothing/>}/>

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

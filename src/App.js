import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Route, Routes,} from 'react-router-dom';

import './App.scss';
import Jackets from './components/shop/category/jackets/Jackets';
import Hats from './components/shop/category/hats/Hats';
import Sneakers from './components/shop/category/sneakers/Sneakers';
import MensClothing from './components/shop/gender/men/MensClothing';
import WomensClothing from './components/shop/gender/women/WomensClothing';
import ItemDetailPage from './pages/itemDetailPage/ItemDetailPage';
import {Header} from './components/utility/header/Header';
import NotFound from './pages/notFound/NotFound';
import HomePage from './pages/homePage/HomePage.jsx';

import { auth, createUserProfileDocument } from './firebase/Firebase.utils';

import CartProvider from './components/context/ShoppingCartContext';

class App extends React.Component {
  constructor() {
    super();
    // to update us on when authentication state changes
    this.state = {
      currentUser: null,
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
    return (
      <CartProvider>
        <Router basename='/'>
          <div className="App">
            <Header currentUser={this.state.currentUser}/>
          </div>
          <Routes>
            {/* pathways for categories */}
            <Route path='shop/jackets' element={<Jackets />}/>
            <Route path='shop/sneakers' element={<Sneakers/>}/>
            <Route path='shop/mens' element={<MensClothing />}/>
            <Route path='shop/womens' element={<WomensClothing/>}/>
            <Route path='shop/hats' element={<Hats/>}/>

            {/* pathway for itemDetails */}
            <Route path='shop/jackets/:id' element={<ItemDetailPage />} /> 
            <Route path='shop/hats/:id' element={<ItemDetailPage />} /> 
            <Route path='shop/sneakers/:id' element={<ItemDetailPage />} /> 
            <Route path='shop/mens/hats/:id' element={<ItemDetailPage />} /> 
            <Route path='shop/womens/:id' element={<ItemDetailPage />} /> 
            {/* <Route path='shop/womens/womens' element={<HomePage />} /> */}
            <Route element={<NotFound />} />
          </Routes>
        </Router>
      </CartProvider>
    )
  }
};

export default App;

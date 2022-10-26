import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Jackets from './components/shop/category/jackets/Jackets';
import Hats from './components/shop/category/hats/Hats';
import Sneakers from './components/shop/category/sneakers/Sneakers';
import MensClothing from './components/shop/gender/men/MensClothing';
import WomensClothing from './components/shop/gender/women/WomensClothing';
import {Header} from './components/utility/header/Header';

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
  console.log("componentDidMount Hit")
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
      this.setState({currentUser: userAuth});
      // history.push('/home');
    }
    // createUserProfileDocument(userAuth);
    // this.setState({ currentUser: user });
    console.log("Welcome", userAuth.displayName);
  })
}
componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {

    return (
      <CartProvider>
        <Router>
          <div className="App">
            <Header currentUser={this.state.currentUser}/>
          </div>
          <Routes>
            <Route path='/shop/jackets' element={<Jackets />}/>
            <Route path='/shop/sneakers' element={<Sneakers/>}/>
            <Route path='/shop/mens' element={<MensClothing />}/>
            <Route path='/shop/womens' element={<WomensClothing/>}/>
            <Route path='/shop/hats' element={<Hats/>}/>
            {/* <Route path='/shop/:Rout */}
          </Routes>
        </Router>
      </CartProvider>
    )
  }
};

export default App;

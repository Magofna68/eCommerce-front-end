import React from 'react'
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/homePage/HomePage'
import Jackets from './components/shop/category/jackets/Jackets';
import Hats from './components/shop/category/hats/Hats';
import Sneakers from './components/shop/category/sneakers/Sneakers';
import MensClothing from './components/shop/gender/men/MensClothing';
import WomensClothing from './components/shop/gender/women/WomensClothing';
import SearchedItemDetails from './pages/itemDetailPage/SearchedItemDetails';
import ItemDetails from './pages/itemDetailPage/itemDetails/ItemDetails'
import { Header } from './components/utility/header/Header';
import NotFound from './pages/notFound/NotFound';
import SignInAndSignUpPage from '../../pages/signinPage/Sign-in-sign-up';
import ContactPage from '../../pages/contactPage/ContactPage';
import ShopPage from '../../pages/shopPage/ShopPage';
import PaymentCompletePage from '../../pages/paymentCompletePage/PaymentCompletePage';
import PaymentFailedPage from '../../pages/paymentCompletePage/PaymentFailedPage';

import {HashRouter } from 'react-router-dom';

const Routes = () => (
  // <HashRouter hashType="">
    <Routes>
      <Switch>
        {/* pathway for categories */}
        <Route exact path='/' component={<HomePage />} />
        <Route path='/shop/jackets' component={<Jackets />}/>
        <Route path='/shop/sneakers' component={<Sneakers/>}/>
        <Route exact path='/shop/mens' component={<MensClothing />}/>
        <Route exact path='/shop/womens' component={<WomensClothing/>}/>
        <Route path='/shop/hats' component={<Hats/>}/>
        <Route path="/pageNotAvailable" component={<UnderConstruction />} />
        <Route path='/returnpolicy' component={<ReturnPolicyPage />} />
        <Route path='login'  component={<SignInAndSignUpPage />}></Route>
        <Route path='/shop' component={<ShopPage/>}></Route>
        <Route path='success' component={<PaymentCompletePage />}></Route>
        <Route path='cancel' component={<PaymentFailedPage />}></Route>
        <Route path='contact' component={<ContactPage />}></Route>
        <Route component={<NotFound />} />

        {/* pathway for itemDetails */}
        <Route to='shop/hats/:id' component={<SearchedItemDetails />} />
        <Route path='/shop/sneakers/:id' element={<ItemDetailPage />} /> 
        <Route path='shop/shirts/:id' element={<ItemDetailPage />} />
        <Route path='shop/mens/:id' element={<ItemDetailPage />} /> 
        <Route path='shop/womens/:id' element={<ItemDetailPage />} />

      </Switch>
    </Routes>
  // </HashRouter>
)

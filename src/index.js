import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './components/footer/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';
import CartProvider from './components/context/ShoppingCartContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter hashType="slash" basename='/'>
      <CartProvider>
        <App />
        <Footer />
      </CartProvider>
    </HashRouter>
);

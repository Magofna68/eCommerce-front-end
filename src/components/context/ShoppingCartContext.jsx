import React, { createContext, useState, useEffect } from 'react';
import { getProductData } from '../../data.jsx';
import { Notyf } from 'notyf';

export const ShoppingCartContext = createContext({
  items: [],
  // dont define functions w/n context -- code below to pass to provider: 
  getProductQuantity: () => {},
  addOneItemToCart: () => {},
  removeOneItemFromCart: () => {},
  deleteItemFromCart: () => {},
  getTotalCost: () => {},
  editItemSizeInCart: () => {}
});

export function CartProvider({children}) {
  // const [cartProducts, setCartProducts ] = useState([cartFromSessionStorage]);
  const [cartProducts, setCartProducts ] = useState([]);
  
  useEffect(() => {
    let cartFromSessionStorage = JSON.parse(sessionStorage.getItem('cartProducts'));
    if (cartFromSessionStorage) {
      setCartProducts(cartFromSessionStorage)
    }
  }, [])

  
  useEffect(() => {
    sessionStorage.setItem('cartProducts', JSON.stringify(cartProducts))
  }, [cartProducts])
  

  const notyf = new Notyf();

  function showSuccessAlert(string) {
    notyf.success({
      message: string,
      duration: 5000,
      dismissible: true,
    })
  }

  function showErrorAlert(string) {
    notyf.error({
      message: string,
      duration: 5000,
      dismissible: true,
    })
  }
  
  function getProductQuantity(id) {
   const quantity = cartProducts.find(product => product.id === id)?.quantity

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }


  function addOneItemToCart(id, name, price, img, value) {
    const quantity = getProductQuantity(id);
    
    if (quantity === 0) {  //if product is not in cart
      showSuccessAlert("Added To Cart")
      setCartProducts(
        [
          ...cartProducts, // copy cart objects
          {
            id: id,
            name: name,
            price: price,
            img: img,
            size: value,
            quantity: 1    // add new item to cart w/ quantity of 1
          }
        ]
      )
    } else {
      setCartProducts(
        cartProducts.map(
          product => product.id === id ?      // turnary: Does id match?
          {...product, quantity: product.quantity +1}  // Yes - invoke
          :                                                 // or
          product                                     // No -- leave product as is
        )
      )
      showSuccessAlert("Added To Cart")
    }
  }

 function editItemSizeInCart (id, value) {
   notyf.success("Size Updated")
     setCartProducts(
        cartProducts.map(
          product => product.id === id ?
          { ...product, size: value}
          :
          showErrorAlert("Unable to Update Size"),
          // console.log("Was not able to update sizing")
          )
      )
    console.log("cartProducts: ", cartProducts)
  }

  function deleteItemFromCart(id) {
    showErrorAlert("Item Deleted")
    setCartProducts(
      cartProducts => cartProducts.filter(currentProduct => {
        return currentProduct.id !== id;
      })
    )
  }

  function removeOneItemFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteItemFromCart(id);
    } else {
      showErrorAlert("Item Removed")
      setCartProducts(
        cartProducts.map(
          product => product.id === id ?
          {...product, quantity: product.quantity - 1}
          : 
          product
        )
      )
    }
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      let priceArray =[];
      priceArray.push(cartItem.price);
      // console.log(priceArray.length, "PRODUCT DATA");
      totalCost += (priceArray * cartItem.quantity);
      console.log(totalCost, "Total Cost");
      return totalCost
    });
    return Number(totalCost).toFixed(2);
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneItemToCart,
    removeOneItemFromCart,
    deleteItemFromCart,
    getTotalCost,
    editItemSizeInCart
  }

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default CartProvider;
// context (cart, addToCart, removeFromCart)
// Provider -> gives React app access to all things in context
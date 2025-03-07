import { createContext, useEffect,  } from "react";
import { food_list } from "../assets/assets";
import React, { useState }from 'react'


export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {

  const [cartItems,setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  useEffect(()=>{
    console.log(cartItems);
  },[cartItems])

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  )

}
export default StoreContextProvider


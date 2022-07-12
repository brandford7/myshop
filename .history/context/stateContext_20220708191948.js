import React, { useState, useEffect, createContext, useContext } from "react";
import toast from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  const [cartItems, setCartItems] = useState();

  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  const increaseQty = () => {
   setQty((prevQty)=>prevQty + 1);
    };
    
    const decreaseQty = () => {
        prevQty 
      setQty((prevQty) => prevQty - 1);
    };

  return (
    <Context.Provider
      value={{ showCart, totalPrice, totalQuantities, cartItems }}
    >
      {children}
    </Context.Provider>
  );
};

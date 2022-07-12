import React, { useState, useEffect, createContext, useContext } from "react";
import toast from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  const [cartItems, setCartItems] = useState();

  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  return (
    <Context.Provider
      value={{ showCart, totalPrice, totalQuantities, cartItems }}
    >
      {children}
    </Context.Provider>
  );
};

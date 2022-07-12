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
    setQty((prevQty) => prevQty + 1);
  };

  const decreaseQty = () => {
    if (prevQty - 1 < 1) return 1;
    setQty((prevQty) => prevQty - 1);
  };

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    if (checkProductInCart) {
        setTotalPrice((prevTotalPrice) => prevTotalPrice * quantity);
        
    }
  };

  return (
    <Context.Provider
      value={{
        showCart,
        totalPrice,
        totalQuantities,
        cartItems,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => {
  useContext(context);
};

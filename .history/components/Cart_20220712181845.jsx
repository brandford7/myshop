import Link from "next/link";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import {
  AiOutlineLeft,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart } =
    useStateContext();

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button className="cart-heading" onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className='heading'> Your Cart</span>
          <span className='cart-num-items'>({totalQuantities} items)</span>
        </button>
        {cart.length < 1 && <div> </div>}
      </div>
    </div>
  );
};

export default Cart;

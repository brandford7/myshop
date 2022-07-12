import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
Cart

const NavBar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">My Shop</Link>
      </p>
      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
    </div>
  );
};

export default NavBar;

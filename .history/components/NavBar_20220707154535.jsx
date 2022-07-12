import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">My Shop</Link>
      </p>
      <button type="button" className="cart-icon">
        <AiOutlineShopping />
        <span className="cart-ite"></span>
      </button>
    </div>
  );
};

export default NavBar;

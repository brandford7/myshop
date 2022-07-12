import Link from "next/link";
import React from "react";
import { AiOutlineShoppig } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">My Shop</Link>
      </p>
      <button type="button" className='cart-icon' ><AiOutlineShoppig</button>
    </div>
  );
};

export default NavBar;

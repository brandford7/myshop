import Link from "next/link";
import React from "react";
import { AiOutlineShoppig } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <p className='logo'>
        <Link href="/"></Link>
      </p>
    </div>
  );
};

export default NavBar;

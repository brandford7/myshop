import React from "react";
import Head from "next/head";
import NavBar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Head>
        <title>My Shop</title>
      </Head>
      <header>
        <NavBar />
      </header>
    </div>
  );
};

export default Layout;

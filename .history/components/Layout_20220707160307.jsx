import React from "react";
import Head from "next/head";
import NavBar from "./Navar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>My Shop</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

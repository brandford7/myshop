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
      <main className="main-container">main content</main>
      <footer><Footer/</footer>
    </div>
  );
};

export default Layout;

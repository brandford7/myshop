import React from "react";
import { client } from "../lib/client";

export default function Home() {
  return (
    <>
      Hero Banner
      <div>
        <h2 className="products-heading">Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {["product1", "product2"].map((product) => (
          <div key='index'>product</div>
        ))}
      </div>
      Footer
    </>
  );
}

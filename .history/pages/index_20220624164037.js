import React from 'react'
export default function Home() {
  return (
    <>
      Hero Banner
      <div>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div>
        {["product1", "product2"].map((product) => (
          <div>product</div>
        ))}
      </div>
    </>
  );
}

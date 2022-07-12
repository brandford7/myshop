/* eslint-disable @next/next/no-img-element */
import React from "react";
import { urlFor, client } from "../../lib/client";

const ProductDetails = () => {
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export const getStaticProps = async ({params:{slug}}) => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

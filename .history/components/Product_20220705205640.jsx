import React from "react";
import { urlFor } from "../lib/client";
import Link from "next/link";

const Product = ({ product: { image, slug, price, name } }) => {
  return (
    <div>
      <Link href={`products/${slug.current}`}>
        <div><img src={urlFor()} /></div>
      </Link>
    </div>
  );
};

export default Product;

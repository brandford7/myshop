import React from "react";
import { urlFor } from "../lib/client";
import Link from "next/link";
import Image from "next/image";


const Product = ({ product: { image, slug, price, name } }) => {
  return (
    <div>
      <Link href={`products/${slug.current}`}>
        <div>
          
          <Image
            src={urlFor(image && image[0])} alt='p'
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className='product-price'>{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;

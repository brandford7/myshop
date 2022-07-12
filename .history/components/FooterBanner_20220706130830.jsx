import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const FooterBanner = ({ footerBanner:{discount,saleTime,largeText1,largeText2,smallText,midText,product,buttonText,image} }) => {
  return (
    <>
      <div className="footer-banner-container">
        <div className="banner-desc">
          <div className="left">
            <p>{discount}</p>
            <h3>{largeText1}</h3>
            <h3>{largeText2}</h3>
            <p>{saleTime}</p>
          </div>
          <div className="right"><p>{ s}</p></div>
        </div>
      </div>
    </>
  );
};

export default FooterBanner;
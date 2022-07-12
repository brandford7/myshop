import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const FooterBanner = ({ footerBanner }) => {
  return (
    <>
      <div className="footer-banner-container">
        <div className="banner-desc">
          <div className="left">
            <p>{footerBanner.discount}</p>
            <h3>{footerBanner.largeText1}</h3>
            <h3>{footerBanner.largeText2}</h3>
            <p>{footerBanner.saleTime}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBanner;

import Link from "next/link";
import { urlFor } from "../../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <>
      <div className="hero-banner-container">
        <div>
          <p className="beats-solo">{heroBanner.SmallText}</p>

          <h3>{heroBanner.MidText}</h3>
          <h1>{heroBanner.largeText1}</h1>
          <img
            src={urlFor(heroBanner.image)}
            alt="headphones"
            className="hero-banner-image"
          />
          <div>
            {" "}
            <Link href={`/product/${heroBanner.product}`}>
              <button type="button" >
                {heroBanner.ButtonText}
              </button>
            </Link>
            <div className="desc">
              <h5>Description</h5>
              <p>{heroBanner.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;

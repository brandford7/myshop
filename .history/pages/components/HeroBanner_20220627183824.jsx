import Link from "next/link";
url

const HeroBanner = ({ heroBanner }) => {
  return (
    <>
      <div className="hero-banner-container">
        <div>
          <p className="beats-solo">{heroBanner.SmallText}</p>
        
                  <h3>{heroBanner.MidText}</h3>
                  <h1>{heroBanner.LargeText1}</h1>
        <img src="" alt="headphones" className="hero-banner-image" />
       <div> <Link href="/product/id ">
          <button type="button" className="">
            {heroBanner.ButtonText}
          </button>
        </Link>
        <div className="desc">
          <h5>description</h5>
          <p>Description</p>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;

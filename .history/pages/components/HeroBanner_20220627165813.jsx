import Link from "next/link";

const HeroBanner = () => {
  return (
    <>
      <div className="hero-banner-container">
        <div>
          <p className="beats-solo">HeroBanner</p>
        </div>
        <h3>Mid Text</h3>
        <img src="" alt="headphones" className="hero-banner-image" />
        <Link href="/product/id ">
          <button type="button" className="">
            Button Text
          </button>
              </Link>
              <div clas></div>
      </div>
    </>
  );
};

export default HeroBanner;
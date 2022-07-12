import Link from "next/link";

const HeroBanner = ({heroBanner}) => {
  return (
    <>
      <div className="hero-banner-container">
        <div>
          <p className="beats-solo">HeroBanner.smallText</p>
        </div>
        <h3>Mid Text</h3>
        <img src="" alt="headphones" className="hero-banner-image" />
        <Link href="/product/id ">
          <button type="button" className="">
            Button Text
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

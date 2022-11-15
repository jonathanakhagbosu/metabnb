import React from "react";
import "./discover.css";
import discover from "../../assets/discover_img.png";

const Discover = () => {
  return (
    <>
      <section id="discover-section">
        <div className="container discover__container">
          <div className="discover-text">
            <h3>Metabnb NFTs</h3>
            <p>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button className="discover-btn">Learn more</button>
          </div>

          <img src={discover} alt="discover" className="discover-img" />
        </div>
      </section>
    </>
  );
};

export default Discover;

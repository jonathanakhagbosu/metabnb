import React from "react";
import "./herosection.css";
import hero from "../../assets/hero_img.png";

const Herosection = () => {
  return (
    <section id="hero-section">
      <div className="container hero__container">
        <div className="hero-text">
          <h1>
            Rent a{" "}
            <span style={{ color: "var(--gradient-color)", fontWeight: 700 }}>
              Place
            </span>{" "}
            away from{" "}
            <span style={{ color: "var(--gradient-color)", fontWeight: 700 }}>
              Home
            </span>{" "}
            in the{" "}
            <span style={{ color: "var(--gradient-color)", fontWeight: 700 }}>
              {" "}
              Metaverse
            </span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <form className="hero-form">
            <input type="text" placeholder="Search for location" />
            <button className="hero-btn">Search</button>
          </form>
        </div>

        <img src={hero} alt="hero_img" className="hero-img" />
      </div>
    </section>
  );
};

export default Herosection;

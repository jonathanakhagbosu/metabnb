import React from "react";
import mbtoken from "../../assets/mbtoken.png";
import metamask from "../../assets/metamask.png";
import opensea from "../../assets/opensea.png";
import "./partners.css";

const Partners = () => {
  return (
    <section id="partners__section">
      <div className="container partners__container">
        <img src={mbtoken} alt="mbtoken" />
        <img src={metamask} alt="metamask" />
        <img src={opensea} alt="opensea" />
      </div>
    </section>
  );
};

export default Partners;

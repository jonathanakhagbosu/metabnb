import React from "react";
import logo_white from "../../assets/logo_white.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer-icons">
          <img src={logo_white} alt="logo" className="footer-logo" />
          <div className="socials">
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div className="header">
            <h5>Community</h5>
          </div>
          <div className="footer-links">
            <a href="#">NFT</a>
            <a href="#">Tokens</a>
            <a href="#">Landlords</a>
            <a href="#">Discord</a>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div className="header">
            <h5>Places</h5>
          </div>
          <div className="footer-links">
            <a href="#">Castle</a>
            <a href="#">Farms</a>
            <a href="#">Beach</a>
            <a href="#">Learn more</a>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div className="header">
            <h5>About us</h5>
          </div>
          <div className="footer-links">
            <a href="#">Road map</a>
            <a href="#">Creators</a>
            <a href="#">Career</a>
            <a href="#">Contact us</a>
          </div>
        </div>
      </div>

      <p className="container copyright" style={{ marginTop: "50px" }}>
        © 2022 Metabnb
      </p>
    </footer>
  );
};

export default Footer;

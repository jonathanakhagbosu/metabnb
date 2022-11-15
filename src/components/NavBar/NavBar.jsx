import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png";
import hamburger from "../../assets/icon-hamburger.svg";
import exit from "../../assets/exit.png";
import Modal from "../Modal/Modal";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [isMobile, setMobile] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <div
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => {
            setMobile(false);
          }}
        >
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/place-to-stay" className="nav-link">
            Place to stay
          </NavLink>
          <NavLink className="nav-link">NFTs</NavLink>
          <NavLink className="nav-link">Community</NavLink>
          <button onClick={() => setShow(true)} className="nav-btn">
            Connect wallet
          </button>
        </div>

        <Modal onClose={() => setShow(false)} show={show} />

        {isMobile ? (
          <img
            src={exit}
            alt="exit"
            className="mobile-menu-icon"
            onClick={() => {
              setMobile(false);
            }}
          />
        ) : (
          <img
            src={hamburger}
            alt="hamburger"
            className="mobile-menu-icon"
            onClick={() => {
              setMobile(true);
            }}
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
